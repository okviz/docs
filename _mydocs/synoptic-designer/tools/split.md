---
layout:             page
title:              Split
published:          true
date:               2026-06-08
modified:           2026-07-06
order:              /synoptic-designer/03/08
toc_h_max:          3
next_reading:       true
---

Use ***Split*** to cut supported editable geometry with a straight drag line. Split is available in the Pen tools group.

<video src="/synoptic-designer/tools/images/tool-split-cut.mp4" autoplay loop muted></video>

When a drag line crosses supported geometry, Synoptic Designer replaces the source object with generated path fragments. The operation preserves visual styling and creates one undoable history command.

Split supports normal editable SVG shapes and paths. It skips locked areas, tracing layers, placed assets, and editor helper content.
