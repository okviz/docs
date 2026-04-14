---
layout:             page
title:              Tooltips
published:          true
date:               2026-04-13
modified:           2026-04-14
order:              /card-with-states/options/tooltips
internal:           tooltips
next_reading:       true
next_reading_title: Options
related:
    - /card-with-states/fields/tooltips.md
---

This section contains the options of the **Tooltips** formatting card.

The overall tooltip visibility and report tooltip behavior are controlled in the Power BI **General** pane.

Measures bound to the [Tooltips](../../fields/tooltips.md) field well are formatted by these options.

## Show on Cards

**Default value:** Off

This option shows tooltips when hovering over each card and multiple cards are displayed.

If **Show on Trendline** is enabled, this option is ignored.

## Show on Trendline

**Default value:** On

This option shows tooltips when hovering over the trendline.

When enabled, it takes precedence over **Show on Cards**.

If [Data Label > Display](../data-label/index.md#display) is set to **Dynamic**, this option is automatically disabled.

## Display Unit

**Default value:** None

This option controls how numeric values are scaled in the tooltip.

## Decimal Places

**Default value:** 0

This option defines the number of decimal places shown in the tooltip. The value ranges from 0 to 4.
