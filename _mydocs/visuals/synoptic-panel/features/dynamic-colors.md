---
layout:             page
title:              Dynamic Areas Colors
menu_title:         Dynamic Colors
published:          true
date:               2024-05-10
modified:           2026-05-25
order:              /synoptic-panel/features/dynamic-colors
---
Synoptic Panel allows you to change the color of areas dynamically based on the data. This feature is useful when you want to highlight specific areas based on the data values.

Dynamic colors usually require two steps:

1. [Prepare](#prepare-the-formatting-field) (or reuse) the field that identifies the value or color to use for each area.
2. [Assign](#assign-dynamic-colors) that field to the area color by using Power BI conditional formatting or OKVIZ Color Rules.

> **If you already have a measure** or a visual calculation that returns the value used for formatting, you can **skip Step 1 and go directly to [Assign Dynamic Colors](#assign-dynamic-colors)**. 
> 
> [<video src="images/conditional-formatting.mp4" width="220" autoplay loop muted></video> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<video src="images/color-rules.mp4" width="200" autoplay loop muted></video>](#assign-dynamic-colors)

## Prepare the Formatting Field

The field used for dynamic colors can be an existing measure in the model, such as the measure bound to the ***Value*** field well or any other measure available in the dataset.

When the color logic is specific to the map, you can create a dedicated measure or visual calculation. This is useful for more customized business rules, and when the map has multiple hierarchy levels and each level must use different business rules.

The prepared field can return:
- A numeric value for color scale and conditional rules (for both Power BI conditional formatting and OKVIZ color rules).
- A string for the color values (only for  Power BI conditional formatting).

### Simple Dynamic Formatting Rules

Simple formatting rules are useful when the same logic applies to every hierarchy level. The easiest starting point is the percentage of total.

You can use this percentage directly in Power BI conditional formatting as a numeric value, or you can feed it into OKVIZ Color Rules to define thresholds.

#### Example of a Measure: Percentage of Total

The following measure returns the share of total in the current selection by using `ALLSELECTED` in the denominator.

```dax
Area Share of Total % =
DIVIDE (
    [Sales Amount],
    CALCULATE ( [Sales Amount], ALLSELECTED () )
)
```

This measure keeps external filters (for example, slicers).

#### Example of a Visual Calculation: Percentage of Total

The following visual calculation applies the same concept in the visual layer.

```dax
Visual Area Share of Total % =
DIVIDE (
    [Sales Amount],
    COLLAPSEALL ( [Sales Amount], ROWS )
)
```

#### Example of a Visual Calculation: Percentage of Parent

When you need the share of the immediate parent in a hierarchy, use a visual calculation. This calculation navigates one level up in the categories applied to the visual and does not require `IF` or `SWITCH` logic, as shown in the following section for more advanced rules.

```dax
Visual Area Share of Parent % =
DIVIDE (
    [Sales Amount],
    COLLAPSE ( [Sales Amount], ROWS )
)
```

At any level, the denominator is the parent aggregation currently visible in the visual. ***Categories*** field well of the visual corresponds to the `ROWS` keyword used in DAX. In a single-level map, this behaves like a percentage of total.

When you use these values for color formatting, set rules with thresholds on the returned percentage (for example: below 0.10, between 0.10 and 0.30, above 0.30).

### Per-Level Formatting Rules

When your map has multiple levels of hierarchy, you can set different formatting rules for each level by creating a measure or a visual calculation that identifies the current level and applies the proper business logic.

You should use a visual calculation when the logic is specific to the visual and you can rely only on the data available in the visual. You should use a measure when the logic is more general and can be reused across multiple visuals, or when it relies on data that is not available in the visual.

#### Example of a Visual Calculation for Per-Level Formatting Rules

In this example, we have a map with three levels of hierarchy: `Room`, `Floor`, and `Building`. We want to apply different formatting rules for each level. We test the lower level first (`Room`), because `Floor` and `Building` levels are selected too when a `Room` is selected, so we want to make sure that the `Room` rule is applied only to `Rooms`. Then we test `Floor` level, and finally `Building` level.

```dax
Visual Level Color = 
SWITCH (
    TRUE,

    -- Room level: gold if a room is more than 40% of the floor
    ISATLEVEL ( [Room] ),
        VAR RoomValue = [Sales Amount]
        VAR FloorValue = COLLAPSE ( [Sales Amount], [Room] )
        VAR Share = DIVIDE ( RoomValue, FloorValue )
        RETURN
            IF ( Share > 0.40, "Gold", BLANK () ),

    -- Floor level: green if at or above the average floor, red if below
    ISATLEVEL ( [Floor] ),
        VAR FloorValue = [Sales Amount]
        VAR AverageFloor =
            CALCULATE ( 
                AVERAGEX (
                    ROWS,
                    [Sales Amount]
                )
            )
        RETURN
            IF ( FloorValue >= AverageFloor, "LightGreen", "LightPink" ),

    -- Building level: shade by share of grand total
    ISATLEVEL ( [Building] ),
        VAR BuildingValue = [Sales Amount]
        VAR GrandTotal =
            COLLAPSEALL ( [Sales Amount], ROWS )
        VAR Share = DIVIDE ( BuildingValue, GrandTotal )
        RETURN
            SWITCH (
                TRUE,
                Share > 0.40, "SteelBlue", 
                Share > 0.25, "CornflowerBlue", 
                Share > 0.15, "SkyBlue", 
                "LightBlue" 
            )
)
```

The comparisons are made by using only data available in the visual. Data outside of the visual cannot be used in a visual calculation. The code identifies the selected level by using the `ISATLEVEL` function, which checks if a specific column is part of the current selection.

When you assign `Visual Level Color` through Power BI conditional formatting, select the ***Field value*** format style and assign the `Text` data type to `Visual Level Color` in the visual. You can see how to correctly set up the conditional formatting in the article and video [Using visual calculations for conditional formatting](https://www.sqlbi.com/articles/using-visual-calculations-for-conditional-formatting/).

#### Example of a Measure for Per-Level Formatting Rules

The following measure implements the same logic as the visual calculation example, using three levels of hierarchy: `Room`, `Floor`, and `Building`. In this case, the business logic compares all the rooms, floors, and buildings in the model, regardless of the selection made in the visual. The measure relies on data that is not available in the visual, and it cannot be implemented as a visual calculation.

```dax
Level Color = 
SWITCH (
    TRUE,

    -- Room level: gold if a room is more than 40% of the floor
    ISINSCOPE ( 'Area'[Room] ),
        VAR RoomValue = [Sales Amount]
        VAR FloorValue =
            CALCULATE (
                [Sales Amount],
                REMOVEFILTERS ( 'Area' ),
                VALUES ( 'Area'[Floor] )
            )
        VAR Share = DIVIDE ( RoomValue, FloorValue )
        RETURN
            IF ( Share > 0.40, "Gold", BLANK () ),

    -- Floor level: green if at or above the average floor, red if below
    ISINSCOPE ( 'Area'[Floor] ),
        VAR FloorValue = [Sales Amount]
        VAR AverageFloor =
            CALCULATE ( 
                AVERAGEX (
                    VALUES ( 'Area'[Floor] ),
                    [Sales Amount]
                ),
                REMOVEFILTERS ( 'Area' )
            )
        RETURN
            IF ( FloorValue >= AverageFloor, "LightGreen", "LightPink" ),

    -- Building level: shade by share of grand total
    ISINSCOPE ( 'Area'[Building] ),
        VAR BuildingValue = [Sales Amount]
        VAR GrandTotal =
            CALCULATE ( [Sales Amount], REMOVEFILTERS ( 'Area' ) )
        VAR Share = DIVIDE ( BuildingValue, GrandTotal )
        RETURN
            SWITCH (
                TRUE,
                Share > 0.40, "SteelBlue", 
                Share > 0.25, "CornflowerBlue", 
                Share > 0.15, "SkyBlue", 
                "LightBlue" 
            )
)
```

The comparisons consider all the rooms, floors, and buildings, regardless of any filters applied to the visual. The level is identified by using the `ISINSCOPE` function, starting from the bottom level of the hierarchy and moving up.

You can use the same pattern to create a measure that returns a color name, a hexadecimal color value, or another value that will be evaluated by Color Rules.

## Assign Dynamic Colors

After preparing the field or measure that drives the color logic, choose the assignment method supported by your visual configuration.

### Power BI Conditional Formatting

Use Power BI conditional formatting to change the color of areas based on the data values. You can use the measure bound to the ***Value*** field well or any other compatible measure available in your dataset.

When the prepared measure or visual calculation returns the color directly, set the conditional formatting ***Format style*** to ***Field value***.

<video src="images/conditional-formatting.mp4" width="600" autoplay loop muted></video>

See more: [Power BI Conditional Formatting](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-conditional-table-formatting)

### OKVIZ Color Rules

Use OKVIZ Color Rules to change the color of areas when Power BI conditional formatting cannot be used. Add the prepared measure to the ***Color Rules*** field well, then use it in the Color Rules editor to define color scales or conditional rules.

<video src="images/color-rules.mp4" width="600" autoplay loop muted></video>

>> This feature is available only when Power BI conditional formatting cannot be used, for example, when the visual must perform client-side data aggregation, such as when either [Map URLs](./filtering-maps/index.md#map-urls-column) or [Legend Field](../fields/legend.md) wells are used.

Learn more: [OKVIZ Color Rules](../../../visuals/features/color-rules.md)
