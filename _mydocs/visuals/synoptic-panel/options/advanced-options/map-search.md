---
layout:             page
title:              Map Search
published:          true
date:               2025-04-24
modified:           2026-04-13
order:              /synoptic-panel/options/advanced-options/map-search
---

These options control the behavior of the [Map Search](../../features/map-search.md) feature. 

## Save Index

**Default value:** Off

When enabled, the search index is saved in the visual settings and becomes available to all report users. This avoids rebuilding the index every time the visual is opened.

> Note that if the index is too large, the visual will not be able to save it. In this case, the visual will automatically disable this option and rebuild the index when the search dialog is opened for the first time in the session.

## On Map Selection

**Default value:** Change Map and Select All

Defines the action to be performed when a map is selected in the search results. The options are:
- **Change Map**: The selected map will be displayed in the visual.
- **Change Map and Select All**: The selected map will be displayed in the visual and all matched areas that contain the search term will be selected.
- **Change Map and Select First**: The selected map will be displayed in the visual and the first matched area that contains the search term will be selected.
