---
layout:             page
title:              Synoptic Designer
menu_title:         Synoptic Designer
published:          true
date:               2026-06-01
modified:           2026-07-06
order:              /{synoptic-designer}
next_reading:       true
---

Synoptic Designer is the browser-based companion editor for [Synoptic Panel](../visuals/synoptic-panel/index.md). It helps you create, update, bind, save, and export SVG-based maps without leaving project content on a server.

<a href="https://synoptic.design/"><img src="images/synoptic-designer-logo.svg" class="naked nozoom" width="300" /></a>

> **NOTE:** You can use Synoptic Designer in a browser on any device, including Windows, Mac, Linux, and mobile devices. It works best in modern browsers such as Chrome, Edge, Firefox, and Safari. Visit [synoptic.design](https://synoptic.design/) to try it out.

Use Synoptic Designer when you need to:

- create a new Synoptic Panel map from a blank canvas;
- trace a bitmap image into editable SVG areas;
- clean up or extend an existing SVG map;
- edit an existing JSVG map while preserving data binding metadata;
- prepare a map that can be imported into Synoptic Panel.

The following workflow creates a first SVG area from a blank project.

<video src="images/create-first-area.mp4" autoplay loop muted></video>

Synoptic Designer is intentionally focused on Synoptic Panel map authoring. It includes common vector editing tools, but it is not meant to replace a full illustration application.

## What Synoptic Designer Creates

Synoptic Panel uses [SVG maps](../visuals/synoptic-panel/concepts/maps/index.md#svg). A map area is usually an SVG shape or group with an identifier that can be matched to a value in the [***Categories*** field well](../visuals/synoptic-panel/fields/categories.md). Synoptic Designer keeps that relationship visible while you edit the map.

For the complete matching behavior, see [Data Binding](../visuals/synoptic-panel/concepts/data-binding.md) in the Synoptic Panel documentation.

The main export format is [JSVG](../visuals/synoptic-panel/concepts/maps/index.md#jsvg). A JSVG file is a JSON map file that contains the SVG artwork plus optional Synoptic Panel data mapping. This allows Synoptic Designer to preserve:

- SVG shapes, groups, text, and supported embedded images;
- area identifiers used for automatic binding;
- explicit data point bindings;
- areas marked as [***Do Not Bind***](../visuals/synoptic-panel/concepts/data-binding.md#unbinding-areas);
- optional area titles;
- tracing images embedded by Synoptic Designer.

## Local-Only Workflow

Synoptic Designer runs in the browser. Core workflows do not require a Power BI connection, an OKVIZ account, cloud storage, or a backend service.

Project files, imported data lists, bitmap tracing images, and saved browser-local projects remain local to the browser unless you explicitly export or download a file.

> **NOTE:** Browser-local projects are saved in the current browser profile. They are useful for continuing work later on the same device, but they are not a cloud backup. Export a JSVG file when you need a portable copy.

For a tour of the editor layout, see [Workspace](workspace.md).
