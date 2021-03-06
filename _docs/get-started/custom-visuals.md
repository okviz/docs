---
layout:             page
title:              Power BI Custom Visuals
menu_title:         Custom Visuals
published:          true
date:               2021-12-14
modified:           2022-07-21
order:              /01/01
toc:                false
---

OKVIZ visuals are custom visuals. Custom visuals are components for Power BI developed by third-party vendors (also known as ISV), not Microsoft.

From a usage perspective, custom visuals are similar to core visuals like the Bar Chart or Treemap; you can drag them to a report, assign data, interact and so on. As for the underlying features, however, there are some differences between custom and core visuals, as not all Power BI capabilities are available to custom visuals, and some security restrictions affect the overall user experience with them.


## Custom Visuals Limitations

Power BI sets some limitations to ensure user safety and avoid data breaches:

- ### Custom visuals run in sandbox 
    A sandbox is basically an isolated container that is disconnected from other elements of the canvas; this means that a custom visual cannot access the underlying report data (unless explicitly bound by the user) and cannot access any other Power BI element. In HTML terminology, a sandbox is a restricted iframe.

- ### Custom visuals cannot draw outside their boundaries
    As a result of running in the sandbox, custom visuals reside in their container and cannot be drawn outside of it. For example, one feature of Smart Filter Pro is the ability to show a drop-down menu, but [you need to enlarge the space](../smart-filter-pro/features/sandbox.md) reserved for the visual in the report canvas in order to see it in its entirety. A standard slicer, on other hand, can display a similar drop-down menu regardless of its size.

- ### Custom visuals must be certified to be exported
    Exporting to PDF/Power Point or including them in subscription emails is not allowed in custom visuals unless they are certified by Microsoft. See more here: [Certification](certification.md)

- ### New features in Power BI may come later to custom visuals
    Because custom visuals rely on dedicated APIs that control the communication between the report and the sandbox, new features in Power BI require additional work to be exposed, so they are generally available to custom visuals weeks or months later than core visuals.

## How to Use Custom Visuals

Custom visuals work like core visuals; to use one you just have to drag and drop them from the ***Visualizations*** panel into your report canvas, connect some data and start using them.

Here is an handy guide from Microsoft: [Add visuals to a Power BI report](https://docs.microsoft.com/en-us/power-bi/visuals/power-bi-report-add-visualizations-i)
