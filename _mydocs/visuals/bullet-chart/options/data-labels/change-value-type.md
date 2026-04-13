---
layout:             page
title:              Change Value Type
published:          true
date:               2022-08-17
modified:   	    2023-03-21
order:              /bullet-chart/options/data-labels/change-value-type
premium:            /bullet-chart/licensing.md
internal:           changeValueType
related:
    - change-decimal-places.md
    - show-change.md
---
**Default value:** Percentage

This option is only available if [Show change over](show-change.md) is set to a value other than ***(Don't show)*** and allows the difference between the main value and the value selected in the **Show change over** option to be displayed as:

- **Percentage:** data labels will show the percentage difference between the primary value and the selected value. Looking at the example below, the percentage difference is given by the equation:

    **(primary measure - target) / target** 

    which means:

    - primary measure (Sales Amount) = $4.13M; 
    - target = $2M;
    
    - (4.13 - 2) / 2 = 1.065 = 106.5%.

    <img src="images/data-labels-change-value-type-perc.png" width="700">

- **Absolute value:** data labels will show the difference between the primary measure and the selected option in absolute value.

    <img src="images/data-labels-change-value-type-abs.png" width="700">
