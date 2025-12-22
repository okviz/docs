---
layout:             page
title:              Dynamic Links
published:          true
date:               2025-12-18
modified:           2025-12-18
order:              /synoptic-panel/features/dynamic-links
---

Dynamic Links lets Synoptic Panel navigate to a URL when a user clicks a [Matched Area](../concepts/data-binding.md#areas-status) in the SVG map. The URL comes from a DAX measure, so it can change with filters and the selected area.

> Note: you can add a static link to [Unmatched Areas](../concepts/data-binding.md#areas-status) by editing your map in the [Map Editor](../features/map-editor/index.md) and setting the [Link](../features/map-editor/edit-map.md#link) option for specific shapes.

## Requirements

Before start using Dynamic Links, you should be aware of these requirements:

- The SVG map must already be bound to data through **Categories**. See [Data Binding](https://docs.okviz.com/visuals/synoptic-panel/concepts/data-binding) for how shapes match data points
- [Dynamic Links field well](../fields/dynamic-links.md) accepts **one measure**. The measure must return a URL as text
- [Dynamic Links options](../options/dynamic-links/index.md) are only visible after a measure is placed in the Dynamic Links field well

## What Dynamic Links does

When Dynamic Links is active, any area that has a URL becomes eligible for navigation.

Depending on the [Interaction](../options/dynamic-links/interaction.md) settings, clicking a shape can:

- Open a small menu where the user chooses between selection and navigation
- Select the shape only
- Navigate directly to the URL

Typical uses:

- Open an external page such as a booking form or documentation
- Jump to another report or app that accepts URL parameters
- Build guided experiences from a floor plan, site map, or process diagram



## How to use Dynamic Links

1. **Create a URL measure**
    
    Create a DAX measure that returns a full URL for each area.The measure should return `BLANK()` when no link is needed.
    
2. **Add the measure to Synoptic Panel**
    
    Drag the measure into [Dynamic Links field well](../fields/dynamic-links.md) in the fields pane. This enables the feature for the visual.
    
3. **Choose how users activate links**
    
    In the [Format pane > Dynamic Links > Interaction](../options/dynamic-links/interaction.md) section, pick how users will trigger navigation.

4. **Optional: style linked areas**
    
    Enable [Custom Color](../options/dynamic-links/custom-color.md) and pick a [Color](../options/dynamic-links/color.md) if you want linked areas to stand out.
    
5. **Publish and test in Power BI Service**
    
    Click areas to confirm that:
    
    - The correct URL opens
    - The URL changes correctly when slicers and filters change the context

## Example: build a dynamic booking link

This measure builds a booking URL that changes by house type and ID. It matches the example used in the *Real Estate Site Plans in Power BI with Synoptic Panel* use case.

```
Dynamic Link =
VAR vBase = "https://synoptic-dynamiclinks.lovable.app/?houseType="
VAR vType = MAX ( 'Table'[Type of House for Link] )
VAR vMiddlePart = "&houseId=H-"
VAR vID = MAX ( 'Table'[IDname] )
RETURN
    vBase
        & vType
        & vMiddlePart
        & vID
```

<video src="images/dynamic-links.mp4" width="600" autoplay loop muted></video>

By adding this measure to Dynamic Links, areas where the measure returns a URL become clickable.

## Notes and limitations

- Dynamic Links supports one measure. If you need multiple link patterns, handle that logic inside the measure.
- Toolbar Button mode depends on the Synoptic Panel toolbar being enabled. If users do not see a link button, check [Toolbars > Controls](../options/toolbars/controls.md).
- To avoid broken links, make sure the measure returns a valid URL for every area that should be clickable.
- If your URLs include spaces or special characters, encode them before returning the final text. This keeps navigation stable across browsers.

## Advanced: link to filtered Power BI Service views

Dynamic Links can also navigate within Power BI Service. A common pattern is to build a URL that opens another report already filtered to the selected area.

Power BI Service supports URL query string filters. You add a `filter=` parameter to the report URL, using this shape:

```
URL?filter=Table/Field eq 'value'
```

Key points from Microsoft’s guidance: [Microsoft Learn](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-url-filters)

- Table and field names are case sensitive.
- String values must be wrapped in single quotes.
- You can filter on one field or more than one value in that field.
- You can filter on multiple fields using `and`.
- Special characters in names and values may need URL escaping.

This works well with Dynamic Links because the measure can assemble the full target URL based on the clicked area. For example, a measure can take the selected ID and return:

```
https://app.powerbi.com/groups/me/reports/<reportId>/<pageName>?filter=Houses/IDname eq '197'
```

Microsoft’s article includes the full syntax, supported operators, and escaping rules. Read it before building production links: [Filter a report using query string parameters in the URL](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-url-filters)