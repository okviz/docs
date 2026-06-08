---
layout:             page
title:              Magic Wand
published:          true
date:               2026-06-08
modified:           2026-06-08
order:              /synoptic-designer/03/04
toc_h_max:          3
next_reading:       true
---

Use ***Magic Wand*** when a tracing image is active. Click an enclosed bitmap region to create an editable SVG area from that region.

<video src="/synoptic-designer/tools/images/tool-magic-wand-tracing.mp4" autoplay loop muted></video>

Magic Wand works on the tracing image, not on foreground vector objects. It is intended for practical map tracing, not full automatic image vectorization.

The active Magic Wand options include:

- ***Node Density***, which controls how many points are kept in the generated path;
- ***Tolerance***, which controls how similar neighboring bitmap pixels can be before they are included in the traced region.

Generated Magic Wand shapes behave like other editable areas: they can be selected, formatted, renamed, bound, saved, and exported.
