# Synoptic Designer Agent Instructions

## Scope

These instructions apply to Synoptic Designer documentation and media:

- `_mydocs/synoptic-designer/`
- `_mydocs/synoptic-designer/images/`
- `_mydocs/synoptic-designer/tools/`
- `_mydocs/synoptic-designer/tools/images/`
- local-only capture helpers under `_myinternal/synoptic-designer-media/`

Use the repository-level `AGENTS.md` instructions first, then apply this file
for Synoptic Designer-specific behavior.

## Reference Workflow

- Use the `synoptic-designer` entry in `.agents/visual-repos.local.json` when a
  task requires source verification. Follow the repository approval-and-fetch or
  approval-and-clone workflow before using the private source repo.
- Do not copy private implementation details, private URLs, branch names, local
  paths, screenshots of unreleased features, or internal issue references into
  tracked documentation.
- If the local registry is missing or the source repo cannot be refreshed, state
  that limitation and avoid inventing behavior.

## Content Rules

- Use the product name `Synoptic Designer`.
- Keep Synoptic Designer behavior separate from Synoptic Panel visual behavior
  unless the page explicitly explains integration between the two.
- Use exact UI labels from the application, including capitalization and
  shortcuts such as `Rectangle (R)` or `Selector (V)`.
- Use `JSVG` for the project/export format and explain it as a map file only
  when the page needs that context.
- Keep the documentation focused on browser-based map authoring: creating,
  editing, binding, saving, and exporting SVG-based maps for Synoptic Panel.
- Do not document experimental or unreleased UI unless the user explicitly says
  it is public.

## Media Locations

- Store published Synoptic Designer images and videos next to the page section:
  `_mydocs/synoptic-designer/images/` for section-level pages and
  `_mydocs/synoptic-designer/tools/images/` for tool pages.
- Keep raw recordings, camera profiles, contact sheets, and local capture
  artifacts under `_myinternal/synoptic-designer-media/`. That folder is ignored
  by Git and must not be referenced from published Markdown.
- Embed images with HTML `<img />` tags and videos with HTML `<video>` tags, as
  required by `docs0-README.md`.
- Screencast captions must not use a dark caption box. Use heavy white text with
  a thick black outline, similar to bold outlined tutorial captions, so captions
  remain readable across changing UI backgrounds.

## Capture Workflow

- Prefer regenerating the smallest capture target needed. Do not run the full
  capture suite unless the user asks for it or a shared UI change affects most
  media.
- The current local section capture helper accepts target names:
  `node _myinternal/synoptic-designer-media/capture-sections.mjs <target>`.
- To re-encode an existing video from the local raw `.webm` and camera JSON,
  use:
  `node _myinternal/synoptic-designer-media/capture-sections.mjs --encode-only <target-or-asset-name>`.
- Existing section targets are:
  `create-load-projects`, `workspace`, `tool-selector`, `tool-node-selector`,
  `tool-pan`, `tool-magic-wand`, `tools`, `tool-grid`, `tool-pen`,
  `tool-freehand`, `tool-split`, `tool-text`, `tool-eraser`,
  `tool-erase-node`, `object-commands`, `areas-data-binding`, `formatting`,
  `tracing-image-magic-wand`, `save-export`, `shortcuts`, `help`, and
  `best-practices`.
- The current local index helper regenerates the Synoptic Designer landing media:
  `node _myinternal/synoptic-designer-media/capture-index.mjs`.
- To re-encode the landing screencast only, use:
  `node _myinternal/synoptic-designer-media/capture-index.mjs --encode-only`.
- Use `--no-contact-sheet` for fast iteration when a review sheet is not needed.
- Use `--final` for final-quality encoding. The default local encode preset is
  optimized for faster iteration.
- When changing or replacing media tooling, keep the target-oriented interface.
  A useful runner should support target names, published asset names, changed-doc
  detection, encode-only mode from existing raw recordings, and a final-quality
  mode for commit-ready output.

## Fast Regeneration Rules

- For an existing screenshot or screencast, first identify the capture target
  that owns the published asset, then regenerate only that target.
- If only crop, zoom, caption timing, compression, or contact-sheet output
  changed and the raw `.webm` plus camera JSON still exist, prefer encode-only
  regeneration instead of driving the application again.
- Use fast encoder settings for iteration and final encoder settings only for
  assets that are ready to publish.
- Generate contact sheets for review, but do not require them for every fast
  iteration.
- Keep fixtures deterministic and local. Avoid using account-specific data,
  cloud state, or private customer content in captures.

## Desired Shared Media Manifest

If media generation needs to become repeatable for more contributors, add a
tracked manifest under `.agents/` or `_scripts/` that maps each capture target to:

- published outputs
- source docs that reference those outputs
- local-only raw outputs
- app URL or route used for capture
- fixture files
- capture script and encoder settings

The runner should use that manifest to skip up-to-date outputs and to support
commands such as regenerate by target, regenerate by published asset, regenerate
assets referenced by changed docs, and encode existing raw recordings only.
