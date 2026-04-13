---
layout:             page
title:              Color
date:               2022-07-26
modified:           2026-04-13
order:              /calendar-pro/options/events/color
internal:           fill, dataFill, defaultFill
related:
    - aggregate.md
---
**Default value:** {% include color value="#FD625E" %} (Chart Mode) / random for each field (Calendar Mode)

This page covers the color options used for events.

## Color

In **Chart Mode**, this option sets the color used for events.

In **Calendar Mode**, when the **Event Colors** field well is not used, this option is used together with **Single color**:

- if **Single color** is on, all events use the same color
- if **Single color** is off, Calendar Pro assigns a different color to each event source field

## Default Color

When the **Event Colors** field well is used, Calendar Pro reads the event color from the bound data. The **Default Color** option is used as a fallback for events that do not provide a valid color value.

> When **Event Colors** is bound, adjacent events are not joined automatically because different occurrences can have different colors.

> This option is not controllable through a [Report Theme](../../features/themes.md).

<todo>Screenshot</todo>
