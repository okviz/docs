---
layout:             page
title:              Dynamic Links
published:          true
date:               2025-12-18
modified:           2026-01-21
order:              /synoptic-panel/features/dynamic-links
---

Dynamic Links lets Synoptic Panel navigate to a URL when a user clicks a matched area in the SVG map. The URL comes from a DAX measure, so it can change with filters and the selected area.

> Note that you can add a static link to unmatched areas by editing your map in the [Map Editor](../features/map-editor/index.md) and setting the **Link** option for specific shapes.

## Requirements

Before start using Dynamic Links, you should be aware of these requirements:

- The SVG map must already be bound to data through **Categories**. See [Data Binding](https://docs.okviz.com/visuals/synoptic-panel/concepts/data-binding) for how shapes match data points.
- [Dynamic Links field well](../fields/dynamic-links.md) accepts **one measure**. The measure must return a URL as text.
- [Dynamic Links options](../options/dynamic-links/index.md) are only visible after a measure is placed in the Dynamic Links field well.

## What Dynamic Links Does

When Dynamic Links is active, any area that has a URL becomes eligible for navigation.

Depending on the set option, clicking a shape can:

- Open a small menu where the user chooses between selection and navigation
- Select the shape only
- Navigate directly to the URL

Typical uses:

- Open an external page such as a booking form or documentation
- Jump to another report or app that accepts URL parameters
- Build guided experiences from a floor plan, site map, or process diagram

## How to Use Dynamic Links

1. **Create a URL measure**
    
    Create a DAX measure that returns a full URL for each area. The measure should return `BLANK()` when no link is needed.
    
2. **Add the measure to Synoptic Panel**
    
    Drag the measure into Dynamic Links field well in the fields pane. This enables the feature for the visual.
    
3. **Choose how users activate links**
    
    In the [Dynamic Links options](../options/dynamic-links/index.md), pick how users will trigger navigation.

4. **Optional: style linked areas**
    
    Choose a custom color if you want linked areas to stand out.
    
5. **Publish and test in Power BI Service**
    
    Click areas to confirm that:
    
    - The correct URL opens
    - The URL changes correctly when slicers and filters change the context

## Example: Build a Dynamic Booking Link

This measure builds a booking URL that changes by house type and ID. It matches the example used in the *Real Estate Site Plans in Power BI with Synoptic Panel* use case.

```dax
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

By adding this measure to Dynamic Links, areas where the measure returns a URL become clickable.

<video src="images/dynamic-links.mp4" width="100%" autoplay loop muted></video>

## Notes and Limitations

- Dynamic Links supports one measure. If you need multiple link patterns, handle that logic inside the measure.
- Toolbar Button mode depends on the Synoptic Panel toolbar being enabled. If users do not see a link button, check [Toolbars > Controls](../options/toolbars/controls.md).
- To avoid broken links, make sure the measure returns a valid URL for every area that should be clickable.
- If your URLs include spaces or special characters, encode them before returning the final text. This keeps navigation stable across browsers.

## Advanced: Link to Filtered Power BI Service Views

Dynamic Links can also navigate within Power BI Service. A common pattern is to build a URL that opens another report already filtered to the selected area.

Power BI Service supports URL query string filters. You add a `filter=` parameter to the report URL, using this syntax:

`URL?filter=Table/Field eq 'value'`

This works well with Dynamic Links because the measure can assemble the full target URL based on the clicked area. For example, a measure can take the selected ID and return:

`https://app.powerbi.com/groups/me/reports/<reportId>/<pageName>?filter=Houses/IDname eq '197'`

> Key points from [Microsoft documentation](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-url-filters):
- Table and field names are case sensitive.
- String values must be wrapped in single quotes.
- You can filter on one field or more than one value in that field.
- You can filter on multiple fields using `and`.
- Special characters in names and values may need URL escaping.