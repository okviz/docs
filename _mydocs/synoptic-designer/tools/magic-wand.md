---
layout:             page
title:              Magic Wand
published:          true
date:               2026-06-08
modified:           2026-06-15
order:              /synoptic-designer/03/04
toc_h_max:          3
next_reading:       true
---

Use ***Magic Wand*** to trace an enclosed region from the active tracing image and convert it into an editable SVG area.

<video src="/synoptic-designer/tools/images/tool-magic-wand-tracing.mp4" autoplay loop muted></video>

Click inside a visually enclosed bitmap region to show a non-destructive preview aligned to the traced boundary. While the preview is visible, adjust the Magic Wand options if needed.

To create the area, confirm the preview. Click the canvas again, press Enter, or press Space to insert the preview as a selected SVG path. Press Escape to cancel the preview without changing the document.

The active Magic Wand options include:

- ***Node Density***, which controls how many points are kept in the generated path;
- ***Tolerance***, which controls how similar neighboring bitmap pixels can be before they are included in the traced region.

Changing ***Node Density*** or ***Tolerance*** while a preview is visible recomputes that same preview from the original click point before insertion. This lets you tune the traced boundary before committing the path.

Generated Magic Wand shapes behave like other editable areas: they can be selected, formatted, renamed, bound, saved, and exported.

Magic Wand works on the tracing image, not on foreground vector objects. It needs an active, visible tracing image and works best with clear enclosed regions and visible boundaries. If the pointer is outside the tracing image or over an existing visible vector area, Synoptic Designer does not create a trace from that point.
