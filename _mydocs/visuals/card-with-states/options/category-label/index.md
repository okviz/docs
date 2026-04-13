---
layout:             page
title:              Category Label
published:          true
date:               2026-04-07
modified:           2026-04-10
order:              /card-with-states/options/category-label
internal:           categoryLabel
next_reading:       true
next_reading_title: Options
---

**Default value:** On

This section contains the options that control the secondary label of the card.

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
- **`{cur_name}`**: current trendline axis label
- **`{cat_name}`**: current category value
- **`{prev}`**: previous data point value
- **`{prev_name}`**: previous data point axis label

See also: [Value](../data-label/index.md#value)

## Color

**Default value:** {% include color value="#A6A6A6" %}

This option sets the category label color.

The final color can be overridden by [OKVIZ Color Rules](../../../features/color-rules.md).

## Text Size

**Default value:** 12

This option defines the size of the category label text. The value ranges from 5 to 100.

## Font Family

**Default value:** `'Segoe UI', wf_segoe-ui_normal, helvetica, arial, sans-serif`

This option sets the font family of the category label.

## Word Wrap

**Default value:** Off

When enabled, this option allows the category label to wrap onto multiple lines.
