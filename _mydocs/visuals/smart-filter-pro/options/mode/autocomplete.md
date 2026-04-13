---
layout:             page
title:              Autocomplete
published:          true
date:               2021-12-15
modified:           2024-05-22
order:              /smart-filter-pro/options/mode/autocomplete
internal:           autocomplete
available:          Dropdown mode
related:
    - auto-show-dropdown.md
---
**Default value:** On

This feature works like the address bar of a modern browser: as soon as you start typing a few characters in the input box, it auto completes your input with the first result from the underlying data. When enabled, only the most relevant value starting with the input string is suggested in the input box. 

<img src="images/autocomplete-1.png" width="700">

For instance, if you have a field of categories of products and you start typing the keyword `au`, then it will be autocompleted with the category that starts with that keyword (case insensitive) – category ***Audio*** in this case. 

In case there is more than one category starting with the specified user input, then it would be autocompleted with the top most category that starts with that keyword. By top most category, we mean the first category as per the sorting order chosen for the field. 

> When autocomplete is enabled, the **dropdown only lists values starting with the input string**.  
If you want to return values containing the input string in any position, you need to disable this feature. See also [How to Search in Dropdown Mode](../../features/dropdown.md#how-to-search).