---
layout:             page
title:              Trendline
published:          true
date:               2026-04-07
modified:           2026-04-14
order:              /card-with-states/options/trendline
internal:           trendLine
next_reading:       true
next_reading_title: Options
---

This section contains the options of the trendline shown inside the card.

The **Trendline** card is available only when the visual receives multiple data points for each card through the **Trendline axis** field well.

## Missing Data Points

**Default value:** Ignore

This option defines how empty trendline values are handled.

Available options:

- **Ignore**
- **Set to Zero**
- **Set to Null**

## Y-axis Start

**Default value:** Auto

This option defines the start of the trendline Y-axis. Leave it empty to let the visual calculate it automatically.

The accepted range is from 0 to 100.

## Y-axis End

**Default value:** Auto

This option defines the end of the trendline Y-axis. Leave it empty to let the visual calculate it automatically.

The accepted range is from 0 to 100.

## Line/Area Interpolation

**Default value:** Monotone

This option defines the interpolation used by the trendline line and area.

Available options:

- **Straight**
- **Step**
- **Monotone**
- **Smooth**

## Size & Position

**Default value:** Lower Half Space

This option defines how much vertical space is reserved for the trendline.

Available options:

- **Empty Bottom Space**
- **Full Space**
- **Lower Half Space**

## Show Line

**Default value:** On

This option enables the trendline stroke.

When enabled, you can also configure the line appearance and point highlighting options.

## Line Weight

**Default value:** 2

This option defines the thickness of the trendline. The value ranges from 1 to 20.

It is available only when **Show Line** is enabled.

## Point Weight

**Default value:** 2

This option defines the size of rendered points. The value ranges from 1 to 20.

It is available only when **Show Line** is enabled.

## Line Color

**Default value:** Foreground color from the current report theme

This option sets the trendline color.

It is available only when **Show Line** is enabled.

The final color can be overridden by [OKVIZ Color Rules](../../../features/color-rules.md).

## Show Marker

**Default value:** On

This option shows the interactive marker on the trendline.

It is available only when **Show Line** is enabled and [Data Label > Display](../data-label/index.md#display) is not set to **Dynamic**.

## Marker Line Color

**Default value:** {% include color value="#666666" %}

This option sets the color of the position marker.

It is available when **Show Marker** is enabled. It is also used by the dynamic marker when [Data Label > Display](../data-label/index.md#display) is set to **Dynamic**.

## Show the Current Point

**Default value:** On

This option highlights the point currently represented by the main value.

It is available only when **Show Line** is enabled and the main value is set to **Last data point**, **First data point**, **Minimum**, or **Maximum**.

## Show All Points

**Default value:** Off

This option displays all trendline points.

It is available only when **Show Line** is enabled.

## Highest Point

**Default value:** Off

This option highlights the highest point in the trendline.

It is available only when **Show Line** is enabled.

## Highest Point Color

**Default value:** {% include color value="#399599" %}

This option sets the color used for the highest point.

It is available only when **Highest Point** is enabled.

## Lowest Point

**Default value:** Off

This option highlights the lowest point in the trendline.

It is available only when **Show Line** is enabled.

## Lowest Point Color

**Default value:** {% include color value="#FD625E" %}

This option sets the color used for the lowest point.

It is available only when **Lowest Point** is enabled.

## Show Area

**Default value:** Off

This option fills the area under the trendline.

When enabled, you can also configure **Color** and **Transparency**.

## Color

**Default value:** {% include color value="#CCCCCC" %}

This option sets the fill color of the trendline area.

It is available only when **Show Area** is enabled.

The final color can be overridden by [OKVIZ Color Rules](../../../features/color-rules.md).

## Transparency

**Default value:** 50%

This option defines the transparency of the trendline area. The value ranges from 0% to 100%.

It is available only when **Show Area** is enabled.
