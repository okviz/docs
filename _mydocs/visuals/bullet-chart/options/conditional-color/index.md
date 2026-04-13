---
layout:         page
title:          Conditional Colors
published:      true
date:           2022-07-07
modified:   	2026-04-13
order:          /bullet-chart/options/conditional-colors
internal:       targets, advancedRules, comparison, fill, stopAfterMatch, tolerance
---

This section contains options to assign colors to the main value bars according to the related target values.

## Use Advanced Rules

**Default value:** Off

When enabled, the basic rule editor in this section is hidden and the visual uses the advanced color rules available from the [Advanced Editor](../advanced-editor/index.md).

Advanced rules can also use measures connected to the [Color Rules](../../fields/color-rules.md) field.

## Basic Conditional Rules

When **Use Advanced Rules** is set to **Off** and the visual contains at least one measure in both the **Value** and **Targets** fields, Bullet Chart shows one or more basic rules, one for each target measure.

Each rule allows you to:

- choose the comparison in **If Value is [condition] {field}**
- assign the color to apply when the condition is matched
- decide whether to **Stop after first match**
- define a **Tolerance (+/-)** value

## Stop After First Match

**Default value:** Off

When enabled, Bullet Chart stops evaluating the remaining rules as soon as one rule matches.

This option is visible only when there is a single measure in **Value**, or when [Share Targets](../targets/share.md) is enabled.

## Tolerance (+/-)

**Default value:** 0

This option expands the comparison by a percentage of the target value. It is useful when values that are close to the target should be treated as equivalent within a small range.
