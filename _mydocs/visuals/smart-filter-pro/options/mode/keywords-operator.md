---
layout:             page
title:              Keywords Operator
published:          true
date:               2021-12-16
modified:           2024-09-14
toc:                false
order:              /smart-filter-pro/options/mode/keywords-operator
internal:           logicalOperator
available:          Filter | Search mode
---
**Default value:** Interactive

This option allows you to choose the logical operator to use in the query performed by Smart Filter Pro in Filter/Search mode.

> To learn how search works and the full syntax you can use, see: [How to Search in Filter/Search Mode](../../features/filter.md#how-to-search)

Let us have a look at each of the available choices:
- [AND](#and)
- [OR](#or)
- [Interactive](#interactive)

## AND

The logical operator AND is used when you want all the specified filter conditions to be satisfied.
 
<img src="images/keywords-op-1.png" width="700">

You see that the logical operator AND satisfies both the specified filter conditions. So, the bar chart ***Sales by date*** displays sales for the time period greater than or equal to 2017, and less than 2019.  

Let us take another example of a textual field to illustrate the AND operator.
 
<img src="images/keywords-op-2.png" width="700">

Here the logical operator AND satisfies both the specified filter conditions. So, the bar chart showing sales by category does not include categories containing the keywords ***audio*** and ***computers***.

## OR

The logical operator OR is used when you wish to satisfy either one or more of the specified filter conditions.
 
 <img src="images/keywords-op-3.png" width="700">

You see that the logical operator OR satisfies either of the specified filter conditions. Even though the second filter condition is not satisfied, the bar chart showing sales by date displays sales for the time period greater than or equal to 2017. 

## Interactive

The ***Interactive*** option lets you switch between the AND and OR operators in the visual interactively.
If you choose ***Interactive***, in fact, a special toggle is displayed in the input box to choose and switch from one operator to another even in [Reading View](../../../glossary.md#reading-and-editing-view). This means that not only the report designer can change the operator but also the end-users.

<img src="images/keywords-op-4.png" width="700">