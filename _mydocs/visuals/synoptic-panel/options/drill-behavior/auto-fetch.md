---
layout:             page
title:              Auto-Fetch Maps
published:          true
date:               2025-02-05
modified:           2025-03-17
order:              /synoptic-panel/options/drill-behavior/auto-fetch-maps
---
**Default value:** (Auto)

Auto-Fetch is an advanced feature to automatically fetch remote child maps based on matched areas. When enabled, Synoptic Panel automatically fetches child maps from a remote map and makes them available for drill-down navigation.

Available options:
- **(Auto)**: The visual honors the Auto-Fetch attribute (`data-okviz-drill-url`) in the SVG; if the attribute is not present, Auto-Fetch is disabled.
- **Enabled**: Auto-Fetch is enabled and every matched area id is used to build a potential child map URL and it is fetched.
- **Disabled**: Auto-Fetch is disabled.

For more information on Auto-Fetch, see the [Auto-Fetch](../../features/auto-fetch.md) documentation.