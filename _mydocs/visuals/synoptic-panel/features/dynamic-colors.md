---
layout:             page
title:              Dynamic Areas Colors
menu_title:         Dynamic Colors
published:          true
date:               2024-05-10
modified:           2026-05-21
order:              /synoptic-panel/features/dynamic-colors
---
Synoptic Panel allows you to change the color of areas dynamically based on the data. This feature is useful when you want to highlight specific areas based on the data values.

This can be done in two ways:

- **Conditional Formatting**: Use the Power BI conditional formatting to change the color of areas based on the data values.

    <video src="images/conditional-formatting.mp4" width="600" autoplay loop muted></video>

    See more: [Power BI Conditional Formatting](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-conditional-table-formatting)

- **Color Rules**: Use the advanced color rules available in several OKVIZ visuals to change the color of areas based on the data values.

    <video src="images/color-rules.mp4" width="600" autoplay loop muted></video>

    >> This feature is available only when Power BI conditional formatting cannot be used—for example, when the visual must perform client-side data aggregation, such as when either [Map URLs](./filtering-maps/index.md#map-urls-column) or [Legend Field](../fields/legend.md) wells are used.
    
    Learn more: [OKVIZ Color Rules](../../../visuals/features/color-rules.md)

## Per-Level Formatting Rules

When your map has multiple levels of hierarchy, you can set different formatting rules for each level by creating a measure or a visual calculation that identifies the level and apply the proper business logic, returning the desired color as text.

You should use a visual calculation when the logic is specific to the visual and you can rely only on the data available in the visual. You should use a measure when the logic is more general and can be reused across multiple visuals, or when it relies on data that is not available in the visual.

### Example of a Visual Calculation for Per-Level Formatting Rules

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

The `Visual Level Color` visual calculation must be selected in the conditional formatting dialog box selecting the Field Value format style and assigning the `Text` data type to the `Visual Level Color` in the visual. You can see how to correctly set up the conditional formatting in the article and video [Using visual calculations for conditional formatting](https://www.sqlbi.com/articles/using-visual-calculations-for-conditional-formatting/).

### Example of a Measure for Per-Level Formatting Rules

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

The comparisons considers all the rooms, floors, and buildings, regardless of any filters applied to the visual. The level is identified by using the `ISINSCOPE` function, starting from the bottom level of the hierarchy and moving up.
