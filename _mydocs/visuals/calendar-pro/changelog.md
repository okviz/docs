---
layout:             page
title:              Changelog
published:          true
date:               2022-07-17
modified:           2026-01-28
order:              /calendar-pro/{99}
toc_h_max:            2
---
This page contains a quick summary of versions and notable changes of Calendar Pro.  
Calendar Pro uses **Power BI Custom Visuals API v5.11.0**.

## v1.1.5

**Released:** 2026-01-28

**New Features:**

Add [Auto Select Today](options/calendar/auto-select-today.md) option

## v1.1.4

**Released:** 2025-12-29

**Improvements:**

- Minor changes.

## v1.1.3

**Released:** 2025-09-05

**Improvements:**

Add events value for Color Rules definition.

## v1.1.2

**Released:** 2025-03-19

Remove unused libraries to reduce the visual size (no actual changes).

## v1.1.1

**Released:** 2025-03-04

Bump version release (no actual changes).

## v1.1.0

**Released:** 2025-02-27

**Improvements:**

- Add new [Event Colors](./fields/event-colors.md) field well
- Add [inline console](./options/about/index.md#inline-console) for diagnostics

## v1.0.10

**Released:** 2025-02-20

**Bug Fixes:**

- Fix features check with free and trial licenses

## v1.0.9

**Released:** 2025-02-13

**Improvements:**

- Improve license dialog
- Add support for feature flags

**Bug Fixes:**

- Fix a problem with event labels when the event name contains "."

## v1.0.8

**Released:** 2025-01-05

**Bug Fixes:**

- Fix wrong initial interval in certain cases.

## v1.0.7

**Released:** 2024-11-27

**Bug Fixes:**

- Fix holidays time zone issue.

## v1.0.6

**Released:** 2024-11-02

**New Features:**

- Add [Time Zone option](options/calendar/timezone.md) to deal with Power BI automation that run at UTC time zone.
- New license management system - ready to support OKVIZ licensing.

**Bug Fixes:**

- Fix holidays time zone issue.
- Fixed "Today/Current *PERIOD*" not showing in the "Jump" menu in some cases.

## v1.0.5.5

**Released:** 2024-06-02

**Bug Fixes:**

- Quarters year in labels
- Fix data color when no color rule is applied ([#14](https://github.com/okviz/calendar-pro-issues/issues/14))
- Fix events labels formatting ([#17](https://github.com/okviz/calendar-pro-issues/issues/17))
- Fix year axis alignment ([#18](https://github.com/okviz/calendar-pro-issues/issues/18))

## v1.0.5.4

**Released:** 2024-03-02

**Bug Fixes:**

- Custom culture code for number formatting

## v1.0.5.3

**Released:** 2024-01-15

**New Features:**

- Option to hide today cell color

**Bug Fixes:**

- Color rule problems with field conditions

## v1.0.5.2

**Released:** 2023-12-30

**Bug Fixes:**

- Weird layout on Power BI mobile app. - [Issue #12](https://github.com/okviz/calendar-pro-issues/issues/12)

## v1.0.5.1

**Released:** 2023-12-11

**Bug Fixes:**

- License validation when a previous license was not valid.

**Improvements:**

- Support API 5.4.0

## v1.0.4

**Released:** 2023-03-22

**Improvements:**

- Support API 5.1.0

**New Features:**

- [Default to Today](options/calendar/include-today.md) option.

**Bug Fixes:**

- Missing last week when a single calendar is displayed on the screen and the number of weeks in the first month of the interval is less than 5 weeks.

## v1.0.3

**Released:** 2022-09-15

**New Features:**

- A wizard dialog when the visual contains no data.
- [Extend Today Color](options/cells/extend-today-color.md) option.
- Support API 4.7.0
- License info in About
- Support for preview versions
- US and CA states holidays

**Improvements:**

- Improve ***Change Layout*** menu.
- Improve current period in ***Jump*** menu.

**Bug Fixes:**

- Holidays position when no events visible.
- User font sizes ignoring.
- Layout overlapping with small sizes.
- Next/prev page controls disappearing in some circumstances.
- Lint errors.

## v1.0.0

**Released:** 2022-07-03

Initial public release.