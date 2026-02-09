---
layout:             page
title:              Power BI Requirements
menu_title:         Requirements
published:          true
date:               2026-02-09
modified:           2026-02-09
order:              /040
---

Custom visuals are software applications that run inside Power BI and rely on the **Power BI Custom Visuals API**.  
Each API version introduces specific capabilities, requirements, and limitations that directly affect the compatibility and behavior of custom visuals. Our visuals are generally built using the latest available version of the Power BI Custom Visuals API. As a result, they require recent versions of Power BI Desktop and Power BI Report Server to function correctly.

Below are the minimum platform requirements for the latest versions of our visuals:

- **Bullet Chart**: 
    - Power BI Desktop **June 2024** or later
    - Power BI Report Server **September 2025** or later

- **Calendar Pro**: 
    - Power BI Desktop **June 2024** or later
    - Power BI Report Server **September 2025** or later

- **Candlestick**: 
    - Power BI Desktop **June 2024** or later
    - Power BI Report Server **September 2025** or later

- **Card with States**: 
    - Power BI Desktop **June 2019** or later
    - Power BI Report Server **May 2019** or later

- **Smart Filter**: 
    - Power BI Desktop **June 2019** or later
    - Power BI Report Server **May 2019** or later

- **Smart Filter Pro**: 
    - Power BI Desktop **June 2018** or later
    - Power BI Report Server **August 2018** or later

- **Sparkline**: 
    - Power BI Desktop **June 2019** or later
    - Power BI Report Server **May 2019** or later

- **Synoptic Panel / Synoptic Panel Lite**: 
    - Power BI Desktop **June 2024** or later
    - Power BI Report Server **September 2025** or later

> **IMPORTANT**: Power BI Service always supports the latest version of the Power BI Custom Visuals API, so there are no specific requirements for using our visuals in the Power BI Service.

## API Version Compatibility

The table below shows the first Power BI Desktop and Power BI Report Server releases that support each Custom Visuals API version. **All subsequent releases continue to support the same API version.**

| Custom Visual API | Power BI Desktop        | Power BI Report Server        |
|-------------------|-------------------------|-------------------------------|
| v5.11.0           | July 2024               | September 2025                |
| v5.10.0           | June 2024               | September 2025                |
| v5.9.0            | March 2024              | —                             |
| v5.8.0            | February 2024           | May 2024                      |
| v5.7.0            | December 2023           | January 2024                  |
| v5.6.0            | October 2023            | —                             |
| v5.5.0            | August 2023             | —                             |
| v5.4.0            | May 2023                | September 2023                |
| v5.3.0            | March 2023              | —                             |
| v5.2.0            | December 2022           | January 2023                  |
| v5.1.0            | October 2022            | —                             |

> **NOTE**: Platform requirements may change over time as our visuals are updated to target newer versions of the Power BI Custom Visuals API. We recommend checking this page regularly to stay informed about the latest compatibility requirements.  
&nbsp;  
This information is based on the following official Microsoft sources:
- [Custom Visuals API Changelog](https://learn.microsoft.com/en-us/power-bi/developer/visuals/changelog)
- [Power BI Report Server Changelog](https://learn.microsoft.com/en-us/power-bi/report-server/changelog)
- [Power BI Desktop Changelog](https://learn.microsoft.com/en-us/power-bi/fundamentals/desktop-change-log)
