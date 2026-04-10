---
layout:             page
title:              Data Label
published:          true
date:               2026-04-07
modified:           2026-04-08
order:              /card-with-states/options/data-label
internal:           dataLabel
next_reading:       true
next_reading_title: Options
---

This section contains the options of the main value shown in the card.

The **Reference** settings are available only when a measure is bound to **Targets**.

## Value

**Default value:** Last data point

This option chooses which value is displayed as the main label.

Available options:

- **Last data point**
- **First data point**
- **Dynamic**
- **Sum**
- **Average**
- **Minimum**
- **Maximum**

This option is available only when the visual receives multiple data points through the trendline.

When set to **Dynamic**, the main value follows the currently hovered point on the trendline.

See also: [Trendline](../trendline/index.md)

## Display Unit

**Default value:** Auto

This option controls how the main value is scaled and formatted.

## Decimal Places

**Default value:** 1

This option defines the number of decimal places shown for the main value. The value ranges from 0 to 4.

## Number Locale

**Default value:** `123,456.789`

This option defines the locale used to format numeric values.

Available options:

- **123,456.789**
- **123.456,789**
- **123 456,789**
- **1,23,456.789**

## Color

**Default value:** Foreground color from the current report theme

This option sets the color of the main value.

The final color can be overridden by [OKVIZ Color Rules](../../../features/color-rules.md).

Read more about theme colors: [Report Themes with Custom Visuals](../../../features/themes.md)

## Text Size

**Default value:** 30

This option defines the size of the main value text. The value ranges from 5 to 100.

## Font Family

**Default value:** `wf_standard-font, helvetica, arial, sans-serif`

This option sets the font family of the main value.

## Reference

**Default value:** Off

This option shows a secondary label based on the current target.

It is available only when a measure is bound to **Targets**.

When enabled, you can also configure **Type**, **Position**, **Decimal Places**, and **Text Size**.

## Type

**Default value:** Percentage change over target

This option defines what the reference label displays.

Available options:

- **Percentage change over target**
- **Change over target**
- **Percentage over target**
- **Target**

It is available only when **Reference** is enabled.

## Position

**Default value:** Right

This option defines where the reference label is rendered.

Available options:

- **Right**
- **Bottom**

It is available only when **Reference** is enabled.

## Decimal Places

**Default value:** 2

This option defines the number of decimal places shown for the reference label. The value ranges from 0 to 4.

It is available only when **Reference** is enabled.

## Text Size

**Default value:** 80%

This option defines the reference label size as a percentage of the main value text size. The value ranges from 0% to 100%.

It is available only when **Reference** is enabled.
