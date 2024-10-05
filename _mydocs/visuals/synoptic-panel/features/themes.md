---
layout:             page
title:              Report Themes
published:          true
date:               2024-05-10
modified:           2024-09-12
order:              /synoptic-panel/features/themes
---
Power BI Report Themes is a feature that allows you to apply multiple settings to a report at the same time and share them via a single JSON file. Check out this page for more information: [Report Themes with Custom Visuals](../../features/themes.md)

Assuming you are setting up a custom JSON theme file ([as described here](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-report-themes#report-theme-json-file-format)), the customizable properties of Synoptic Panel are:

| Property | Theme Color |
| -------- | ----------- |
| [Category Labels Color](../options/category-labels/matched.md#color)| foreground |
| [Data Labels Color](../options/data-labels/color.md#color)        | foreground |
| [Data Colors - Matched color](../options/areas/matched.md#color)       | dataColors (first color) |
| [Data Colors - Unmatched color](../options/areas/unmatched.md#color)     | dataColors (second color) |
| [Data Colors - Unbound color](../options/areas/unbound.md#color)       | dataColors (third color) |
| [Legend Color](../options/legend/text.md#color)                  | foreground |