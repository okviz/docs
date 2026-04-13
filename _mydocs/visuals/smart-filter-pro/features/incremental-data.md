---
layout:             page
title:              Incremental Data
published:          true
date:               2022-07-16
modified:           2024-05-27
order:              /smart-filter-pro/features/incremental-data
---

Power BI custom visuals are limited in several ways compared to core visuals. One of these limitations affects the amount of data that visuals can receive from the underlying dataset. Custom visuals can retrieve max 30,000 rows by default, but with an incremental load technique, up to 1,000,000 rows can be downloaded.  
Smart Filter Pro implements incremental loading with ***Dropdown, Observer, and Hierarchy modes***.

> Incremental loading can affect report performance when there are too many rows to fetch. **With fields larger than 30,000 rows it is recommended to switch to Filter mode**.

For ***Filter and Search modes***, however, there is not need to implement the above technique, as they don't load data at all but run  queries on demand, bypassing any row limits set by Power BI.

For more information:

- [Incremental Loading in Dropdown Mode](../features/dropdown.md#incremental-loading)
- [No Data Limits in Filter Mode](../features/filter.md#no-data-limits)