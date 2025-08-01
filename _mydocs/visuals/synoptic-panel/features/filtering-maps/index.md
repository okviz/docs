---
layout:             page
title:              Filtering Maps
published:          true
date:               2025-08-01
modified:           2025-08-01
order:              /synoptic-panel/features/filtering-maps
next_reading:       true
---

Synoptic Panel allows you to change maps using a report filter or a custom selection. This feature is useful when you want to control the rendered map from a slicer or any other visual in your report.

Synoptic Panel provides different ways to obtain this behavior:

- [Map URLs Column](#map-urls-column): Bound a column containing map URLs to display.
- [Single Data Point Maps](#single-data-point-maps): Assign a map to each data point in the data.
- [Map Selector](./map-selector.md): Set a special DAX measure to select the map to display.

It worth mentioning that you can also use the drill mode to programmatically change maps, also if in a different way. When you enable the drill mode, you can assign different maps to each level in the hierarchy. See more in the [Drill Mode](../drill-mode.md) section.

## Map URLs Column

Another way to change maps based on a filter is using the **Map URLs** field well, which allows you to connect one column to add multiple remote URLs maps to the visual. When the column is bound, the visual will display the map associated with the URL in the column according to the current filter.

<video src="images/map-url-filtering.mp4" autoplay loop muted ></video>

>> **IMPORTANT**: The URLs must be publicly accessible, as the visual will load the maps directly from the web using the client browser. See the [Hosting Requirements](../importing/hosting-requirements.md) section for more information.

Unfortunately, since the Map URLs feature causes a data aggregation on the client side, some limitations apply:

- Drill mode is disabled
- Conditional formatting is disabled. Instead, you can use the OKVIZ color rules, but these are limited compared to the built-in Power BI conditional formatting. For more information, see the [Dynamic Areas Colors](../dynamic-colors.md) section.
- Auto-Fetch is disabled
- Map Selector is disabled

> **EXAMPLES**:
- [Load Maps from GitHub](./../importing/maps-from-github.md)
- [Use Map URLs from My Storage](./../importing/maps-from-my-storage.md)

## Single Data Point Maps

Synoptic Panel allows you to assign a map to each data point in the dataset. Since this behavior is strictly connected to the [Drill Mode](../drill-mode.md), the options to control it are placed in the **Drill Behavior** section of the visual.

There are two options that you need to consider:

- [Category Level Maps](../drill-mode.md#category-level-maps-option): this option must be *disabled*, otherwise you will be able to assign a map only to each category, not to each data point (which are the values of the category).

- [Last Level Maps](../drill-mode.md#last-level-maps-option): this option must be *enabled*, otherwise you won't be able to assign a map to the last level of the hierarchy, or the first one if the hierarchy has only one level (the initial state).

When these options are set correctly, you can assign a map to each data point in the dataset, but **note that is only visible if there is a single data point in the visual**. If there are multiple data points, the visual will follow the default behavior and display the map assigned to the category.

## Map Selector

The Map Selector is a feature that allows you to dynamically change the map displayed in Synoptic Panel based on a DAX measure. Read more in the [Map Selector](./map-selector.md) section.
