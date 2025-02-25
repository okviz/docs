---
layout:             page
title:              Auto-Fetch
published:          true
date:               2025-02-25
modified:           2025-02-25
order:              /synoptic-panel/features/auto-fetch
---
Auto-Fetch is an advanced feature that enables Synoptic Panel to automatically fetch other maps (i.e. "child maps") from a remote map and make them available for drill-down navigation.

Using Auto-Fetch provides two main benefits:

- **Automated Map Hierarchy**: Child maps are automatically fetched and linked to the parent map, without the need for manual configuration or import.
- **Dynamic Map Loading**: Only necessary maps are fetched, optimizing performance.

> **NOTE:** This feature works only with remote maps and requires the child maps to be stored in the same server as the parent map.

## How It Works

When a remote map is loaded, Synoptic Panel checks each matched area (i.e., areas that successfully bind to a data point) and attempts to fetch a corresponding child map. The expected file name for each child map is the same as the matched area’s id, and it is assumed to be located at the same base URL as the parent map.

> It's also possible to define a different attribute to build the child map URLs. See the next section for more details.

For example, if a remote map is loaded from: 

`https://example.com/maps/main.svg` 

and a matched area has a data point id of `sector1`, Synoptic Panel will attempt to fetch the child map from: 

`https://example.com/maps/sector1.svg`

If the file exists and is a valid SVG map, it will be automatically used as the child map for that area. If no such file is found, no additional map will be loaded.


## How to Enable It

To enable Auto-Fetch, you need to:

- **Set the Auto-Fetch Attribute**  
    In the parent map, add the `data-okviz-autofetch` attribute to the root SVG element. The value of this attribute should be the name of the attribute that each area element will use to build the child map URL.   
    For example set `id` or `data-href` or any other valid SVG attribute. You can also set the value to `true` to use the default attribute `id`.

    ```xml
    <svg xmlns="http://www.w3.org/2000/svg" data-okviz-autofetch="true">
    ```

- or **Enable Auto-Fetch in the Visual Settings**  
    In the Synoptic Panel visual settings, set the [Auto-Fetch Maps](../options/drill-behavior/auto-fetch.md) option to ***Enabled*** to automatically fetch child maps built from the matched areas' ids.
