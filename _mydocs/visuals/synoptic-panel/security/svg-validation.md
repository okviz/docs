---
layout:             page
title:              SVG Validation and Sanitization
menu_title:         SVG Validation
published:          true
date:               2026-11-19
modified:           2026-11-19
order:              /synoptic-panel/security/2
---

Synoptic Panel v2 checks and sanitizes SVG maps when you import them from a
file, load them from a URL, or upload an SVG file to My Storage from the visual.
Synoptic Panel Lite applies these checks to local maps.

## Validation

Synoptic Panel reads the map as XML and checks that the document has an SVG
root element. If it cannot read the SVG, it reports an
[Invalid SVG error](../issues.md#invalid-svg). When importing a local file, the
visual also checks its file type and
[size](../concepts/best-practices.md#performance--limits).

## Sanitization

Before displaying an imported map, Synoptic Panel removes scripts, event
handlers, JavaScript links, and embedded HTML. The remaining SVG can still
be used as a map. See
[Unsupported Elements and Attributes](../concepts/maps/svg-format.md#unsupported-elements-and-attributes)
for examples.

## External Resources in Synoptic Panel Lite

Synoptic Panel Lite also removes references to external resources, such as
linked images, stylesheets, and fonts. To include an image in a Lite map,
embed it in the SVG before importing the file. See
[Creating SVG Maps](../concepts/maps/creating-svg.md) for export guidance.
