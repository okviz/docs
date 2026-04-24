---
layout:             page
title:              Data Label
published:          true
date:               2026-04-07
modified:           2026-04-24
order:              /card-with-states/options/data-label
internal:           dataLabel
next_reading:       true
next_reading_title: Options
---

**Default value:** On

This section contains the options of the main value shown in the card.

The **Data Label** card is organized into **Appearance**, **Value**, and **Reference**.

The **Reference** settings are available only when a measure is bound to **Targets**.

When the visual receives multiple data points through the trendline, the value shown by the data label is controlled by [Trendline > Display Data Point](../trendline/index.md#display-data-point).

## Color

**Default value:** Foreground color from the current report theme

This option sets the color of the main value.

The final color can be overridden by [OKVIZ Color Rules](../../../features/color-rules.md).

Read more about theme colors: [Report Themes with Custom Visuals](../../../features/themes.md)

## Font

**Default value:** Size 30, default numeric font, regular style

This composite control defines the font family, size, bold, italic, and underline settings of the main value.

When **Auto Font Size** is enabled, the font size field inside this control is ignored.

## Auto Font Size

**Default value:** On

This option automatically adjusts the main value size to fit the available space inside the card.

When enabled, the font size in **Font** is ignored and the visual uses **Min Font Size** and **Max Font Size** as limits.

## Min Font Size

**Default value:** 8

This option defines the minimum font size used when **Auto Font Size** is enabled.

## Max Font Size

**Default value:** 50

This option defines the maximum font size used when **Auto Font Size** is enabled.

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
