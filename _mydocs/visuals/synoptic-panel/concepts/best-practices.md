---
layout:             page
title:              Best Practices
published:          true
date:               2024-10-02
modified:           2026-01-09
order:              /synoptic-panel/concepts/best-practices
next_reading:       true
---

By adhering to these best practices, you will improve both the functionality and performance of your maps within Synoptic Panel, leading to a better user experience and easier data management.

## SVG Maps

To ensure your [SVG maps](./../concepts/maps/svg-format.md) work seamlessly with Synoptic Panel and maintain optimal performance, follow these best practices:

1. Bitmap Images

    - **Avoid Bitmaps**: Preferably, do not include bitmap images in your SVG. If necessary, optimize bitmap images to reduce file size: use external compression tools to minimize their size or [reduce the image quality](../options/advanced-options/performance.md#image-quality) in the visual options before importing the SVG.

2. Map Complexity

    - **Reduce the Elements**: Large and complex SVGs, especially those containing thousands of elements, can negatively affect rendering speed and performance in Synoptic Panel.

    - **Simplify Shapes**: To reduce complexity, simplify paths and remove unnecessary elements like extra nodes or detailed gradients.

    - **Split Complex Maps**: If your SVG is too complex or has a large file size due to an excessive number of elements, consider splitting the image into two or more separate maps. When splitting the map, organize your dataset accordingly.

3. Grouping and Overlapping Areas

    - **Minimize Nested Levels**: If your SVG contains elements nested across multiple levels, aim to reduce the number of levels as much as possible. Simplifying the structure helps improve performance and reduces potential issues with data binding and interaction.

    - **Avoid Overlapping Areas**: Overlapping elements should be avoided, since may hinder user interaction, making it difficult to select and work with specific areas.

4. Areas Ids

    - **Use Valid Ids**: Always assign a [valid id](./../concepts/maps/svg-format.md#id-attribute) to each area in your SVG map before importing it. This is crucial for proper data binding and interaction in Synoptic Panel.

    - **Avoid Duplicate Ids**: Ensure that each `id` is unique within the SVG file to prevent conflicts and unexpected behavior. If you have multiple elements that should be linked to the same data point, see how to [bind multiple areas to the same data point](./../concepts/data-binding.md#linking-multiple-areas-to-the-same-data-point)

    - **Maintain Consistent Ids**: When updating or replacing an SVG map, ensure that the `id` attributes of existing areas remain consistent to preserve the data binding. Note that the [Auto Id Assignment](../concepts/auto-id-assignment.md) process could affect both the uniqueness and consistency of IDs, potentially resulting in unexpected behavior if the map is replaced or modified.

## Performance & Limits

Structuring the data effectively, you can ensure smoother performance and a more efficient use of Synoptic Panel's capabilities.

- **Rows Limits**

    Synoptic Panel supports incremental loading to handle large datasets, but **keep in mind that retrieving more than 30,000 rows may slow down the entire report**. To ensure optimal performance, it is advisable to filter and reduce the number of rows as much as possible.

- **Power BI Limits**

    It is important to note that retrieving all available data is not guaranteed due to certain Power BI limitations:

    - The **total row count is capped at 1M rows**.
    - The **memory size for customs visuals is restricted to 100 MB** (this includes the size of the data connected to the visual and the memory used by the visual itself).

- **Data Labels Limits**

    Synoptic Panel allows you to define the [Max Label To Show](./../options/advanced-options/performance.md#max-labels-to-show) on the map. The default limit is 1,000 labels, because displaying too many labels may negatively impact rendering performance, so it is recommended to stay within this limit or test progressively by increasing the limit while monitoring the visual's responsiveness. Alternatively, you can use the [Label Designer](./../features/label-designer.md) tool to selectively display the most important labels and hide the less critical ones.

- **Maps Limits**

    When managing your maps, it's important to consider how they affect report performance. Local maps are embedded within the Power BI report file, consuming memory and potentially slowing down the report if too many are added or if their sizes are too large. In contrast, remote maps are loaded into memory dynamically, but this memory is still subject to Power BI's limitations.

    For these reasons, the following limitations apply:

    - Local maps:

        - The **maximum size of a map is 10 MB**.
        - The **maximum total size of all local maps is 20 MB**.

    - Remote maps:

        - There isn't a specific limit for remote maps because it's hard to check, but it's recommended to keep the total size of all maps as low as possible to avoid performance issues.

    - My Storage maps:

        - The **maximum size of a map is 20 MB**.

    In short, **we recommend using remote or My Storage maps** because they are more efficient and do not increase the report file size.
