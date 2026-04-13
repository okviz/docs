---
layout:             page
title:              Card
published:          true
date:               2026-04-07
modified:           2026-04-10
order:              /card-with-states/options/card
internal:           card
next_reading:       true
next_reading_title: Options
---

This section contains the options that control the card container, label alignment, and card appearance.

## Horizontal Alignment

**Default value:** Center

This option aligns the labels horizontally inside the card.

Available options:

- **Left**
- **Center**
- **Right**

## Vertical Alignment

**Default value:** Middle

This option aligns the labels vertically inside the card.

Available options:

- **Top**
- **Middle**
- **Bottom**

## Padding

**Default value:** 0 on all sides

This option defines the inner spacing of the labels area inside the card.

Each side can be set independently from 0 to 1000.

## Background Color

**Default value:** No fill

This option sets the background color of the card.

The final color can be overridden by [OKVIZ Color Rules](../../../features/color-rules.md).

## Border

**Default value:** Off

This option enables a border around the card.

When enabled, you can also configure **Border Color**, **Border Stroke**, and **Border Weight**.

## Border Color

**Default value:** Foreground color from the current report theme

This option sets the card border color.

It is available only when **Border** is enabled.

Read more about theme colors: [Report Themes with Custom Visuals](../../../features/themes.md)

## Border Stroke

**Default value:** Solid

This option defines the border style.

Available options:

- **Solid**
- **Dashed**
- **Dotted**

It is available only when **Border** is enabled.

## Border Weight

**Default value:** 1

This option defines the border thickness. The value ranges from 1 to 30.

It is available only when **Border** is enabled.

## Corner Radius

**Default value:** 0

This option rounds the card corners. The value ranges from 0 to 95.

## Shadow

**Default value:** Off

This option adds a shadow to the card.

When enabled, you can also configure **Shadow Color**, **Shadow Position**, **Shadow Preset**, and the related custom shadow properties.

## Shadow Color

**Default value:** Foreground color from the current report theme

This option sets the shadow color.

It is available only when **Shadow** is enabled.

Read more about theme colors: [Report Themes with Custom Visuals](../../../features/themes.md)

## Shadow Position

**Default value:** Outer

This option defines whether the shadow is drawn outside or inside the card.

Available options:

- **Outer**
- **Inner**

It is available only when **Shadow** is enabled.

## Shadow Preset

**Default value:** Bottom Right

This option selects a predefined shadow direction.

Available options:

- **Bottom Right**
- **Bottom**
- **Bottom Left**
- **Center Right**
- **Center**
- **Center Left**
- **Top Right**
- **Top**
- **Top Left**
- **Custom**

When you choose any preset other than **Custom**, the visual automatically updates **Size**, **Blur**, **Angle**, **Distance**, and **Transparency**.

It is available only when **Shadow** is enabled.

## Size

**Default value:** 3 px

This option defines the shadow spread. The value ranges from 0 px to 100 px.

It is available only when **Shadow** is enabled and **Shadow Preset** is set to **Custom**.

## Blur

**Default value:** 10 px

This option defines the shadow blur. The value ranges from 0 px to 100 px.

It is available only when **Shadow** is enabled and **Shadow Preset** is set to **Custom**.

## Angle

**Default value:** 45°

This option defines the shadow angle. The value ranges from 0° to 360°.

It is available only when **Shadow** is enabled and **Shadow Preset** is set to **Custom**.

## Distance

**Default value:** 10 px

This option defines how far the shadow is offset from the card. The value ranges from 0 px to 100 px.

It is available only when **Shadow** is enabled and **Shadow Preset** is set to **Custom**.

## Transparency

**Default value:** 70%

This option defines the shadow transparency. The value ranges from 0% to 100%.

It is available only when **Shadow** is enabled.
