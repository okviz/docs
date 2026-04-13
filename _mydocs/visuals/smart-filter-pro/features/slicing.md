---
layout:             page
title:              Slicing
published:          true
date:               2021-11-20
modified:           2024-09-14
order:              /smart-filter-pro/features/slicing
---

There are two types of visuals in Power BI: those that highlight data on user interaction, and those that filter out other visuals in reports; these are called ***Slicers***. Put in other words, slicers are visuals than act like the ***Filters*** pane of your report. 

<img src="images/filter-pane.png" width="180">

One of the peculiarities of the slicers is that they can be filtered only by other slicers, also if you try to manually change their interactivity. Also, when you apply a filter on a slicer, this is somewhat permanent until you remove the filter, as opposed to normal visuals which can be easily reverted from other visuals.

**Smart Filter Pro is slicer.**

## Sync Slicers

***Sync Slicers*** is a feature of Power BI that allows you to apply the filter of a slicer placed on a single page to other pages of the same report. Smart Filter Pro supports this feature as well. 

To use ***Sync Slicers***, you can follow these steps:

1. Show the ***Sync Slicers*** pane:
    - In Power BI Desktop click on the ***View*** ribbon, then select ***Sync slicers***.
    - In Power BI Service, click on the ***View*** menu, then enable the ***Sync slicers pane***.

2. Select the visual on the canvas and set the options in the ***Sync Slicers*** pane to obtain the result you want.

    <img src="images/sync-slicers-1.png" width="850">   

The two columns in the pane are: 

- **Synchronization**: This allows you to choose the pages where to apply the filter of the slicer. 

- **Visibility**: This allows you to choose where to place the slicer visual. This means that if you manually draw the visual on a single page, you can duplicate it on different pages automatically by using this option.

For instance, suppose that you have a report with three pages; one page contains Smart Filter Pro with the category ***Computers*** selected and you want to replicate this filter on the other pages too. To do so, you just need to select both the columns on every line of the ***Sync Slicers*** pane and the filter will be spread across the report.

<img src="images/sync-slicers-2.png" width="180">   

> Find out more information here: [Sync and use slicers on other pages](https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-slicers#sync-and-use-slicers-on-other-pages)