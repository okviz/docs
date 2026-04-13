---
layout:             page
title:              Show Entire Text
published:          true
date:               2022-07-07
modified:   	    2024-10-04
order:              /bullet-chart/options/category-axis/show-entire-text
internal:           autoSize
---

**Default value:** On

If enabled, this option automatically enlarges the category axis to display the entire labels text. Labels will be displayed according to the **Orientation** of the visual:

- **Horizontal**

    <img src="images/category-axis-show-entire-text-horizontal.png" width="700">

- **Vertical**

    <img src="images/category-axis-show-entire-text-vertical.png" width="700">

If it is inactive, labels' size will adapt to the category axis available space, with slightly different behavior depending on the visual's **Orientation**:

- **Horizontal:**  Label text could be truncated with ellipsis, according to the available axis space. Labels' orientation always remains horizontal.

    <img src="images/category-axis-show-entire-text-off-h.png" width="700">   

- **Vertical:** Label text could be truncated with ellipsis, according to the available axis space. Label orientation could be horizontal or at a 35/90-degree angle, depending on the height and width set for the visual.

    <img src="images/category-axis-show-entire-text-off-v-0deg.png" width="700">

    <img src="images/category-axis-show-entire-text-off-v-35deg.png" width="700">

    <img src="images/category-axis-show-entire-text-off-v-90deg.png" width="700">