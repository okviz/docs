---
layout:             page
title:              Auto Id Assignment
published:          true
date:               2025-01-13
modified:           2025-02-08
order:              /synoptic-panel/concepts/auto-id-assignment
---

In Synoptic Panel, each area within an [SVG](./../concepts/maps/svg-format.md) map must be uniquely identified to ensure proper [Data Binding](./../concepts/data-binding.md) and interactivity. During the map validation process, all elements are assigned a status, and unique [`id`](./../concepts/maps/svg-format.md#id-attribute) attributes are required for identification. To facilitate this, Synoptic Panel implements an ***auto-assignment process*** for IDs:

1. Existing `id`

    If an SVG element already has an `id` attribute, Synoptic Panel retains it ensuring the element remains identifiable. It is recommended that the `id` be pre-assigned to the map before it is loaded to avoid any issues.

2. Duplicate `id`

    If an SVG element has a duplicate `id` (i.e., multiple elements share the same `id`), Synoptic Panel will still function as expected, but this is not an ideal scenario. While the visual will continue to work, internally, a suffix will be appended to the duplicate `id` to make it unique (e.g., "my_area" might become "my_area_okviz_2"). In some case, this could lead to unexpected behaviors.

2.	Missing `id`

    For SVG elements without an `id` attribute, Synoptic Panel automatically assigns one and the `data-okviz-auto-id` attribute is also added to the element. The assigned `id` follows a specific convention based on the shape of the element, such as `rect`, `path`, `circle`, etc., combined with a sequential number (e.g., `rect1`, `circle2`). This ensures every area is uniquely identifiable within the map. Elements without and `id` will be considered as decorations and will not be interactive in the visual, unless [manually bound to a data point](./../concepts/data-binding.md#manual-binding).


Below is an example of an SVG source code and the auto-assignment process applied to it:

```svg
<svg>  

    <!-- Existing Id: Retained  -->                        
    <g id="back">   
    
        <!-- Existing Id: Retained  -->                                      
        <path id="sphere" d="M6865.81 ..."/>  

        <!-- Missing Id - New Id: "path1" - Added attribute: data-okviz-auto-id="true"  -->     
        <path d="M1730.68,384 ..."/>                    
    </g>

    <!-- Existing Id: Retained  --> 
    <g id="sectors">    

        <!-- Existing Id: Retained  -->                             
        <g id="Economy"> 
        
            <!-- Missing Id - New Id: "path2" - Added attribute: data-okviz-auto-id="true"  -->                             
            <path d="M4343.6,234 ..."/>     

            <!-- Missing Id - New Id: "path3" - Added attribute: data-okviz-auto-id="true"  -->            
            <path d="M4343.64,2423 ..."/>  

            <!-- Missing Id - New Id: "rect1" - Added attribute: data-okviz-auto-id="true"  -->                  
            <rect x="200" y="118" .../>

            <!-- Missing Id - New Id: "path4" - Added attribute: data-okviz-auto-id="true"  -->                
            <path d="M5150.71,1459 ..."/>               
        </g>

        <!-- Duplicated Id - New Id: Economy_okviz_1 - Added attribute: data-okviz-duplicated-id="true"  -->    
        <g id="Economy">  

            <!-- Missing Id - New Id: "rect2" - Added attribute: data-okviz-auto-id="true" -->
            <rect x="200" y="205" ...     

            <!-- other elements...-->                                                              
        </g>
    </g>
</svg>
```