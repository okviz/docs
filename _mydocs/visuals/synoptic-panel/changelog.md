---
layout:             page
title:              Changelog
published:          true
date:               2024-05-10
modified:           2025-12-11
order:              /synoptic-panel/{99}
toc_h_max:          2
---
This page contains a quick summary of versions and notable changes of Synoptic Panel.  
Synoptic Panel uses **Power BI Custom Visuals API v5.11.0**.

> **NOTE:** Synoptic Panel Lite is a subset of Synoptic Panel with limited features. Both versions share the same codebase and changelog.

## v2.4.5

**Released:** 2025-11-12

**New Features:**

- Add [Dynamic Links](./fields/dynamic-links.md) feature to create with a measure clickable areas in SVG maps that navigate to specified URLs

**Improvements:**

- Add [Map Animations](./options/appearance/map-animations.md) option to enable/disable SVG animations
- Add [Stop On Hover](./options/appearance/map-animations.md#stop-on-hover) option to pause animations on hover
- Add [Color (Link)](./options/areas/color-link.md) options to customize the appearance of link areas

**Bug Fixes:**

- Fix a bug that caused rendering issues with maps dropdown in Teams for macOS
- Fix remote maps loading in demo reports

## v2.4.4

**Released:** 2025-10-10

**Improvements:**

- Add [Transparency](./options/areas/color-matched.md#transparency) option for all area types

## v2.4.3

**Released:** 2025-10-10

**Improvements:**

- Enhance labels rotation handling

## v2.4.2

**Released:** 2025-10-09

**Bug Fixes:**

- Fix aggregation handling with Map URLs field for My Storage maps

**Improvements:**

- Enhance [Category Level Maps](./options/drill-behavior/category-level-maps.md) option

## v2.4.1

**Released:** 2025-10-02

**Improvements:**

- Support SharePoint 2016 and HTTP contexts

## v2.4.0

**Released:** 2025-10-01

**Bug Fixes:**

- Fix auto-zoom not working in some cases
- Fix a bug that caused to show the search button in embedded environments (where search is not supported)

**Improvements:**

- Improve aggregation handling with Map URLs field and restore the ability to choose how to summarize values

## v2.3.9

**Released:** 2025-09-02

**New Features:**

- Add [Color Rules](./fields/color-rules.md) field well
- Add [Ignore Hierarchical Binding](./options/drill-behavior/ignore-hierarchical-binding.md) option for drill behavior.

**Improvements:**

- Support condition formatting for text columns in the Color Rules dialog

**Bug Fixes:**

- Fix tooltips displaying the wrong value in some cases
- Fix wrong outline rendering when conditional formatting is applied
- Fix wrong area matching in some cases
- Fix wrong legend colors rendering in some cases

**Removed:**

- Remove "Aggregate on Expand" option

## v2.3.8

**Released:** 2025-04-24

**New Features:**

- Allow to save Search Index 
- Add [Save Index](./options/advanced-options/map-search.md#save-index) option
- Allow to change the action on map selection in the Map Search dialog
- Add [On Map Selection](./options/advanced-options/map-search.md#on-map-selection) option
- Add "Filter By" options to the Map Search dialog
- Add [Show Map Search](./options/toolbars/options.md#show-maps-search) option to the toolbar settings

**Improvements:**

- Improve Search Map feature
- Add "Refresh" button when a remote map cannot be rendered in the visual

**Bug Fixes:**

- Fix a bug that prevented saving edited maps to My Storage in some cases
- Fix a bug that prevented removing the Map Selector from a map in the Map Editor in some cases
- Fix a bug that caused wrong error messages when remote maps were not available
- Fix a but that caused wrong maps to be displayed in the visual when using Map Selector

## v2.3.7

**Released:** 2025-04-11

**Bug Fixes:**

- Fix a bug that duplicates maps in the My Storage listing

## v2.3.6

**Released:** 2025-04-11

**New Features:**

- Add [Outline customization settings](./options/areas/color-matched.md#outline) per area type 
- Add [Search Map](./features/map-search.md) feature
- Add [Cache Setting for Remote Maps](./options/advanced-options/cache.md#remote-maps)

**Removed:**

- Remove *Apply Color To* from area's color settings
- Remove global *Outline* settings

## v2.3.5

**Released:** 2025-03-26

**Bug Fixes:**

- Fix a problem with legend editor [#43](https://github.com/okviz/synoptic-panel-issues/issues/43)

## v2.3.4

**Released:** 2025-03-24

**Bug Fixes:**

- Fix a problem with some special characters blocking visual rendering [#42](https://github.com/okviz/synoptic-panel-issues/issues/42)

## v2.3.3

**Released:** 2025-03-21

**New Features:**

- Add the ability to export My Storage map URLs and [use them with Map URLs](./features/importing/maps-from-my-storage.md) field well
- Add the [outline color option](./options/areas/outline.md) for map areas

**Bug Fixes:**

- Fix a problem with the custom legend when the items name contains spaces [#41](https://github.com/okviz/synoptic-panel-issues/issues/41)

## v2.3.2

**Released:** 2025-03-17

**Improvements:**

- Allow to scale the UI elements to match the report zoom level through the [Scale UI Elements](./options/accessibility/index.md#scale-ui-elements) option

## v2.3.1

**Released:** 2025-02-27

**Improvements:**

- Minor changes

## v2.3.0

**Released:** 2025-02-26

**Improvements:**

- Add [Apply To](./options/areas/color-matched.md) options for area colors
- Add [Allow Empty Matched Area Selection](./options/advanced-options/misc.md#allow-empty-matched-area-selection) option 
- Improve Auto-Fetch feature
- Add [inline console](./options/about/index.md#inline-console) for diagnostics

## v2.2.9

**Released:** 2025-02-21

**Bug Fixes:**

- Minor fixes on license messages

## v2.2.8

**Released:** 2025-02-20

**Bug Fixes:**

- Fix features check with free and trial licenses

## v2.2.7

**Released:** 2025-02-13

**Improvements:**

- Improve license dialog
- Add support for feature flags

**Bug Fixes:**

- Fix category labels with custom text
- Fix auto-match with SVG elements with special characters

## v2.2.6

**Released:** 2025-01-22

**Improvements:**

- Bump version
- Minor changes

## v2.2.5

**Released:** 2025-01-16

**Bug Fixes:**

- Fix SVG embedded images optimization for large images
- Improve license check for My Storage
- Better null handling for custom labels

## v2.2.4

**Released:** 2025-01-08

**Bug Fixes:**

- Fix flashing maps with Map URLs field

## v2.2.3

**Released:** 2025-01-07

**Bug Fixes:**

- Fix uploading new maps to My Storage

**Improvements:**

- Minor changes
- Allow color filling for SVG unclosed paths

## v2.2.2

**Released:** 2024-12-30

**Improvements:**

- Improve label designer
- Minor changes

## v2.2.1

**Released:** 2024-12-26

**New Features:**

- Automatically optimize images embedded in SVGs
- Add [placeholder customizations](./options/appearance/map-placeholder.md)
- Allow to include/exclude specific SVG elements from matching
- Allow to replace files in My Storage

**Bug Fixes:**

- Fix maps sorting with Map URLs field
- Fix frozen labels 
- Fix hidden labels not being hidden in some cases
- Apply "Unselected" accessibility options also to highlighted elements

**Improvements:**

- Improve SVG editor
- Improve memory usage
- Rename `Limits` to `Performance` in [settings](./options/advanced-options/performance.md)
- Add limits of 100 items in the maps dropdown

## v2.2.0

**Released:** 2024-12-09

**New Features:**

- Add integration with My Storage
- Add Legend Manager

## v2.1.3 - Beta

**Released:** 2024-12-01

**New Features:**

- Add `Legend` field

**Improvements:**

- Improve legend position

## v2.1.2 - Beta

**Released:** 2024-11-29

**New Features:**

- Add Label Designer

**Improvements:**

- Several improvements in labels including custom text syntax, word wrap, and more

## v2.1.1 - Beta

**Released:** 2024-10-08

**New Features:**

- Allow labels to be dragged

### Removed

- Remove label placeholder feature

## v2.1.0 - Beta

**Released:** 2024-08-30

**New Features:**

- Add Maps Manager
- Add Map URLs field well
- Add legend
- Add drill behavior

**Improvements:**

- Improve Map Editor
- Several improvements in several areas

## v2.0.0 - Beta

**Released:** 2024-05-30

Initial private beta release of the new version of Synoptic Panel.

## Previous Versions

Legacy versions logs are not available.
