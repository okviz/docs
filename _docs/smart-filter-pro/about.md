---
layout: page
title:  "About & License"
published: true
draft: false
date:               2021-11-15
last_modified_at:   2021-11-21
order: 10
---
This properties group displays the name and version of the visual, licensing details, and options related to deployment and updates.

<img src="images/about/image1.png" width="200">

Licensing details in this section include the below fields:

-	**Licensee name**: Registered user name
-	**License key**: Alphanumeric key that gives access to the licensed version of visual
-	**License status** - Active/Expired, and 
-	**Expiration date**
 
<img src="images/about/image2.png" width="200">

The license for Smart Filter Pro follows a subscription-based model. There are different plans available depending on the type of Power BI license used. 

The licensing of Smart Filter Pro is different when downloaded from the AppSource marketplace and when downloaded from our website. When downloaded from the AppSource marketplace, the user needs to explicitly write the license key every time they add a visual to a report. 

More information about licensing can be found here: [Licensing](../general/licensing)

## Send Telemetry

The "Send telemetry" setting, if enabled, sends anonymous data to OKVIZ about the features used in the component. The telemetry data is used to precisely understand which features of Smart Filter Pro are being used - offering better visibility into performance without the need to solicit feedback directly from users. It only sends out anonymous data about the features used and does not send out any personal data from the reports and/or the underlying datasets. However, you may even choose to disable the Telemetry setting in the visual. This setting does not work when you do not have a working Internet connection.

<img src="images/about/image3.png" width="200">

This is the type of data sent to OKVIZ telemetry systems:
- **License status** (Licensed vs Unlicensed);
- **Number of rows** loaded by the visual;
- **Report mode** (Editing vs Viewing mode);
- **Visual mode** (Dropdown, Observer, Filter, Serch, or Hierarchy mode);
- **Check for updates** status.

OKVIZ collects this data through Google Analytics and a proprietary system hosted on Microsoft Azure servers.

More information on the data we send over the Internet can be found here: [Security & Privacy](../general/security)

## Check for Updates

Power BI frequently receives updates and thus, custom visuals must interact with this evolving platform synchronously. Updates might be required not only when a user might be interested in new features, but also to guarantee existing features. Bug fixes and updates required to support new versions of Power BI are the two main reasons why keeping the custom visuals up-to-date is important.

We recommend you read [Updating OKVIZ Custom Visuals](../general/updating) for more information.


Smart Filter Pro sends out notifications about new versions if the **Check for Updates** setting is enabled. It checks if there is a new version of the visual and displays a message in the Editing view of report. In any case, a notification email about a new version available is sent to the user who registers Smart Filter Pro, including a link for the direct download. Just like [Send telemetry](#send-telemetry) setting, this setting will also not work in case you do not have a working Internet connection.
 
<img src="images/about/check-for-updates.png" width="400">

The **Check for updates** setting is beneficial for users who manually download and update the licensed custom visual. While for the users who installed Smart Filter Pro from the Microsoft store, the updates are automatic. The frequency for release of update is no more than 1 per month. 