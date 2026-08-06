---
layout:             page
title:              Magic Wand
published:          true
date:               2026-06-08
modified:           2026-08-06
order:              /synoptic-designer/03/04
toc_h_max:          3
next_reading:       true
---

Use ***Magic Wand*** to trace an enclosed region from the active tracing image and convert it into an editable SVG area.

<video src="images/tool-magic-wand-tracing.mp4" autoplay loop muted></video>

Click inside a visually enclosed bitmap region to show a non-destructive preview aligned to the traced boundary. The preview uses a dashed outline and is not inserted into the SVG document yet.

To create the area, click the preview directly. Synoptic Designer inserts the preview as an editable SVG path and returns to ***Selector*** unless ***Keep after Use*** is enabled.

Turn on ***Quick apply*** when you want the first click to insert the traced area immediately, without preview confirmation. ***Quick apply*** is off by default.

Clicking another bitmap region replaces the current preview with a new one. Press Escape, Delete, or Backspace to cancel the preview without changing the document.

The active Magic Wand options include:

- ***Node Density***, which controls how many points are kept in the generated path;
- ***Tolerance***, which controls how similar neighboring bitmap pixels can be before they are included in the traced region.

The options remain available while ***Magic Wand*** is active. Changing ***Node Density*** or ***Tolerance*** recomputes the current preview when one exists and becomes the starting value for the next trace. Higher ***Tolerance*** values expand the traced region more predictably from the clicked source pixel.

Generated Magic Wand shapes behave like other editable areas: they can be selected, formatted, renamed, bound, saved, and exported.

Magic Wand works on the tracing image, not on foreground vector objects. It needs an active, visible tracing image and works best with clear enclosed regions and visible boundaries. Activating Magic Wand clears the current selection and keeps the canvas unselected while the tool remains active. If the pointer is outside the tracing image or over an existing visible vector area, Synoptic Designer does not create a trace from that point.
