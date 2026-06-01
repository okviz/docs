---
layout:             page
title:              Synoptic Designer
menu_title:         Synoptic Designer
published:          true
date:               2026-06-01
modified:           2026-06-01
order:              /{synoptic-designer}
next_reading:       true
---

Synoptic Designer is the browser-based companion editor for [Synoptic Panel](../visuals/synoptic-panel/index.md). It helps you create, update, bind, save, and export SVG-based maps without leaving project content on a server.

Use Synoptic Designer when you need to:

- create a new Synoptic Panel map from a blank canvas;
- trace a bitmap image into editable SVG areas;
- clean up or extend an existing SVG map;
- edit an existing JSVG map while preserving data binding metadata;
- prepare a map that can be imported into Synoptic Panel.

Synoptic Designer is intentionally focused on Synoptic Panel map authoring. It includes common vector editing tools, but it is not meant to replace a full illustration application.

## What Synoptic Designer Creates

Synoptic Panel uses SVG maps. A map area is usually an SVG shape or group with an identifier that can be matched to a value in the ***Categories*** field well. Synoptic Designer keeps that relationship visible while you edit the map.

The main export format is JSVG. A JSVG file is a JSON map file that contains the SVG artwork plus optional Synoptic Panel data mapping. This allows Synoptic Designer to preserve:

- SVG shapes, groups, text, and supported embedded images;
- area identifiers used for automatic binding;
- explicit data point bindings;
- areas marked as ***Do Not Bind***;
- optional area titles;
- tracing images embedded by Synoptic Designer.

## Local-Only Workflow

Synoptic Designer runs in the browser. Core workflows do not require a Power BI connection, an OKVIZ account, cloud storage, or a backend service.

Project files, imported data lists, bitmap tracing images, and saved browser-local projects remain local to the browser unless you explicitly export or download a file.

> **NOTE:** Browser-local projects are saved in the current browser profile. They are useful for continuing work later on the same device, but they are not a cloud backup. Export a JSVG file when you need a portable copy.

## Main Areas

The editor is organized around a central canvas with four supporting areas:

- the header for project actions, local save state, and export;
- the left toolbar for selection, drawing, tracing, insertion, text, erasing, and panning tools;
- the right inspector for ***Areas*** and ***Formatting***;
- the bottom controls for tracing image, zoom, undo, redo, and clear canvas.

The next pages describe each area in detail.
