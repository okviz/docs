---
layout:             page
title:              Color (Unmatched)
published:          true
date:               2024-09-14
modified:           2025-10-27
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

**Default value:** Custom

The transparency mode for the unmatched areas. Select "original" to use the transparency defined in the SVG file, or "custom" to define a custom transparency value.

## Custom Transparency

**Default value:** 0%

The transparency of the unmatched areas. The value ranges from 0% (completely opaque) to 100% (completely transparent).

## Outline

**Default value:** Original

Select the outline - `<stroke>` - style to use for unmatched areas.

- **Original**: Do not change areas' outlines. Use the outlines defined in the SVG file.
- **Hidden**: Hide all outlines.
- **Custom**: Use custom style for outlines.

## Force Outline

**Default value:** Off

When enabled, the outline is always displayed for unmatched areas, even if the area has no outline - `<stroke>` - in the SVG file. This is useful when you want to ensure that the outline is always visible, regardless of the SVG file's design. This option is only available when the *Outline* option is set to *Custom*. 
When forced, all outlines width will be set to the value defined in the *Outline Width* option.

## Auto Color Outline

**Default value:** Off

When enabled, the outline color is automatically set to a contrasting color (lighter or darker) based on the background color of the unmatched areas. This ensures that the outline is always visible and provides a clear distinction between the fill and outline colors. This option is only available when the *Outline* option is set to *Custom*.

## Outline Color

**Default value:** {% include color value="#000" %}

The color of the outline for unmatched areas. This option is only available when the *Outline* option is set to *Custom* and the *Auto Color Outline* option is disabled.

## Custom Outline Width

**Default value:** Off

When enabled, the outline width is set to a custom value defined in the *Outline Width*. This allows you to define the thickness of the outline for unmatched areas. This option is only available when the *Outline* option is set to *Custom* and the *Force Outline* option is disabled. 

## Outline Width

**Default value:** 1

The width of the outline of the unmatched areas. The value ranges from 1 to 1000. This option is only available when the *Outline* option is set to *Custom* and the *Force Outline* option is is enabled or the *Custom Outline Width* option is enabled.
