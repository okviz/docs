---
layout:             page
title:              Child Maps
published:          true
date:               2025-01-21
modified:           2025-02-22
order:              /synoptic-panel/concepts/maps/child-maps
---

<todo>Check if the following content is correct and complete. Add a screenshot if necessary.</todo>

**Child Maps** are maps linked to specific areas within a parent map. This feature enables dynamic and hierarchical navigation within the visual, allowing maps to appear based on the area of the parent map being drilled into.

## Linking Child Maps to Parent Areas

Each area of a parent map can have a [custom attribute](../../concepts/maps/svg-format.md#custom-attributes) that specifies the URL of a linked child map. Child maps can be linked using the following methods:

- **Manually:** by setting the custom attribute `data-okviz-drill-url` directly in the SVG map file.
- **Using the Map Editor:** by selecting in the [Area](../../features/map-editor/edit-map.md#area) section the **Drill To** tab, providing an URL for the child map.
- **Using AutoFetch:** automatically fetches and links child maps based on specific settings. (Refer to the [AutoFetch](../../features/drill-mode.md#auto-fetch-mode) for more details.)

## Relationship Between Drill Paths and Child Maps

Child maps allow for flexible and dynamic hierarchies. The displayed map depends on user interaction with the parent map, enabling responsive navigation.

Child maps are also associated with a [Drill Path](../../features/drill-mode.md#the-drill-path) to organize and manage them. However, their visibility is controlled by their link to a parent map area rather than by their drill path association.

If a user drills down into an area with a linked child map, that map will be displayed, regardless of the last drill path level.

## Managing Child Maps

1.	**Visibility in the [Map Editor](../../features/map-editor/index.md)**

    - While child maps are not displayed in the Maps Manager, they are visible when accessing the Map Editor in a drill path level where the child map is linked.
    - Child maps cannot be deleted individually. To remove a child map, you must delete its parent map or manually remove the attribute linking it to the parent map, either using the Map Editor or by editing the SVG code.

2.	**Deleting Parent Maps**

    - When a parent map with linked child maps is deleted, all links to its child maps are also removed.
    - Even though child maps are not directly tied to a specific drill path, they will no longer appear in the visual or the editor once their parent map is deleted.