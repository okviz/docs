---
layout:             page
title:              Split Text by
menu_title:         Split Text
published:          true
date:               2021-12-16
modified:           2024-09-14
order:              /smart-filter-pro/options/mode/split-text
internal:           searchDelimiter
available:          Search mode
---
**Default value:** Interactive

This options allows you to choose the character which can be used as a separator to split the entered/pasted text into the search box into multiple keywords. 

Let us say you have Smart Filter Pro in Search mode connected to a Brands field and you choose ***Space*** as the character for splitting. If you want to apply a filter for Contoso, Fabrikam, and Proseware brands, you just need to type each brand in the search box separated by a space. 

<img src="images/split-text-1.png" width="750">


Other than ***Space***, the special characters used as separators are ***Carriage return***, ***Comma***, ***Semicolon***, and ***Vertical bar***.

In case ***Carriage return*** is chosen, each line in the search box is treated as the value to search for when applying the filter.

<img src="images/split-text-CrgReturn.png" width="800">


> Note the ***Carriage return*** is the option to choose if you need to paste text into the search box from Excel. More info on this features are available in [Split pasted text for Dropdown/Filter mode](split-pasted-text.md#pasting-from-excel).

If you choose ***Interactive***, a toggle is displayed in the search box to switch from one separator to another even in [Reading View](../../../glossary.md#reading-and-editing-view). This means that not only the report designer can change the separator but also the end users.

<img src="images/split-text-2.png" width="250">