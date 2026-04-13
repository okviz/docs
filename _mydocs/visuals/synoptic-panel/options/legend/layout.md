---
layout:             page
title:              Layout
published:          true
date:               2024-12-09
modified:           2025-02-05
order:              /synoptic-panel/options/legend/layout
draft:              true
---

This section provides options for configuring the legend layout.

## Position

**Default value:** Bottom

The position of the legend.

## Alignment

**Default value:** Left

The alignment of the legend. When the position is set to `Top` or `Bottom`, the alignment can be set to `Left`, `Center`, or `Right`. When the position is set to `Left` or `Right`, the alignment can be set to `Top`, `Middle`, or `Bottom`.

## Max Items

**Default value:** 30

The maximum number of items to show in the legend. Set `0` to display all items.

## Item Size

**Default value:** Auto

The size of the items in the legend.

Available options:

- **Auto**: The items are automatically sized based on the content.
- **Auto (with max)**: As before, but with a maximum size.
- **Fixed**: The visual will display the items with a fixed size.

When the size is not `Auto`, the default fixed/max size is `40px`; it will be used for the width or height, depending on the orientation of the legend.

## Legend Size

**Default value:** Auto

The size of the legend

Available options:

- **Auto**: The legend is automatically sized based on the content.
- **Auto (with max)**: As before, but with a maximum size.
- **Fixed**: The visual will display the items with a fixed size.

When the size is not `Auto`, the default fixed/max size is `200px`; it will be used for the width or height, depending on the orientation of the legend.

## Show Scrollbar

**Default value:** Off

When enabled, a scrollbar will be shown if the legend size cannot contain all items.
