---
layout:             page
title:              Report Themes
published:          true
date:               2024-05-10
modified:           2025-02-05
order:              /synoptic-panel/features/themes
---
Power BI Report Themes is a feature that allows you to apply multiple settings to a report at the same time and share them via a single JSON file. Check out this page for more information: [Report Themes with Custom Visuals](../../features/themes.md)

Assuming you are setting up a custom JSON theme file ([as described here](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-report-themes#report-theme-json-file-format)), the customizable properties of Synoptic Panel are:

| Property | Theme Color | 
| -------- | ----------- |
| [Category Labels Color](../options/category-labels/color-matched.md)  | foreground |
| [Data Labels Color](../options/data-labels/color.md)                  | foreground |
| [Data Colors - Matched color](../options/areas/color-matched.md)      | dataColors (first color) |
| [Data Colors - Unmatched color](../options/areas/color-unmatched.md)  | dataColors (second color) |
| [Data Colors - Unbound color](../options/areas/color-unbound.md)      | dataColors (third color) |
| [Legend Color](../options/legend/items.md#color)                      | foreground |