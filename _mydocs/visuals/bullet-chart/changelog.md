---
layout:             page
title:              Changelog
published:          true
date:               2022-07-15
modified:           2025-03-21
order:              /bullet-chart/{99}
toc_h_max:            2
---
This page contains a quick summary of versions and notable changes of Bullet Chart.  
Bullet Chart uses **Power BI Custom Visuals API v5.11.0**.

## v2.3.9

**Released:** 2025-09-05

**Added:**
- Added [Add To Legend](./options/states/add-to-legend.md) option to include states in the legend

**Improvements:**

- States can now be included in the legend with custom labels
- Added [Adjust Axis Scale](./options/states/adjust-axis-scale.md) option to automatically adjust the axis scale to include all states
- Support condition formatting for text columns with Color Rules

**Bug Fixes:**

- Fix wrong state rendering when [Extend Last State](./options/advanced-options/extend-last-state.md) is enabled
- Fix wrong overlapping state rendering in some cases

## v2.3.8

**Released:** 2025-02-27

**Improvements:**

- Add [inline console](./options/about/index.md#inline-console) for diagnostics

## v2.3.7

**Released:** 2025-02-20

**Bug Fixes:**

- Fix features check with free and trial licenses

## v2.3.6

**Released:** 2025-02-13

**Improvements:**

- Improve license dialog
- Add support for feature flags

## v2.3.5

**Released:** 2025-01-24

**Bug Fixes:**

- Fix a bug on how premium color properties are checked ([#53](https://github.com/okviz/bullet-chart-issues/issues/53))

## v2.3.4

**Released:** 2025-01-22

**Improvements:**

- Support API v5.11.0
- Support new OKVIZ licensing system

## v2.3.2.7

**Released:** 2024-03-02

**Bug Fixes:**

- Custom culture code for number formatting

## v2.3.2.6

**Released:** 2024-01-15

**Bug Fixes:**

- Color rule problems with field conditions

## v2.3.2.5

**Released:** 2023-12-11

**Improvements:**

- Support API 5.4.0

**New Features:**

- Accessibility features - [Issue #42](https://github.com/okviz/bullet-chart-issues/issues/42)

**Bug Fixes:**

- License validation when a previous license was not valid.

## v2.3.2.1

**Released:** 2022-11-17

**New Features:**

- [Bullet Spacing](options/general/bullet-spacing.md)
- Labels for targets
- Labels section
- Labels overlap option
- Labels priority option
- Use marker color option for labels

**Improvements:**

- Label overflow option is now in Labels section
- Color rules can be applied to single measure

**Bug Fixes:**

- Legend font family is ignored - [Issue #19](https://github.com/okviz/bullet-chart-issues/issues/19)
- Show change over value not appearing correctly - [Issue #19](https://github.com/okviz/bullet-chart-issues/issues/19)
- Tooltip not appearing on dashboard - [Issue #25](https://github.com/okviz/bullet-chart-issues/issues/25)
- Labels display with category axis off - [Issue #30](https://github.com/okviz/bullet-chart-issues/issues/30)
- Data labels display with category in vertical orientation - [Issue #31](https://github.com/okviz/bullet-chart-issues/issues/31)
- Tooltips precision for variance value
- Labels position with variance

## v2.3.1.1

**Released:** 2022-09-15 (preview 2022-08-21)

**New Features:**

- [Variances](options/variances/index.md)
- [Baseline](options/value-axis/baseline.md)
- [Text Rotation](options/category-axis/rotation.md)
- [Category Axis Size](options/category-axis/size.md)
- Absolute change value on data labels

**Improvements:**

- Corner radius are now percentages

**Bug Fixes:**

- Change over labels format - [Issue #13](https://github.com/okviz/bullet-chart-issues/issues/13)
- Non-shared targets on multiple measures - [Issue #16](https://github.com/okviz/bullet-chart-issues/issues/16)
- Vertical axis rotation improvements
- Data labels alignment and overlapping

## v2.3.0.0

**Released:** 2022-08-08 (preview)

**Improvements:**

- Support API 4.7.0
- Remove default tooltips labels
- Disable extending last state by default
- Disable premium features on environments unsupported by licensing system

**Bug Fixes:**

- Gridline options disappearing
- Default target markers
- (Blank) category values
- Null values behavior
- Hidden targets behavior
- Border radius option display
- Tooltips & labels format - [Issue #8](https://github.com/okviz/bullet-chart-issues/issues/8)
- Extend last state display
- % Change decimal places display
- Comparison label in legend with category
- Sorting target for % change over
- Label outside end position

**New Features:**

- Premium wizard screen
- Border opacity option to data labels and bullet shape
- License info in About
- Separator option for hierarchy labels

## v2.2.9.5

**Released:** 2022-08-10

**Bug Fixes:**

- Licensing system issue with valid licenses

## v2.2.9.4

**Released:** 2022-08-03

**Bug Fixes:**

- Bars disappearing with categories and data labels on - [Issue #6](https://github.com/okviz/bullet-chart-issues/issues/6)
- Axis display unit

## v2.2.9.2

**Released:** 2022-07-20

**Improvements:**

- Complete refactor
- Support AS licensing system

## v2.2.8

**Released:** 2020-05-23

**Bug Fixes:**

- Manage NaN values

**Improvements:**

- Increase the max data to 30K

## v2.2.7

**Released:** 2020-05-09

**Bug Fixes:**

- Bug #124 - Wrong target assignment when the same fields are assigned to different roles
- Console errors when the visual is too small
- Hide change over target label when there is a division by 0

## v2.2.6

**Released:** 2020-04-01

**Bug Fixes:**

- Wrong states when the first is 0
- Accessibility module

## v2.2.5

**Released:** 2020-03-05

**Bug Fixes:**

- Label vertical alignment on IE/Edge (legacy)
- Tooltips culture

## v2.2.4

**Released:** 2020-02-18

**Improvements:**

- Icon

## v2.2.3

**Released:** 2019-08-19

**Bug Fixes:**

- Axis height
- Legend for main value
- IE11 rendering issue

## v2.2.0

**Released:** 2019-08-19

**Bug Fixes:**

- Removed targets from tooltips when the marker is hidden
- Issue in states
- Better label positioning in vertical mode

**New Features:**

- Support for Drillthrough
- Support for Power BI Themes
- Support for Report Tooltips
- Support for CTRL multiselect
- Option to define target markers thickness
- Option to display percentage change over the closest target
- Customizable tolerance for bar coloring
- Option to stop the conditions applying after the first match
- Comparison operator for each target
- Multiple measures
- Tooltips formatting

## v2.1.6

**Released:** 2018-03-23

**Bug Fixes:**

- Negative axis truncation
- Legend issue

**Removed:**

- Internal telemetry system

## v2.1.5

**Released:** 2017-12-09

**New Features:**

- Target markers can be hidden
- Multiple tooltips support
- Labels formatting options

**Bug Fixes:**

- Highlight interaction with target
- Vertical orientation issues with labels

## v2.1.4

**Released:** 2017-06-20

**Bug Fixes:**

- Security issue

## v2.1.3

**Released:** 2017-04-03

**Bug Fixes:**

- iOS rendering issue

## v2.1.2

**Released:** 2017-03-28

**New Features:**

- Legend

**Bug Fixes:**

- Missing highlight value in tooltips and other small issues
- Wrong labels when drilling down
- Wrong data labels placement
- Number formatting issue

## v2.1.1

**Released:** 2016-12-24

**Bug Fixes:**

- Blank data issue

## Previous Versions

Untracked changes.
