---
layout:             page
title:              Outline
published:          true
date:               2025-03-20
modified:           2025-03-20
order:              /synoptic-panel/options/areas/outline
---

Define the appearance of area outlines in the visual.
This option will be applied to all areas in the visual. However, each area type — *Matched*, *Unmatched*, and *Unbound* — has a separate setting in the [Apply Color To](./color-matched.md#apply-color-to) option, which determines whether the fill color is applied to the *Fill* or to the *Outline* (stroke) of that area.

If *Apply Color To* is set to *Outline* for a specific area type, then the global *Outline* settings will be ignored for that area type. For example, if *Matched* areas use *Apply Color To: Outline*, while *Unmatched* areas use *Apply Color To: Fill*, then the *Matched* areas will follow the color settings from *Apply Color To*, while *Unmatched* areas will follow the settings in the *Outline* section. Since the *Outline* settings apply globally, *Apply Color To: Outline* always takes precedence over them for the selected area types.

> Note that changing the outline style may alter the visual appearance of the areas.

## Outline

**Default value:** Original

Select how to render the outlines (stroke) of the areas from the following options:

- **Original**: Do not change style. Render them as defined in the SVG file.
- **Visible**: Add outline to all areas, with the style defined (below) by visual settings.
- **Hidden**: Hide all area outlines.

## Color Type

**Default value:** Based on Area Color

Select how to define the color of the outlines:

- **Based on Area Color**: Use an automatic contrasting color to the area fill color.
- **Custom**: Use the color defined in the *Color* option.

## Color

**Default value:** {% include color value="#000" %}

Allows you to define the color of the outlines.
This option is only available when the *Outline* option is set to *Visible* and the *Color Type* is set to *Custom*.

## Width

**Default value:** 1

Allows you to define the width (thickness) of the outlines. The value ranges from 1 to 20.
This option is only available when the *Outline* option is set to *Visible*.
