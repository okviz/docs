---
layout:             page
title:              Data Binding
published:          true
date:               2024-05-10
modified:           2025-09-03
order:              /synoptic-panel/concepts/03
next_reading:       true
---

In Synoptic Panel, data binding is the process of linking Power BI data to the visual elements (shapes or groups of shapes) of an SVG image, called a map ([what is a map?](./maps/index)). This allows any image to be transformed into a dynamic, interactive visualization.

<video src="images/interactive-map.mp4" width="600" autoplay loop muted></video>

## Map Areas

To understand how data binding works, it is important to understand the concept of areas. An area is a shape or a group of shapes of an SVG image that has a unique identifier (`id`). Without this identifier (and if no manual binding has been set up - [see below](#manual-binding)), elements are considered as decorations and cannot be interacted with. 

```svg
<svg>
    <!-- This is an "area" -->
    <path id="area1" d="M10 10"/>

    <!-- This is a decorative element -->
    <circle cx="10" cy="10" r="2"/>
</svg>
```

The example above shows the source code of an SVG image: in fact, Synoptic Panel only accepts maps in SVG format, which is a text-based format similar to HTML and can be edited with any text editor. Thus, it is easy to add or change the identifier of any element in a map. 

> There are some rules and conventions that govern the assignment of the identifier and which are the elements that can be promoted as areas. For more information, see [SVG Format](./maps/svg-format#id-attribute).

However, it is not recommended to make this editing manually, as it can lead to errors. Instead, you can use graphic editors such as *Adobe Illustrator* or *Inkscape* to do this job. It's also possible to use Synoptic Panel's Map Editor ([see below](#manual-binding)) to bind elements to data points, bypassing the need to assign identifiers.

## Auto Ids

In some cases, the SVG file may not have unique identifiers for each area. In this case, Synoptic Panel will automatically assign unique identifiers to each area. See more on [Auto Id Assignment](../concepts/auto-id-assignment.md).

## Linking Areas to Data 

Each area of a map can be linked to a specific data point ([what is a data point?](../../glossary.md#data-point)) of the columns bound to the ***Categories*** field well. This can be done automatically or manually.

### Automatic Binding 

Automatic binding takes place when the `id` of a map area matches one of the values of the ***Categories*** column. If the match is successful, the area status is set to **"Matched"**, is internally linked to the matched data point, and becomes interactive and customizable by the user. If the match is not successful, the area status is set as **"Unmatched"**.

Matching is done according to the following rules:

- Characters are compared case-insensitively.
- Leading and trailing spaces are ignored.
- The first character is ignored if it is an underscore (`_`) followed by a number.
- Special characters escaped with `_xHH_` are decoded, where *HH* is the hexadecimal representation of the character code
(e.g., *"_x24_"* is decoded as **$**).

<figure>
    <img src="images/auto-binding.png">
    <figcaption>
        In this example, the paths with the id "s202", "sec_203", and "_304" match the data points "s202", "sec 203", and "304", respectively, while the path with "sec210" does not match any data point.
    </figcaption>
</figure>

#### Automatic Binding when Hierarchy is Expanded

When the [Ignore Hierarchical Binding](../options/drill-behavior/ignore-hierarchical-binding.md) option is disabled, in order to automatically bind areas to data points, the SVG structure must match the data hierarchy. This means that the SVG elements must be organized in group elements (`g` tag) that represent the hierarchy paths of the data.

<img src="images/svg-structure-compared.png">

In the image above, you can see the same Map design with different SVG structures. The `Sphere-Sector` (left) has a flat structure, while the `Sphere-Sector-Grouped`(right) has a hierarchical structure of "Sector" and "Category". `Sphere-Sector-Grouped` has the correct structure to automatically bind the areas to the data points when the hierarchy is expanded and the ***Ignore Hierarchical Binding*** option is disabled.

### Manual Binding

When automatic binding is not possible or not desired, you can manually bind areas to data points. This can be done through Synoptic Panel's [Map Editor](../features/map-editor/index.md), which allows you to select each map element and link it to a specific value of the ***Categories*** column. When this is done, the status of the target area is set to **"Strong Matched"**, and it takes precedence over automatic binding.

 <video src="images/manual-strong-binding.mp4" autoplay loop muted></video>

> Keep in mind that in the Map Editor you can select the data point to be associated with an area **from those available at the time of editing**. This means that if a filter is applied, you may not see all the data points available in the dataset. Remember to remove any filters before opening the Map Editor.

Another way to manually bind areas is to edit the SVG file directly. This is useful, for example, when the column values contain invalid characters as XML ID. In such cases, a `data-okviz-strong` attribute can be added to the SVG element (see more on [SVG Format](./maps/svg-format#custom-attributes)); the value of the attribute must match the data point value according to the same rules as for automatic binding.

```svg
<svg>
        <g id="sectors">
            <g id="Economy">
                <path d="M4343.6,234 ..."/>
                <path d="M4343.64,2423 ..."/>
                <path d="M5871.33,5741 ..."/>

                <!-- This path is manually bound to the data point "Best" -->
                <path d="M5150.71,1459 ..." data-okviz-strong="Best"/>

            </g>

            <!-- ...other elements... -->      
        </g>
</svg>
```


#### Linking Multiple Areas to the Same Data Point

It is also possible to link multiple areas to the same data point.

> Note that an SVG group (tag `g`, which is a group of shapes) is considered a single area and is treated as such by Synoptic Panel. This section refers to the case where you have multiple areas that you want to link to the same data point.

Since assigning the same `id` to multiple elements is not allowed by the SVG specification, you can use the `data-okviz-strong` attribute to force the binding of multiple areas to the same data point.

 ```svg
<svg>
        <g id="sectors">

            <!-- ...other elements... -->   

            <g>
                
                <!-- This path is manually bound to "Regular" -->
                <path d="M4343.6,234 ..." data-okviz-strong="Regular"/>

                <path d="M4343.64,2423 ..."/>
                <path d="M5871.33,5741 ..."/>

                <!-- This path is also manually bound to "Regular" -->
                <path d="M5150.71,1459 ..." data-okviz-strong="Regular"/>

            </g>

            <!-- ...other elements... -->      
        </g>
</svg>
```

Or you can [Edit Map](../features/map-editor/edit-map.md#interaction-pane) and manually bind areas with the editing tool.
 
 <video src="images/same-data-point-binding.mp4" style="clip-path:inset(0 2px 0 0)" autoplay loop muted></video>

#### Unbinding Areas

If you wish to exclude an area from the data binding process, you can do so directly from the Map Editor or you can add a `data-okviz-unbound` attribute to the SVG element. This will prevent the area from being considered for automatic binding and will be assigned to the status **"Unbound"**.

 <video src="images/manual-unbound.mp4" style="clip-path:inset(0 0 0 2px)" autoplay loop muted></video>

 ```svg
<svg>
        <g id="sectors">
            <g id="Economy">
                
                <!-- This path is manually unbound" -->
                <path d="M4343.6,234 ..." data-okviz-unbound="true"/>

                <path d="M4343.64,2423 ..."/>
                <path d="M5871.33,5741 ..."/>
                <path d="M5150.71,1459 ..."/>

            </g>

            <!-- ...other elements... -->      
        </g>
</svg>
```

## Areas Status

Here is a summary of the possible statuses of an area (higher priority has precedence):

|Status          |Priority |Description|
|---             |:---:    |---|
|Unbound         |3        |The area is manually excluded from the data binding.|
|Strong Matched  |2        |The area is manually bound to a data point.|
|Matched         |1        |The area is automatically bound to a data point.|
|Unmatched       |0        |The area is not bound to any data point.|



### Group Priority 

If an area is a child of a group (`g` tag) that is "Matched" (automatically bound to a data point), it has the same status as the group, unless it is manually set with custom attributes such as `data-okviz-strong` or `data-okviz-unbound`; in this case, the status of the child has precedence.

<figure>
    <img src="images/data-binding-group.png">
    <figcaption>
        In this example, the `g` with the id "Economy" is Auto Matched and all child `path` inherit the same status.
    </figcaption>
</figure>

<figure>
    <img src="images/data-binding-group-strong.png">
    <figcaption>
        In this example, the `g` with the id "Economy" is Auto Matched and all child `path` inherit the same status, except for the `path` that has the `data-okviz-strong` attribute, which is "Strong Matched" to the data point "Best" and takes precedence over the "Auto Matched" parent status.
    </figcaption>
</figure>

<figure>
    <img src="images/data-binding-group-unbound.png">
    <figcaption>
        In this example, the `g` with the id "Economy" is Auto Matched and all child `path` inherit the same status, except for the `path` that has the `data-okviz-unbound` attribute, which is "Unbound" and takes precedence over the "Auto Matched" parent status.
    </figcaption>
</figure>

When a group is "Unbound", all child areas are considered as such, regardless of their individual status.

<figure>
    <img src="images/data-binding-all-unbound.png">
    <figcaption>
        In this example, the `g` with the id "Economy" has the `data-okviz-unbound` attribute. This means that this group is not matched, even if the id matches a data point value. All child `path` are considered "Unbound", regardless of their individual status.
    </figcaption>
</figure>
