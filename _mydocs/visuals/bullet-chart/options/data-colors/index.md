---
layout:         page
title:          Data Colors
published:      true
date:           2022-07-07
modified:   	2024-05-22
order:          /bullet-chart/options/data-colors
internal:       dataPoint
---

This section allows to define bullets color. Since the options in this section are data bound, they will be displayed vary depending on the measures connected to the fields. If there is a measure connected to the ***Category*** field, the options displayed will be:

## Default Color

**Default value:** First Palette Color

This option is only visible when a measure is connected to the ***Category*** field. Allows you to define the default color for the bars related to the measure connected in the ***Value*** field. Bars will be the same color for each category.

<img src="images/data-colors-default-color.png" width="700">

## Show All

**Default value:** Off

Enabling this option, all categories names will be displayed within the section, allowing to define the color for each bar.

<video src="images/data-colors-show-all.mp4" width="700" autoplay loop muted></video>

If there is no measure linked to the ***Category*** field, the section will show an option to change color for each measure linked to the ***Value*** field with the same names as the linked measures.

<img src="images/data-colors-value-color.png" width="700">

If there is a measure connected to the ***Comparison Value***, an option with the name of the measure connected to the field will be displayed. This option allow to change the bars color for the comparison value.

<img src="images/data-colors-comparison-color.png" width="700">


