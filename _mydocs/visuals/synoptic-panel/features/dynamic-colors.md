---
layout:             page
title:              Dynamic Areas Colors
menu_title:         Dynamic Colors
published:          true
date:               2024-05-10
modified:           2025-02-05
order:              /synoptic-panel/features/dynamic-colors
---
Synoptic Panel allows you to change the color of areas dynamically based on the data. This feature is useful when you want to highlight specific areas based on the data values.

This can be done in two ways:

- **Conditional Formatting**: Use the Power BI conditional formatting to change the color of areas based on the data values.

    <video src="images/conditional-formatting.mp4" width="600" autoplay loop muted></video>

    See more: [Power BI Conditional Formatting](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-conditional-table-formatting)

- **Color Rules**: Use the advanced color rules available in several OKVIZ visuals to change the color of areas based on the data values.

    <video src="images/color-rules.mp4" width="600" autoplay loop muted></video>

    >> This feature is available only when Power BI conditional formatting cannot be used—for example, when the visual must perform client-side data aggregation, such as when either [Map URLs](./filtering-maps/index.md#map-urls-column) or [Legend Field](../fields/legend.md) wells are used.
    
    Learn more: [OKVIZ Color Rules](../../../visuals/features/color-rules.md)

