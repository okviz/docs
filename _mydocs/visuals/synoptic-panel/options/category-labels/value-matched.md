---
layout:             page
title:              Value
published:          true
date:               2024-09-14
modified:           2025-09-03
order:              /synoptic-panel/options/category-labels/value
---

This section provides options for configuring the category labels value for matched areas. 

> Note that matched areas are the areas that are associated with a data point in the dataset. See [Data Binding](../../concepts/data-binding.md) for more information.

## Display Value

**Default value:** (Auto)

Defines what value to display for the matched elements. By selecting '(Custom)', it is possible to enter a custom value that can be subject to Power BI conditional formatting.

Available options:

- **(Auto)**: The visual will display the best value based on the data.

- **(Custom)**: The visual will display the custom value entered in the 'Custom Value' field.

- **Category Value**: The visual will display the category value.

- **Category Value (Path)**: In case you have expanded the hierarchy level through the specific drill control and have disabled the [Ignore Hierarchical Binding](../drill-behavior/ignore-hierarchical-binding.md) option, the visual will display the full hierarchy path of the category, otherwise the category value (as above).  
See [Automatic Binding when Hierarchy is Expanded](../../concepts/data-binding.md#automatic-binding-when-hierarchy-is-expanded) for more information.

- **Title**: The visual will display the title of the matched element as defined in the SVG file.

- **Element Id**: The visual will display the element id of the matched element as defined in the SVG file.

## Custom Value

**Default value:** (Empty)

The custom value to display for the matched elements. This field is only available when the 'Display Value' option is set to '(Custom)'. 

You can use different placeholders to include specific fields from the data model or map: 

- `{category}` - the category value
- `{value}` - the data point value
- `{title}` - the title of the matched map area
- `{id}` - the element id of the matched map area
- `{path}` - the full hierarchy path of the category when the hierarchy is expanded, otherwise the category value

E.g.: `{category}\n({value})` will be rendered as:
```
Computers 
($123,456)
```

## Append Data Value

**Default value:** Off

When enabled, data point value is appended to the category label.

## Display Unit

**Default value:** Auto

The unit of the value to display. This option is only visible when the 'Include Data Label' option is On. 

## Decimal Places

**Default value:** 0

The number of decimal places to display. This option is only visible when the 'Include Data Label' option is On. 

## Summarization

**Default value:** (Auto Detect)

The summarization method for the data point values. It must be exactly the same as the one used by the value column. This setting is required when you connect a column to 'Legend' or 'Map URLs' field wells, since the aggregation is made by the visual and not from Power BI. 

This option is only visible when the 'Include Data Label' option is On.

> If you select `(Auto Detect)` the visual will try to detect the summarization method automatically. This doesn't work for all cases, so it is recommended to verify the summarization method and set it manually if necessary.
