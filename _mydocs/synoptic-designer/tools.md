---
layout:             page
title:              Tools
published:          true
date:               2026-06-01
modified:           2026-06-01
order:              /synoptic-designer/03
toc_h_max:          3
next_reading:       true
---

Synoptic Designer tools are focused on building editable SVG map areas for Synoptic Panel. The toolbar groups related tools so the canvas stays compact while still exposing the common editing workflow.

## Selector

Use ***Selector*** to select, move, resize, rotate, duplicate, delete, group, and arrange existing objects.

The selector supports single selection, multi-selection, lasso selection, keyboard nudging, and canvas context menu commands.

While dragging or resizing, smart guides can show alignment and size matches with the artboard and other objects. Hold Alt or Option during pointer transforms to bypass snapping and hide smart guide lines.

## Node Selector

Use ***Node Selector*** to edit the points of supported SVG geometry. It can expose points for paths and compatible shapes.

With Node Selector, you can:

- drag points to reshape geometry;
- drag visible curve handles to adjust curves;
- Alt-drag or Option-drag a curve handle independently;
- add a node on a segment;
- remove a node while keeping valid geometry;
- keep the edited path selected after node commands.

Node Selector is separate from the normal Selector so point editing does not accidentally become a full-object transform.

## Pan

Use ***Pan*** to move the viewport without editing the SVG document. You can also temporarily pan by holding Space or using the middle mouse button.

Horizontal wheel input pans horizontally. Mouse wheel zoom anchors around the pointer when possible.

## Magic Wand

Use ***Magic Wand*** when a tracing image is active. Click an enclosed bitmap region to create an editable SVG area from that region.

Magic Wand works on the tracing image, not on foreground vector objects. It is intended for practical map tracing, not full automatic image vectorization.

The active Magic Wand options include:

- ***Node Density***, which controls how many points are kept in the generated path;
- ***Tolerance***, which controls how similar neighboring bitmap pixels can be before they are included in the traced region.

Generated Magic Wand shapes behave like other editable areas: they can be selected, formatted, renamed, bound, saved, and exported.

## Shapes

Use the shape group to create common SVG primitives:

- line;
- rectangle;
- ellipse;
- triangle;
- diamond;
- pentagon;
- hexagon;
- scallop.

Drag on the canvas to create the selected shape. Hold Shift while creating supported custom shapes to keep a square aspect ratio. Creation gestures can show smart guides for alignment and size matching.

New shapes receive editor-managed IDs so they can appear in the ***Areas*** tree and participate in binding.

## Pen

Use ***Pen*** to create precise SVG paths by placing anchors one at a time.

Click to place anchors. Hold Shift while placing an anchor to constrain the new segment to horizontal, vertical, or 45-degree diagonal angles. Press Escape after drawing a segment to commit the current path as an open path.

Open Pen paths are exported without fill. Closed Pen paths keep fill and can become bindable map areas.

## Freehand

Use ***Freehand*** to draw an organic path by dragging directly on the canvas. Synoptic Designer converts the pointer movement into editable SVG path geometry.

Freehand is useful for quick outlines, rough areas, and hand-drawn shapes that can be refined later with Node Selector.

## Split

Use ***Split*** to cut supported editable geometry with a straight drag line. Split is available in the Pen tools group.

When a drag line crosses supported geometry, Synoptic Designer replaces the source object with generated path fragments. The operation preserves visual styling and creates one undoable history command.

Split supports normal editable SVG shapes and paths. It skips locked areas, tracing layers, placed assets, and editor helper content.

## Image and SVG

Use ***Image*** to choose a local SVG or bitmap file while already editing.

If you choose a supported bitmap, it replaces the active tracing image. If you choose an SVG in an empty document, it becomes the editable document source. If you choose an SVG in a non-empty document, it is inserted as one placed asset, centered on the artboard, and protected from direct child editing.

Imported SVG markup is sanitized before it reaches the canvas.

## Text

Use ***Text*** to add SVG text annotations. Click the canvas, type in the text box, and then leave text editing to commit the content.

Text objects can be moved and styled. They are not bindable Synoptic Panel areas by default.

Empty or whitespace-only text boxes are removed when editing ends.

## Eraser

Use ***Eraser*** to remove editable canvas objects by dragging across them. Locked content and editor-only helper layers are protected.

## Erase Node

Use ***Erase Node*** to simplify path geometry by removing visible path nodes. It can enter node editing for a supported selected area and delete clicked or lassoed nodes.

Erase Node belongs to the Eraser tool group, but it edits path geometry rather than deleting entire objects.
