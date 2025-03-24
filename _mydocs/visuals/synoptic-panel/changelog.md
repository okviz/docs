---
layout:             page
title:              Changelog
published:          true
date:               2024-05-10
modified:           2025-03-24
order:              /synoptic-panel/{99}
toc_h_max:          2
---
This page contains a quick summary of versions and notable changes of Synoptic Panel.  
Synoptic Panel uses **Power BI Custom Visuals API v5.11.0**.

> **NOTE:** Synoptic Panel Lite is a subset of Synoptic Panel with limited features. Both versions share the same codebase and changelog.

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
