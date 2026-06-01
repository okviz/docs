---
layout:             page
title:              Save and Export
published:          true
date:               2026-06-01
modified:           2026-06-01
order:              /synoptic-designer/07
toc_h_max:          3
next_reading:       true
---

Synoptic Designer has two different persistence concepts: browser-local save and file export.

## Browser-Local Save

Browser-local save stores the current project in the browser profile. It is designed for continuing work later on the same device.

When ***Auto Save*** is enabled, Synoptic Designer saves changes locally and shows the current save state. When ***Auto Save*** is disabled, use ***Save*** in the header to save manually.

Browser-local projects can preserve:

- SVG content;
- mapping metadata;
- area titles;
- tracing image metadata;
- formatting;
- saved viewport zoom.

Empty projects are not kept as saved projects.

> **NOTE:** Browser-local save is not a backup. Clear browser storage, private browsing modes, profile changes, or browser policies can remove local projects.

## Clear Canvas

***Clear Canvas*** removes the current document content through an undoable command. If the current browser-local project was saved, clearing it removes the previous snapshot and keeps the project name for the next blank save.

## Export JSVG

Use ***Export*** to download a Synoptic Panel-compatible JSVG file.

The export dialog asks for:

- map name;
- author;
- attribution;
- tracing image quality when a tracing image is present.

The map name is required.

Export is a local download action. It does not publish directly to Power BI and does not require network access.

## What Export Preserves

JSVG export preserves supported SVG content and Synoptic Panel mapping metadata, including:

- area IDs shown in Synoptic Designer;
- explicit datapoint bindings;
- Do Not Bind state;
- area titles;
- groups and hierarchy;
- visible styling changes;
- supported embedded images;
- tracing image content embedded as exportable SVG image data.

Generated area IDs in the exported SVG match the IDs shown in the ***Areas*** tree, not internal SVGCanvas IDs.

## Importing into Synoptic Panel

After exporting, use the JSVG file as a map with binding metadata in Synoptic Panel. In existing Synoptic Panel documentation, this corresponds to the map-with-binding JSON export/import concept.

If you only need an SVG without mapping metadata, use the SVG content from the JSVG payload only when you understand the loss of binding metadata.
