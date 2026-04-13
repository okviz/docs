# Repository Agents Instructions

## Scope

This repository contains the public documentation website for OKVIZ custom visuals for Power BI. It is a Jekyll/GitHub Pages project.

Most user-authored content lives under `_mydocs` and `_myassets`. Prefer editing those areas. Touch shared site structure such as `_layouts`, `_includes`, `assets`, or config files only when the request clearly requires a site-wide change.

## Mission

When modifying documentation, optimize for factual accuracy of:

- visual capabilities
- formatting pane options
- field well behavior
- licensing notes
- version-specific differences
- public user-facing terminology

This repo is public. Some reference repos for the visuals are private. Treat that boundary as a hard rule.

## Required Reference Workflow

1. Start from the existing documentation tree and reuse current structure, wording patterns, front matter, and navigation relationships whenever possible.
2. Then look for `.agents/visual-repos.local.json`. This file is the local registry of source repos and local clone paths for each visual.
3. If `local_clone_path` exists, the agent must ask the user for permission and run a shallow `git fetch --depth 1` before using that local clone as the primary reference.
4. If `local_clone_path` does not exist but the registry provides `private_remote_url`, the agent must ask the user for permission and then run a shallow `git clone --depth 1` into the parent directory derived from `local_clone_path`.
5. After a successful fetch or clone, use the refreshed local clone as the primary reference for feature behavior, option names, field definitions, supported variants, changelog notes, and breaking changes.
6. Use public issue/support repos and public OKVIZ repos only as secondary references for regressions, naming, examples, and externally visible behavior.
7. If the local registry or the source repo is not available, state that limitation explicitly in the final response and avoid inventing undocumented behavior.

## Missing Registry Fallback

- If the user asks for a comparison or verification against the source code and `.agents/visual-repos.local.json` does not exist, stop before making assumptions.
- In that case, suggest how to fill `.agents/visual-repos.local.json` with a ready-to-paste JSON snippet tailored to the requested visual or visuals.
- The suggested snippet must include at least `docs_root`, `local_clone_path`, `private_remote_url`, and, when useful, `default_branch`.
- If the visual name is clear from the request or from the docs path being edited, use that visual key in the suggested snippet instead of a generic placeholder.
- If the visual name is not clear, suggest the minimal template from `.agents/visual-repos.example.json` and ask the user to fill the missing entries.

## Auto Checkout Policy

- When a documentation task requires a visual source repo and the configured local clone exists, the agent must attempt the approval-and-fetch flow before using it as a reference.
- When a documentation task requires a visual source repo and the configured local clone is missing, the agent must attempt the approval-and-clone flow before proceeding without source references.
- Automatic repo refresh and checkout are allowed only after explicit user approval.
- Use a shallow fetch by default: `git fetch --depth 1`.
- Use a shallow clone by default: `git clone --depth 1`.
- Derive the clone parent directory from `local_clone_path` and do not clone inside this public docs repository.
- Derive the clone directory name from `local_clone_path`.
- If the registry defines `default_branch`, the agent may fetch or clone that branch directly.
- If full history, tags, or older commits are needed later, ask the user before converting the clone into a full checkout or fetching more history.
- Do not run `git pull`, merge, rebase, branch switches, or any other working-tree-changing repo action automatically. Use `git fetch` for refreshes.
- If the configured target path already exists but is not a valid Git working tree, stop and ask the user how to proceed.
- Never store authentication material in this repository or inside the committed example registry.

## Public And Private Boundary

- Never commit private repo URLs, credentials, tokens, branch names, internal ticket links, or copied code excerpts from private repos into this public repository.
- Do not add links in published docs that point to private repos, private assets, or internal systems.
- Summarize behavior learned from private code instead of copying implementation details.
- Treat screenshots, snippets, labels, and options from unreleased features as confidential unless the user explicitly says they are public.

## Documentation Rules

- Keep the content user-facing, concise, and specific to the visual.
- Use the exact labels shown in Power BI and in the visual UI. Do not rename options based on guesswork.
- Keep version-specific behavior separate. Do not merge behaviors across variants such as Synoptic Panel v2, Lite, and v1 without verification.
- Prefer updating existing pages over creating duplicate pages for similar content.
- When a page changes meaningfully, update `modified` to the current date in `YYYY-MM-DD` format. Only change `date` when creating a new page.
- Preserve front matter conventions and menu ordering. New pages must include a valid `order` and appropriate `next_reading` or `related` metadata when needed.
- Store images next to the relevant section under an `images/` folder. Use lowercase file names with hyphens and no spaces.
- Use standard Markdown supported by this site and reuse existing patterns for notices, badges, PDFs, and page navigation.

## Repo Layout Cues

- `_mydocs/` contains documentation pages and drives most of the navigation tree.
- `_myassets/` contains user-managed styles, scripts, and images.
- `.agents/` contains agent-specific helper files and local/private repo mappings.
- `_myinternal/` is reserved for local or internal helper material that should not become part of the generated website.
- `docs0-README.md` documents the site conventions, front matter, and Markdown rules. Consult it before introducing new structures.

## Validation

- Check relative links, image paths, and cross-page references when adding or moving content.
- If a change depends on source-repo behavior, mention which reference repo or local clone was used.
- If docs and source code disagree, prefer verified behavior and note the discrepancy briefly.
- Avoid broad rewrites when only a single feature, field, or option needs an update.

## Local Repo Registry

- Keep per-visual source mappings in `.agents/visual-repos.local.json`.
- Do not commit that local registry file.
- Use `.agents/visual-repos.example.json` as the committed template.
- Prefer `local_clone_path` entries for private repos so the agent can inspect code locally without exposing private origin details.
- For auto checkout, provide `local_clone_path`, `private_remote_url`, and optionally `default_branch`.
