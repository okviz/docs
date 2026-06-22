---
layout:             page
title:              Labels
published:          true
date:               2026-06-22
modified:           2026-06-22
order:              /synoptic-panel/fields/labels
---

The ***Labels*** field well allows you to bind one measure that provides the text displayed by category labels for matched map areas.

Use this field when the label text should be different from the category value, the map area title, or the element id. For example, you can use a DAX measure to display a shorter name, a translated name, or a custom label that depends on the current filter context.

When a measure is bound to ***Labels***:

- Category labels use the measure result as their text for matched areas.
- The ***Display Value*** and ***Custom Value*** options in [Category Labels - Value](../options/category-labels/value-matched.md) are hidden, because the label text comes from the measure.
- The ***Append Data Value*** option remains available if you want to append the value from the ***Value*** field well to the label text.
- Data labels remain controlled by the [***Data Labels***](../options/data-labels/index.md) settings when they are visible.

> The ***Labels*** field affects category label text only. It does not replace the ***Value*** field well, which is still used for numeric values, data labels, conditional formatting, and other value-based behavior.
