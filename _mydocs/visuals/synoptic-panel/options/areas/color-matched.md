---
layout:             page
title:              Color
published:          true
date:               2024-09-14
modified:           2025-03-20
order:              /synoptic-panel/options/areas/color
---

Define the appearance of the matched areas in the visual.

> Note that matched areas are the areas that are associated with a data point in the dataset. See [Data Binding](../../concepts/data-binding.md) for more information.

## Color

**Default value:** Custom

Select a single color to use for matched areas background.

Available options:

- **Original**: Use the color defined in the SVG file.
- **Greyscale**: Use a greyscale color.
- **Custom**: Use the color defined below.
- **(Hidden)**: Hide the areas.

> Note that this option is only available when if there is no 'Legend' field in the field well.

## Custom Color

**Default value:** first color of *dataColors* of [Report Theme](../../features/themes.md)

Select the color to use for matched areas background when the *Color* option is set to *Custom*.

## Transparency

**Default value:** 0%

The transparency of the matched areas. The value ranges from 0% (completely opaque) to 100% (completely transparent).

## Apply Color To

**Default value:** Fill

Select whether to apply the selected color to:

- **Fill**: The fill of the matched areas. Outline of the matched areas will follow the [Outline](./outline.md) settings.
- **Outline**: The outline (stroke) of matched areas. When select this option, the [Outline](./outline.md) settings will be ignored for matched areas.
