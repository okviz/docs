---
layout:             page
title:              Common Issues
published:          true
date:               2021-12-17
modified:           2022-07-14
toc:                false
order:              /03/02
---
Here are some of the most common errors you can run into with Power BI and custom visuals:

- **(Generic error)**

    When you see a generic error without a clear description and just a ***Learn more*** link, it is probably because the size reserved for the visual is too small and the message has simply been cut off. Before reporting this, try enlarging the visual to see if a clearer message appears.

    <video src="images/generic-error.mp4" width="450" autoplay loop muted></video>

- **The visual is no longer available. Please contact your administrator for details.**

    This happens when you share a report containing a custom visual stored in the [Org Store](../get-started/org-store.md) outside your organization. If you plan to share a report file, include any custom visuals directly from a file. See [Installation](../get-started/installation.md) for more information.  

    <img src="images/visual-no-longer-available.png" width="450">

    This error also occurs if you remove a custom visual from the Org Store. This usually happens when you want to update a visual to a new version but **instead of changing the package file, you delete the old entry and create a new one.** In this case, even though the internal ID of the visual is the same, Power BI cannot recognize which visual it was and shows the error. Unfortunately, visuals in this state can only be deleted from your reports - you can't switch them to a different visual type like you normally would. For more information on how to properly update custom visuals, see [Updating Visuals](../get-started/updating.md).

- **Too many "Field" values. Not displaying all data. Filter the data or choose another field.**

    This error occurs when the field bound to the visual contains too many rows or exceeds the capacity of the visual. In fact, custom visuals are capable of getting max 1,000,000 rows with a technique called ***Incremental Loading*** and 30,000 without it. Since not all our visuals use this advanced technique, you may see this message in some cases. 

    <img src="images/too-many-values.png" width="700">

    Refer to the documentation of the visual to see if Incremental Loading is supported.

- **This visual does not support exporting.**

    This error occurs when you try to export a report to PDF/Power Point or the report is embedded in an email and the visual is not certified. [Read more on certification](../certification.md).
    
    <img src="../issues/images/not-support-exporting.png" width="350">

- **We can't display this visual because a measure is used in cross highlighting. Please remove the measure or cross highlight.**

    This usually affect ***Smart Filter Pro***. This error occurs when you enable [Consolidate Fields](../smart-filter-pro/options/mode/consolidate-fields.md) and change the logical operator to ***OR***. Unfortunately, Power BI doesn't support filtering different fields in OR.

- **AADSTS500011: The resource principal named https://api.okviz.com was not found in the tenant named xxx.**

    <img src="images/error-entra-id.png" width="600">

    This error occurs when attempting to activate an OKVIZ license for a visual downloaded from AppSource, but the OKVIZ app has not been approved by your administrator or your organization has disabled third-party access to Entra ID.

    OKVIZ licensing requires access to the Entra ID API to activate the license on your tenant, but only when using the [hybrid licensing model](../licensing/index.md#a-third-option-hybrid-licensing). If this applies, contact your administrator and follow the instructions in the [Grant tenant-wide admin consent to an application](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal) page.

&nbsp;

---
If you encounter an error not listed here, please visit the [Power BI Tile Errors](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-troubleshooting-tile-errors#error-list) page.
