---
layout:             page
title:              Custom Visuals
published:          true
date:               2021-12-14
modified:           2025-04-01
order:              /01/01
toc_h_max:            2
---

OKVIZ visuals are custom visuals. Custom visuals are components for Power BI developed by third-party vendors (also known as ISV), not Microsoft.

From a usage perspective, custom visuals are similar to core visuals like the Bar Chart or Treemap; you can drag them to a report, assign data, interact and so on. As for the underlying features, however, there are some differences between custom and core visuals, as not all Power BI capabilities are available to custom visuals, and some security restrictions affect the overall user experience with them.

## Custom Visuals Limitations

Power BI sets some limitations to ensure user safety and avoid data breaches:

- **Run in sandbox**

    A sandbox is basically an isolated container that is disconnected from other elements of the canvas; this means that a custom visual cannot access the underlying report data (unless explicitly bound by the user) and cannot access any other Power BI element. In HTML terminology, a sandbox is a restricted iframe.

- **Cannot draw outside their boundaries**

    As a result of running in the sandbox, custom visuals reside in their container and cannot be drawn outside of it. For example, one feature of Smart Filter Pro is the ability to show a drop-down menu, but [you need to enlarge the space](../smart-filter-pro/features/sandbox.md) reserved for the visual in the report canvas in order to see it in its entirety. A standard slicer, on other hand, can display a similar drop-down menu regardless of its size.

- **Must be certified to be exported**

    Exporting to PDF/Power Point or including them in subscription emails is not allowed in custom visuals unless they are certified by Microsoft. See more here: [Certification](certification.md)

- **New features in Power BI may come later**

    Because custom visuals rely on dedicated APIs that control the communication between the report and the sandbox, new features in Power BI require additional work to be exposed, so they are generally available to custom visuals weeks or months later than core visuals.

## How to Use Custom Visuals

Custom visuals work like core visuals; to use one you just have to drag and drop them from the ***Visualizations*** panel into your report canvas, connect some data and start using them.

Here is an handy guide from Microsoft: [Add visuals to a Power BI report](https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-report-add-visualizations-i)

## History of Custom Visuals

Custom visuals were not available from the beginning. In fact, Microsoft first introduced them in 2015 with a contest called **Power BI Best Visual Contest** that rewarded the most interesting and innovative visuals created by third-party developers.

This was new for Power BI, new challenges for developers who had to use immature technology and APIs with poor documentation. But it was exciting, not so much for the competition, but because everyone had the opportunity to make an already promising Microsoft application even better.

At that time OKVIZ was born; we fell in love with custom visuals and decided to do our best to create useful and beautiful ones.
We published our first two visuals for the contest and both won a prize:
- **Grand Prize**: first place for our [Synoptic Panel](../synoptic-panel/index) which was chosen by the Microsoft jury ([see the announcement](https://powerbi.microsoft.com/en-us/blog/power-bi-best-visual-contest-announcing-the-contest-winners/))
- **People's Choice Award**: [Bullet Chart](../bullet-chart/index.md) won the first of the three awards available in this category ([see the announcement](https://powerbi.microsoft.com/en-us/blog/power-bi-best-visual-contest-1st-people-s-choice-award/))

<img src="images/pbi-best-visual-contest.png" width="300" class="naked">

Since then OKVIZ has never stopped creating high-quality custom visuals for Power BI.
