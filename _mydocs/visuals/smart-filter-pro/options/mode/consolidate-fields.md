---
layout:             page
title:              Consolidate Fields
published:          true
date:               2021-12-16
modified:           2022-07-20
order:              /smart-filter-pro/options/mode/consolidate-fields
internal:           consolidateFields
version:            2.0.1
available:          Filter mode
---
**Default value:** Off

The usual approach to work with Smart Filter Pro on multiple fields is to enter values into several input boxes, one for each connected field. Indeed, when you connect a field to the visual, a separate input box is created for that.

Thanks to the ***Consolidate fields*** feature, available in Filter mode only, you can use a single input box to filter multiple fields, which saves valuable space on your report.

<img src="images/consolidate-fields.png" width="500">

To apply a filter to a specific field, when this option is enabled, enter the field name and a colon in front of the value to search.  
For example: to search ***Contoso*** in the field ***Brand*** just write `brand:contoso` and hit Enter (field names and value are case insensitive - for more information on the supported syntax see [How to Search in Filter Mode](../../features/filter.md#how-to-search)).

> You cannot filter on every field of your dataset without doing anything, **you must first connect every field** you are interested in to the visual.

> You cannot set the logical operator to ***OR*** when you filter different fields in the same input, otherwise Power BI will throw an error. More information: [Common Issues](../../../issues/common-issues.md#we-cant-display-this-visual-because-a-measure-is-used-in-cross-highlighting-please-remove-the-measure-or-cross-highlight)