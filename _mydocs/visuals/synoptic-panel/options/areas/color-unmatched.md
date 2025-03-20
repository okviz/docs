---
layout:             page
title:              Color (Unmatched)
published:          true
date:               2024-09-14
modified:           2025-03-20
order:              /synoptic-panel/options/areas/color-unmatched
---

Define the appearance of the unmatched elements in the visual.

> Note that unmatched elements are the elements that are not associated with a data point in the dataset. See [Data Binding](../../concepts/data-binding.md) for more information.

## Color

**Default value:** Original

Select a single color to use for unmatched elements background.

Available options:

- **Original**: Use the color defined in the SVG file.
- **Greyscale**: Use a greyscale color.
- **Custom**: Use the color defined below.
- **(Hidden)**: Hide the areas.

## Custom Color

**Default value:** second color of *dataColors* of [Report Theme](../../features/themes.md)

Select the color to use for unmatched elements background when the *Color* option is set to *Custom*.

## Transparency

**Default value:** 0%

The transparency of the unmatched elements. The value ranges from 0% (completely opaque) to 100% (completely transparent).

## Apply Color To

**Default value:** Fill

Select whether to apply the selected color to:

- **Fill**: The fill of the unmatched areas. Outline of the unmatched areas will follow the [Outline](./outline.md) settings.
- **Outline**: The outline (stroke) of unmatched areas. When select this option, the [Outline](./outline.md) settings will be ignored for unmatched areas.
