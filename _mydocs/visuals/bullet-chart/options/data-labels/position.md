---
layout:             page
title:              Position
published:          true
date:               2022-07-07
modified:   	    2025-09-15
order:              /bullet-chart/options/data-labels/position
premium:            /bullet-chart/licensing.md
internal:           position
---

**Default value:** Auto

Allows to specify the position of data labels relative to the bars. The following positioning options are available:

- **Auto:** if there is enough space at the end of the bar, data label is placed outside the bar, otherwise it is placed inside-end. 

    <img src="images/data-labels-position-auto.png" width="700">

- **Inside base:** the label is placed inside, at the base of the bar. If the bar is not large enough to contain the label it will not be displayed.

    <img src="images/data-labels-position-inside-base.png" width="700">

- **Base:** the label is placed at the base of the bar, outside or inside depending on the available space. 

- **Inside center:** the label is placed in the middle of the bar. If the bar is not large enough to contain the label it will not be displayed.

    <img src="images/data-labels-position-inside-center.png" width="700">    

- **Inside end:** the label is placed inside, at the end of the bar. If the bar is not large enough to contain the label it will not be displayed 

    <img src="images/data-labels-position-inside-end.png" width="700">

- **Outside end:** the bar size is reduced to allow the label to be displayed outside.

    <img src="images/data-labels-position-outside-end.png" width="700">

- **Outside end (variance):** works like ***Outside end*** but when the [variance](../variances/index.md) is visible it places the data label after the variance bar.

    <video src="images/data-labels-position-outside-end-variance.mp4" width="700" autoplay loop muted></video>