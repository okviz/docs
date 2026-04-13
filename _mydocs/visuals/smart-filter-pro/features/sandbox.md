---
layout:             page
title:              Sandbox & Boundaries
published:          true
date:               2022-07-21
modified:           2024-10-04
order:              /smart-filter-pro/features/sandbox-boundaries
available:          Dropdown Mode
---

Smart Filter Pro is a custom visual, and [custom visuals are limited](../../get-started/custom-visuals.md#custom-visuals-limitations). 

One of the main limitations affecting Smart Filter Pro is caused by the fact that custom visuals run in a sandbox: simply put, custom visuals are isolated from other report elements (they can only communicate through dedicated APIs) to ensure that, in case of bugs or malicious code, the underlying dataset is always safe. **This isolation also limits the ability of custom visuals to draw their interface outside the boundaries.**

In practice, when Smart Filter Pro draws its drop-down menu, it cannot do so as core visuals such as the Slicer, which can display it regardless its size, but needs to be large enough to draw it.

**This limitation cannot be overcome with Dropdown mode.**

<video src="images/boundaries.mp4" width="600" autoplay loop muted></video>