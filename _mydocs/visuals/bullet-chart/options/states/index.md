---
layout:             page
title:              States
published:          true
date:               2022-07-07
modified:   	    2022-08-17
order:              /bullet-chart/options/states
internal:           states
next_reading:       true
next_reading_title: Options
class:              normal
---

**Default value:** On

When enabled, this section enables displaying the bullets' states and related options. 

<video src="images/states-on.mp4" width="700" autoplay loop muted></video>

## Connecting Measures to States

Since some options in this section are data bound, they will be displayed vary depending on the measures connected to the fields.

When a measure is connected to the ***States*** field, an option with the name of the measure connected to the ***States*** field is displayed, allowing to choose the color of the related state bar.

<img src="images/one-state-connected.png" width="700">

<img src="images/one-state-color-option.png" width="700">

If more measures are connected there will be an option for each measure.

<img src="images/two-states-connected.png" width="700">

<img src="images/two-states-color-options.png" width="700">

Having multiple measures connected to the ***States*** field will also enable 2 more options: [Auto Sort](auto-sort.md) and [More Than 5 States](additional-states.md).

<img src="images/more-options-displayed.png" width="700">

## Manual States

Bullet Chart also allows to show up to 5 states while having no measures connected to the ***States*** field. 

<img src="images/no-states-connected.png" width="700">

<img src="images/manual-states.png" width="700">

In this case, you can manually assign a value and choose a color for each state, starting with the choice of [Value Type](value-type.md).

Enabling the [Add to Legend](add-to-legend.md) option will also allow to specify a label for each state, which will be displayed in the legend.

<img src="images/add-to-legend.png" width="700">
