---
layout:             page
title:              Tracing Image and Magic Wand
published:          true
date:               2026-06-01
modified:           2026-06-04
order:              /synoptic-designer/06
toc_h_max:          3
next_reading:       true
---

The tracing workflow lets you use a bitmap as a visual reference while building editable SVG map areas.

## Tracing Image

A tracing image is a single bitmap reference attached to the current project. It appears behind editable SVG content and cannot be selected or transformed like a normal vector object.

Use the ***Tracing Image*** panel to:

- replace the image;
- show or hide it;
- remove it;
- fit it to the artboard width;
- restore actual size;
- adjust scale;
- align it horizontally or vertically.

Only one tracing image can be active at a time. Replacing the tracing image does not delete vector areas already created from it.

## Starting from a Bitmap

When a project starts from a bitmap, the image becomes the tracing image and the panel starts expanded. Synoptic Designer sizes the empty artboard from the bitmap and fits the tracing reference for immediate use.

This is the typical workflow for floor plans, venue diagrams, seating layouts, building maps, process diagrams, and other non-vector sources.

## Magic Wand

The ***Magic Wand*** tool uses the active tracing image to generate vector areas.

<video src="/synoptic-designer/images/tracing-image-magic-wand.mp4" autoplay loop muted></video>

Click inside a visually enclosed bitmap region. If the region can be detected safely, Synoptic Designer creates an editable SVG path aligned to the traced area.

The tool is disabled or non-actionable when no tracing image is active.

## Magic Wand Options

***Node Density*** controls how much path detail is kept. Lower density creates simpler paths. Higher density keeps more boundary detail.

***Tolerance*** controls how much nearby bitmap color variation can be included. Higher tolerance can include more pixels, but strong local contrast is still used to avoid crossing obvious boundaries.

Use lower tolerance when adjacent regions are similar but should stay separate. Use higher tolerance when the image has slight antialiasing, compression artifacts, or small color changes inside the same region.

## Practical Guidance

Magic Wand works best with clear enclosed regions and visible boundaries. It is not intended to vectorize complex photos or replace manual cleanup.

After generating areas, use Selector, Node Selector, Formatting, and the ***Areas*** tree to refine the result, rename areas, and set binding metadata.
