---
layout:             page
title:              Default Condition for Text
menu_title:         Default Condition
published:          true
date:               2021-12-16
modified:           2022-07-20
toc:                false
order:              /smart-filter-pro/options/mode/default-condition
internal:           defaultTextCondition
version:            2.1.0
available:          Filter mode
---
**Default value:** Contains

This option allows you to choose how to search text fields when wildcard or special characters are not explicitly defined. This means that this option has no effect when the connected field contains numbers or dates or when using complex syntax other than simple keywords.

For example, the option affects this query: `camcorders`  
but it has no effect on these: `<= 100` `2017_2019` `*phone` 

> To learn how search works and the full syntax you can use, see: [How to Search in Filter Mode](../../features/filter.md#how-to-search)

You can choose between: 
- [Equal to](#equal-to)
- [Contains](#contains)

## Equal to

Let us say you want to filter and find out which product offerings include camcorders as the subcategory. Now if you type `camcorders` in the input box, and the ***Default Condition for Text*** is chosen as ***Equal to***, then the results will be filtered displaying the ***Camcorders*** category. 

Using ***Equal to*** as the default condition is equivalent to write `"camcorders"` in the input box, and for this reason, the visual alters the entered keyword by automatically enclosing it in double quotes.

<img src="images/default-condition-1.png" width="750">
 
> You can still search for values that **contain your keyword** using the syntax: `*camcorders*`

## Contains

If you choose ***Contains*** as the default condition and type `camcorders`, all the values **containing** the keyword ***camcorders*** will be displayed. This also includes values like ***Cameras & Camcorders Accessories*** as it contains the keyword.
 
<img src="images/default-condition-2.png" width="750">

> You can still search for values that **match your string** using the syntax: `"camcorders"`
