---
layout:             page
title:              Max Items in Dropdown
published:          true
date:               2021-12-14
modified:           2021-12-14
order:              /02/03/99/max-items-in-dropdown
internal:           maxResults
available:          Dropdown mode
---
**Default value:** 10

This option allows you to choose the maximum number of items that can be included in the dropdown list for applying filter. 

For instance, if you set this value to 2, then the dropdown list will display only the top two items from underlying data.

<img src="images/max-items-dropdown.png" width="750">

In the above example, you see that even though there are several possible values available that contain `c`, the dropdown list populates only ***Cameras and Camcorders*** and ***Cell phones*** as the value for ***Max items in dropdown*** is set to ***2***. The top two values are as per the sorting order chosen for the connected field.

> Note that even if you choose to filter data by typing keywords instead of clicking the down arrow control, the dropdown list will only populate the set number of relevant values based on user input.