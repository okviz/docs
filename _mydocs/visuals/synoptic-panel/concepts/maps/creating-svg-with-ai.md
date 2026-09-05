---
layout:             page
title:              Creating SVGs with AI
description:        Create SVG maps for Synoptic Panel with ChatGPT, Claude, Codex, or Grok, and prepare matching data for Power BI.
published:          true
date:               2026-09-04
modified:           2026-09-04
order:              /synoptic-panel/concepts/maps/02-ai
---

Use your preferred AI assistant to create SVG maps for Synoptic Panel: ChatGPT, Claude, Codex, or Grok. The [AI Map Maker](https://okviz.com/synoptic-panel/map-maker/) page provides access to OKVIZ's map-making instructions for these assistants.

Describe a layout, such as office rooms, warehouse sections, or equipment, and request an SVG with areas that can connect to Power BI data using Synoptic Panel. The assistant can also adapt an existing SVG and prepare matching sample data or a data template.

The generated SVGs are intended for use in Power BI with Synoptic Panel. They can also be displayed by other Power BI visuals that support SVG.

## Choose an AI Tool

OKVIZ supplies the Synoptic Panel SVG Map Maker instructions in two formats: A Custom GPT configuration for ChatGPT and an installable skill for Claude, Codex, and Grok. A skill is a package of instructions and supporting files that adds a specific workflow to an AI assistant.

| Task | ChatGPT Custom GPT | Claude, Codex, or Grok with the skill |
| --- | --- | --- |
| Create a new SVG from a description | Supported | Supported |
| Adapt an existing SVG | Supported | Supported |
| Trace areas over a bitmap image | Use Synoptic Designer | Supported when the image provides recoverable boundaries |
| Create sample data or a data template | Supported | Supported |
| Initial setup | Open the Custom GPT | Install the skill |

The same skill package is used in Claude, Codex, and Grok, with different installation steps for each assistant.

>> **IMPORTANT:** These AI assistants are third-party services. Before uploading data, floor plans, or other files, check the provider's privacy terms and the organization's sharing policies. Use fictional data or an approved sample when the original information is sensitive.

## Set Up the Tool

### ChatGPT

Open [Synoptic Panel SVG Map Maker](https://chatgpt.com/g/g-6a50fa7acabc8191800d714a734d0aba-synoptic-panel-svg-map-maker) and start a conversation. The Custom GPT already contains the map-making instructions; no skill installation is required.

Describe the map to create, or attach an existing SVG and explain the changes required. Include the data identifiers when they are already available.

### Codex, Claude, and Grok

Open the [Synoptic Panel Map Maker repository](https://github.com/okviz/synoptic-panel-map-maker). Select ***Code***, then ***Download ZIP***, and follow the installation steps for the chosen assistant below.

> **NOTE:** Use the complete skill package, including its supporting references, examples, and scripts.

#### Install in Codex

Extract the downloaded ZIP. Rename the extracted folder to `synoptic-panel-map-maker` if its name includes a branch suffix such as `-main`.

Copy the complete `synoptic-panel-map-maker` folder into `.agents/skills/` inside the project repository. The resulting path is `.agents/skills/synoptic-panel-map-maker/SKILL.md`, with the supporting folders alongside `SKILL.md`.

Start a task in that project and ask Codex to use the `synoptic-panel-map-maker` skill. If the skill does not appear, restart Codex. For installation across projects, see the [Codex installation instructions](https://github.com/okviz/synoptic-panel-map-maker#codex) and [official skill documentation](https://learn.chatgpt.com/docs/build-skills).

#### Install in Claude

For Claude on the web or desktop, use the downloaded ZIP as-is. There is no need to extract, rename, or recompress it.

1. In Claude, open ***Customize***, then ***Skills***. Select ***+***, ***Create skill***, then ***Upload a skill***, and upload the ZIP downloaded from GitHub.
2. Enable the uploaded skill and ensure that ***Code execution and file creation*** is enabled. Organization-managed accounts may require an administrator to enable these capabilities.
3. Start a conversation and explicitly request the `synoptic-panel-map-maker` skill when describing the map.

For account-specific settings or upload problems, see Claude's [custom skill instructions](https://support.claude.com/en/articles/12512180-use-skills-in-claude).

Claude Code uses a folder-based installation instead. See the [Claude Code installation instructions](https://github.com/okviz/synoptic-panel-map-maker#claude).

#### Install in Grok

Extract the downloaded ZIP. Rename the extracted folder to `synoptic-panel-map-maker` if its name includes a branch suffix such as `-main`.

For Grok Build, copy the complete `synoptic-panel-map-maker` folder into `.grok/skills/` inside the project repository. The resulting path is `.grok/skills/synoptic-panel-map-maker/SKILL.md`, with the supporting folders alongside `SKILL.md`.

In Grok Build, use `/synoptic-panel-map-maker` with the map request. For other supported installation locations, see the [Grok installation instructions](https://github.com/okviz/synoptic-panel-map-maker#grok) and [official skill documentation](https://docs.x.ai/build/features/skills-plugins-marketplaces).

## Describe the Map and Its Data

An SVG area needs an identifier that corresponds to a value in the report's data. For example, a room with the SVG identifier `ROOM01` can connect to a row whose room code is `ROOM01`. This relationship is called [data binding](../data-binding.md).

If data already exists, provide an approved sample before creating the SVG and identify the column that contains the area keys. The assistant can use those values as the SVG area identifiers.

If data is not yet available, ask the assistant to create a consistent set of identifiers when generating the SVG. Those identifiers can then be used to generate matching sample data or a template.

Explain which shapes should connect to data and which should remain decorative.

For example, in the case of an office map, specify:

- The number of rooms and their arrangement.
- Whether each area represents a room, a desk, or another unit.
- The identifiers to use for those areas.
- Which elements, such as corridors or a background, are decorative.
- Whether sample data or a template is required.

### Sample Data and Templates

The Custom GPT and the skill can provide a CSV to match the generated SVG:

- Synthetic data contains fictional values for testing the map and report behavior.
- A data template contains the matching area identifiers, with metric or status columns left empty for real values.

Ask for the CSV together with the map in the initial prompt, or after reviewing the SVG. The CSV must use the same area identifiers as the map. Keep those identifiers consistent when replacing fictional values with real data.

## Create the Map

Choose the workflow that matches the starting point: create a new map from a description, or trace areas over an existing bitmap image.

When using Claude, Codex, or Grok, add a request to use the installed `synoptic-panel-map-maker` skill. Answer any questions about the layout or data before generation proceeds.

The assistant may also suggest a relevant OKVIZ use-case article to illustrate how a similar map can be used in a report.

### From a Description

The following prompt describes a schematic office layout with one data point per room:

```text
Create an SVG map for Synoptic Panel showing 12 office rooms,
with six rooms on each side of a central corridor.
Use ROOM01 through ROOM12 as the room identifiers.
Make each room a separate area that can connect to data.
Treat the corridor and outer background as decoration.
Use neutral room fills. Do not draw room names or numeric
values as text inside the rooms.
Also create a synthetic CSV with the columns RoomCode,
OccupiedDesks, and TotalDesks. Use the same room identifiers
in RoomCode, with one row per room.
Deliver the SVG and CSV as downloadable files.
```

The prompt keeps room names and values out of the SVG itself so they can be configured as labels in Synoptic Panel.

For the office example, `RoomCode` identifies each room, while `OccupiedDesks` and `TotalDesks` contain numeric values. Check that every intended room has a corresponding row and that occupied desks do not exceed total desks.

A layout generated from a description is schematic. It does not establish the dimensions or actual arrangement of a building. Review the downloaded SVG before using it in a report.

For revisions, describe the specific change and ask the assistant to preserve existing identifiers. For example, request a wider corridor without renaming or removing the room areas.

### From a Bitmap

With the skill installed, Claude, Codex, and Grok can attempt to trace areas from a bitmap supplied with the request, such as a PNG or JPEG floor plan. The result can retain the original image as a background with SVG areas above it.

Specify which objects to trace, what to exclude, and the required level of detail. For example:

```text
Use the synoptic-panel-map-maker skill to trace the rooms
in this uploaded floor plan as separate Synoptic Panel areas.
Exclude corridors, stairs, furniture, and the building outline.
Keep the original image as the background.
Use the room codes in the attached table for the area identifiers.
Assess whether the room boundaries can be recovered before tracing.
```

The skill first assesses the image and requested areas. It may ask for clarification, recommend a clearer source, or suggest [Synoptic Designer](../../../../synoptic-designer/index.md) when the boundaries cannot be recovered reliably. A large or sharp image can still be unsuitable if the area boundaries are ambiguous.

Review that assessment before confirming whether to proceed. If the output is identified as an uncertain starting point, refine and check it in Synoptic Designer before use. A successful tracing result also requires a visual check against the source image.

> **NOTE:** The Custom GPT does not trace bitmap boundaries or create overlays on the original bitmap. Use Synoptic Designer for that workflow. A new schematic inspired by an image is a separate request and does not reproduce the source geometry exactly.

## Review and Import the Map

Check the downloaded SVG and its data together:

1. Confirm that the expected areas are present. The office example requires 12 separate room areas.
2. Check the identifiers against the data keys. Confirm that none are missing or unintentionally duplicated.
3. Inspect the shapes for overlaps, gaps, or incorrect boundaries. For traced maps, compare every area with the original image.
4. Check that decorative elements remain separate from data areas and that static text does not duplicate the labels intended for Synoptic Panel.
5. Open the SVG in [Synoptic Designer](../../../../synoptic-designer/index.md) to refine the geometry or area names when needed. Preserve the identifiers used by the data.

In Power BI, load the data and add Synoptic Panel to the report. Place the key column, such as `RoomCode`, in the [***Categories***](../../fields/categories.md) field well. Add the numeric column or measure to the [***Value***](../../fields/value.md) field well.

Follow the [local map import procedure](../../features/importing/index.md#local-maps) to load the SVG.

Configure [***Category Labels***](../../options/category-labels/index.md) to show the room names and [***Data Labels***](../../options/data-labels/index.md) to show numeric values. These labels use the report data and can update when the data changes.

Confirm that each room connects to the expected data and that labels, colors, tooltips, and selections behave as intended.

If a room does not connect to its data, check that `RoomCode` is the column placed in ***Categories***. A room with the SVG identifier `ROOM01` needs a corresponding `ROOM01` entry in that column. If the SVG uses `ROOM01` but the data uses `Office 1`, Synoptic Panel cannot connect them automatically. Rename the SVG area to match the data, or use [manual data binding](../data-binding.md#manual-binding) to associate the room with the correct data entry.

>> **IMPORTANT:** AI output can contain incorrect geometry or identifiers even when the SVG opens successfully. Automated checks do not replace inspection of the map or testing in Synoptic Panel. Replace synthetic values and complete blank template fields before using the report with real data.
