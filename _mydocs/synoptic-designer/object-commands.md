---
layout:             page
title:              Object Commands
published:          true
date:               2026-06-01
modified:           2026-06-01
order:              /synoptic-designer/03-object-commands
toc_h_max:          3
next_reading:       true
---

Object commands are available from canvas right-click menus, the ***Areas*** tree, and keyboard shortcuts where supported.

Commands are validated against the current selection. Locked, hidden, unsupported, or editor-only elements cannot be changed through stale menu state.

## Duplicate and Delete

***Duplicate*** creates fresh SVG elements with fresh IDs and selects the new copy. ***Delete*** removes the selected editable objects and updates the canvas, ***Areas*** tree, and local save state.

Both commands are undoable.

## Copy and Paste

Copy and paste use Synoptic Designer's internal editor clipboard. This keeps authored SVG payloads inside the editor session and avoids browser clipboard permissions.

***Copy*** stores the selected editable areas. ***Paste*** inserts offset copies with fresh IDs, selects the pasted objects, and records one undoable history command.

## Rename

***Rename*** changes the selected area's SVG ID. Synoptic Designer validates the new ID, blocks duplicates, encodes spaces as `_x20_`, and keeps numeric-leading IDs compatible with SVG storage.

Because IDs are used for Synoptic Panel automatic binding, rename changes should be reviewed with the imported datapoint list when possible.

## Group and Ungroup

***Group*** places compatible selected objects into an SVG group. ***Ungroup*** promotes grouped children back into the surrounding hierarchy.

Grouping preserves geometry, styling, IDs, and binding metadata where the operation is valid. Groups can also participate in Synoptic Panel binding and inherited binding behavior.

## Arrange

Arrange commands change the SVG DOM order:

- ***Bring Forward***;
- ***Send Backward***;
- ***Bring to Front***;
- ***Send to Back***.

Because SVG rendering follows DOM order, these commands can change which object appears above another object.

## Align and Distribute

Alignment commands position selected objects relative to the canvas or relative to the selection, depending on the current formatting control state.

Distribution commands require enough unlocked selected objects to distribute along an axis.

## Combine

***Combine*** is available for supported multi-selections of sibling shapes. It replaces the selected shapes with one generated path and selects the result.

For closed polygon-like shapes, Synoptic Designer keeps the outside perimeter and removes internal overlapping or shared edges where supported. The generated path receives a fresh ID and uses the frontmost selected shape's visual attributes.

Combine is undoable. Unsupported open, locked, placed-asset, or helper content is left unchanged.

## Hide and Lock

***Hide*** removes an area from view without deleting it. ***Lock*** protects an area from normal editing and formatting.

Hidden and locked states are visible in the ***Areas*** tree and are preserved by browser-local save and JSVG export when supported by the project model.
