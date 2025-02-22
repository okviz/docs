---
layout:             page
title:              OKVIZ Color Rules
menu_title:         Color Rules
published:          true
date:               2022-07-14
modified:           2025-02-22
order:              /02/color-rules        
---
OKVIZ visuals allow you to change the color of the visual elements dynamically based on the data values. This feature is useful when you want to highlight specific elements based on the data values.

When the Power BI conditional formatting cannot be used, for example because a data aggregation is made by the visual itself, OKVIZ visuals provide advanced color rules to change the color of the visual elements based on the data values.

When the color rules are available, you can find a dedicated button in the visual canvas, usually in the lower part of the visual:

<img src="images/editing-color-rules.png" width="500" alt="Editing color rules in Calendar pro">

You can define two types of color rules: 
- Conditional Rules
- Color Scale Rules

## Conditional Rules
In the cases you want to display a color for a particular value, you can use the conditional rule.

For example, suppose you want to color the cells that present a sales amount greater than 20k. You can impose a condition like the following:

<img src="images/conditional-rule.png" width="550" alt="A conditional rule">

And the result is:

<img src="images/conditional-rule-result.png" width="600" alt="A conditional rule">

## Color Scale Rules
The color scale rule allows for different levels of customization.

<img src="images/color-scale-rule.png" width="500" alt="The color scale rule">

First of all, you can choose your preferences on:
- **Scale Type**. This option allows you to choose between **Linear** or **Logarithmic**. This parameter manages how the colors change during the transitions among one another, by using a linear or logarithmic logic.
- **Blank Values**. This option allows you to:
    - **Ignore** the blank values.
    - Treat them as if their value was zero (**Treat As Zero**). In this case, the color will be the one associated with the value zero.
    - To set a color of your choice for the blank values (**Set Color**).

By enabling the **Multiple Scales** toggle, you can change the colors and their transition among colors at different granularity. In other words, you can set custom rules that differentiate the colors and their transitions for daily, monthly, weekly, quarterly, or yearly aggregations.

If the toggle is not enabled, Calendar Pro will apply the same rule to all the granularities.

You can manage the transition among the colors to associated values by changing the options for **Minimum**, **Center**, and **Maximum** as follows:
- **Percentage**. The transition among colors can be at a certain percentage. This can be set by inserting a value in the dedicated box or by moving the percentage bar at the bottom.
- **Value**. In this case, the transition can be set at precise values, instead of on a percentage base.
- **Field**. In this case, the transition can be set based on the values of a specific field.
- **Calculation**. In this case, you can set the transition of color based on calculation, using different mathematical operators.

The **Below** and **Above** options allow you to visualize the transition among values with certain colors. Then, below or above certain values (or percentages) the cells can be colored differently. This will enlighten values in a certain range.

Every option allows for the possibility to use the transparent: this adds a further possibility for personalization and customization, allowing multiple rules visible.

For example, consider the following rule:

<img src="images/setting-ranges.png" width="500" alt="Setting color ranges">

This results in:

<todo>Retake the screenshot - the transparent rule is not clear - show multiple rules</todo>
<img src="images/setting-ranges-result.png" width="600" alt="Setting color ranges">

> **NOTE**: The use of the **Value** or **Percentage** parameters can be mixed together at will.
<todo>We need to clarify that the value can be affected by the current filters</todo>

Finally, by enabling the **Relative Domain** toggle, Calendar Pro considers the first data point of the column as the starting point.

If not enabled, Calendar Pro considers 0 as the starting point in case of positive numbers. In the case of negative numbers, 0 is the highest value.

<todo>Color rules fields</todo>