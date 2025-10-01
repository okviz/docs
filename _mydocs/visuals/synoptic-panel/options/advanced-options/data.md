---
layout:             page
title:              Data
published:          true
date:               2024-09-14
modified:           2024-09-29
order:              /synoptic-panel/options/advanced-options/data
---

This section allows you to set the data options for Synoptic Panel.

## Number Formatting

**Default value:** 123,456.789

This option allows you to manage how numbers have to be formatted for what concerns thousands separators and decimal separators.

Supported values are:

|Country|Sample|
|-|-|
|English countries, China, Japan, etc.|123,456.789|
|Italy, Germany, Portugal, etc.|123.456,789|
|France, Sweden, etc.|123 456,789|
|Bangladesh, India, etc.|1,23,456.789|

## Summarization

**Default value:** (Not Allowed)

Choose how to summarize numeric data values. Non-numeric values are not affected by this option and will never be summarized.

This setting is only required when your model is structured in way that produces non-unique values. 

Available options:

- **(Not Allowed)**: Do not allow any summarization. If your model produces non-unique values, an error will be shown.
- **Sum**: Sum of the values.
- **Minimum**: Minimum value.
- **Maximum**: Maximum value.

> **NOTE:** This aggregation is made by the visual and does not affect the underlying data model. If you select a different summarization in the field well, unreliable results may occur. Also note that the result may be different from the dataset data because of the rounding applied before the aggregation.
