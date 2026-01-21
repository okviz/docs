---
layout:             page
title:              Dynamic Links
published:          true
date:               2025-11-12
modified:           2026-01-21
order:              /synoptic-panel/options/dynamic-links
---

This section contains the settings that allow you to configure Dynamic Links behavior in Synoptic Panel. This is only visible when a measure is added to the [Dynamic Links](../../fields/dynamic-links.md) field well.

> See how to use Dynamic Links in the [Dynamic Links feature section](../../features/dynamic-links.md).

## Interaction

**Default value:** Show Menu

This option allows you to choose how users can enable or disable Dynamic Links interaction in the Synoptic Panel.

Available options:

- **Show Menu:** A menu will appear when users click on an area with a Dynamic Link. This menu will provide options to either select the area or to navigate to the specified URL.
- **Toolbar Button:** A button will be added to the toolbar (if enabled in the [Controls](../toolbars/controls.md#dynamic-links-button) section) to allow users to toggle Dynamic Links interaction on and off.
- **Navigate**: Dynamic Links interaction will always be enabled, allowing users to click on areas in the SVG map to navigate to the specified URLs without needing to toggle any buttons.

## Custom Color

**Default value:** Off

If enabled, matched areas with Dynamic Links will use the color specified in the **Color** option (see below) instead of the [Color (Matched)](../areas/color-matched.md) coloring. If you choose the Interaction mode as *Navigate*, this color will be applied permanently to the areas with Dynamic Links, otherwise it will be applied only when clicking on the [Dynamic Link Button](../toolbars/controls.md#dynamic-links-button) in the toolbar.

## Color

**Default value:** fifth color of *dataColors* of [Report Theme](../../features/themes.md)

This setting is only applicable when the **Custom Color** option is enabled.
