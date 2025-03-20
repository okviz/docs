---
layout:             page
title:              Color (Unbound)
published:          true
date:               2024-09-14
modified:           2025-03-20
order:              /synoptic-panel/options/areas/color-unbound
---

Define the appearance of the unbound elements in the visual.

> Note that unbound elements are elements that were deliberately excluded from the data binding process through a custom attribute in the SVG file or through the data binding configuration. See [Data Binding](../../concepts/data-binding.md#unbinding-areas) for more information.

## Color

**Default value:** Original

Select a single color to use for unbound elements background.

Available options:

- **Original**: Use the color defined in the SVG file.
- **Greyscale**: Use a greyscale color.
- **Custom**: Use the color defined below.
- **(Hidden)**: Hide the areas.

## Custom Color

**Default value:** third color of *dataColors* of [Report Theme](../../features/themes.md)

Select the color to use for unbound elements background when the *Color* option is set to *Custom*.

## Transparency

**Default value:** 0%

The transparency of the unbound elements. The value ranges from 0% (completely opaque) to 100% (completely transparent).

## Apply Color To

**Default value:** Fill

Select whether to apply the selected color to:

- **Fill**: The fill of the unbound areas. Outline of the unbound areas will follow the [Outline](./outline.md) settings.
- **Outline**: The outline (stroke) of unbound areas. When select this option, the [Outline](./outline.md) settings will be ignored for unbound areas.
