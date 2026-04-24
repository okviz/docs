---
layout:             page
title:              Category Label
published:          true
date:               2026-04-07
modified:           2026-04-24
order:              /card-with-states/options/category-label
internal:           categoryLabel
next_reading:       true
next_reading_title: Options
---

**Default value:** On

This section contains the options that control the secondary label of the card.

The **Category Label** card is organized into **Appearance** and **Value**.

## Display

**Default value:** Auto

This option defines what is shown in the category label.

Available options:

- **Auto**
- **Measure**
- **Measure with aggregation**
- **Measure (vs. target)**
- **Goal: target value**
- **Current data point**
- **Category**
- **Custom text**

In **Auto** mode, the visual chooses the most appropriate text according to the current data binding and aggregation.

## Custom Display Text

**Default value:** Empty

This option lets you define custom text for the category label.

It is available only when **Display** is set to **Custom text**.

You can use the following shortcodes:

- **`{target}`**: current target value
- **`{cur_name}`**: current data point label
- **`{cat_name}`**: current category value
- **`{prev}`**: previous data point value
- **`{prev_name}`**: previous data point axis label

See also: [Trendline > Display Data Point](../trendline/index.md#display-data-point)

## Color

**Default value:** {% include color value="#A6A6A6" %}

This option sets the category label color.

The final color can be overridden by [OKVIZ Color Rules](../../../features/color-rules.md).

## Margin Top

**Default value:** 5

This option adds top spacing above the category label.

## Font

**Default value:** Size 12, default text font, regular style

This composite control defines the font family, size, bold, italic, and underline settings of the category label.

When **Auto Font Size** is enabled, the font size field inside this control is ignored.

## Auto Font Size

**Default value:** On

This option automatically adjusts the category label size to fit the available space inside the card.

When enabled, the font size in **Font** is ignored and the visual uses **Min Font Size** and **Max Font Size** as limits.

## Min Font Size

**Default value:** 8

This option defines the minimum font size used when **Auto Font Size** is enabled.

## Max Font Size

**Default value:** 30

This option defines the maximum font size used when **Auto Font Size** is enabled.

## Word Wrap

**Default value:** Off

When enabled, this option allows the category label to wrap onto multiple lines.

It is available only when **Auto Font Size** is disabled.
