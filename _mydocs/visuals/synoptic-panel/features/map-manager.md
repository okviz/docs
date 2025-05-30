---
layout:             page
title:              Map Manager
published:          true
date:               2024-05-11
modified:           2025-04-22
order:              /synoptic-panel/features/map-manager
next_reading:       true
---

The Maps Manager provides an overview of **all the maps connected to the visual** and their associated [Drill Paths](./drill-mode.md#the-drill-path) It is a powerful tool to manage maps efficiently and offers functionality for organizing, previewing, and editing connections between maps and drill paths.

<video src="images/map-manager.mp4" autoplay loop muted></video>

The Maps Manager interface is visually similar to the [Map Editor](./map-editor/layout.md) and is divided into two main panes.

## Drill Paths Tree

The left pane displays a hierarchical view of all drill paths to which maps are connected. Each drill path is represented as a node in the tree, and each node can contain one or more maps.

> [Child Maps](../features/drill-mode.md#child-maps), that are children of specific areas in a parent map, are not displayed in the Maps Manager.

- The tree structure is expandable, and each drill path and map is associated with a checkbox.
- Checkboxes allow users to delete multiple maps.
- All maps can be previewed by clicking on the map element in the tree.
- Both, drill paths and maps, has a context menu that allows you to perform actions for the selected item, such as deleting, renaming, or move to another drill path.
- You can search for specific drill paths or maps  by using the search bar at the top of the tree.

## Map Preview

The right pane provides useful information and a visual preview of the currently selected map.
The map is displayed in the center of the pane while in the corners you can find some useful information and tools.

<img src="images/map-manager-map-preview.png" width="600">

Here are displayed the following key details (in order from top to bottom):
1. **Map Title**: the name of the map currently in preview.
2. **Map Source**: the source of the selected map, which varies depending on the type of map:
	- For local maps, the source displays the file name that originated the map (e.g. my-file.svg).
	- For remote maps, the source shows the URL where the map is hosted.
	- For My Storage maps, the source displays the map's unique ID in the storage system.
3. **Map Author**: the author of the map.
4. **Last Modified Date**: the date and time the map was last updated.
5. **File Size**: the size of the map file (only for local maps).
