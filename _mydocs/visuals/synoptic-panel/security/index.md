---
layout:             page
title:              Security & Privacy
published:          true
date:               2024-05-10
modified:           2025-03-08
order:              /synoptic-panel/{96}
---
Synoptic Panel uses the latest technologies available and is updated regularly. It does not contain malicious or unsafe code.

According to the version of the visual you are using, there are some differences in the security and privacy aspects. For more information on the available versions, see [Versions](../versions/index.md).

## Synoptic Panel v2

### Certification

The [Power BI certification program](../../get-started/certification.md) guarantees that custom visuals are safe.

**Most of OKVIZ visuals are certified, but not Synoptic Panel.**

How come? Does it mean that Synoptic Panel is not safe or we want to keep our source code private due to the use of malicious functions? Absolutely no. Synoptic Panel is not certified for just a couple of reasons:

1. **We use a proprietary licensing system** that requires the visual to call an external service, which is prohibited by certification requirements.

2. **We allow users to use remote maps** (either from the Internet, from their private hosting or from our provided storage); unfortunately, this is not allowed by the certification requirements. 

>> Note that Synoptic Panel can also display maps stored locally, but since this option can cause performance issues depending on the size of the maps, [we do not recommend it](../concepts/best-practices.md) for large maps. As a result, we are committed to providing the best possible experience for our users, which is why we have chosen to allow remote maps.

### Data Sent over the Internet

Synoptic Panel **does not send user/report data over the Internet** to external services.

However, it periodically communicate with external services to check the current status of your license. You cannot block communication with our license servers, otherwise the visual will stop working properly.

During this communication, the visual sends and logs the following data:

- **Timestamp**: The date and time when the visual is used.
- **Visual Version**: The version of the visual that is used.

(In case you activated the visual through AppSource)
- **Entra Tenant ID**: The ID of the tenant where the visual is used.
- **Entra User ID**: The ID of the user who is using the visual.

(In case you use the visual we sent you directly)
- **Customer Token**: The customer token (which includes the customer id and the license id) that is generated by our service when you a license is purchased.
- **Anonymous User ID**: A unique identifier that is generated by the visual and sent to our service. This is reset after 29 days.
- **Session ID**: A unique identifier that is generated by the visual and sent to our service. This is used to avoid unnecessary logs and is reset after 1 hour.

### URLs to Whitelist

To ensure that Synoptic Panel works correctly, if you have a corporate firewall that blocks outbound connections, you need to whitelist these URLs:

- `https://api.okviz.com`

According to the region where you activated the license, one of the following URLs is also required:

- `https://us.synopticpanel-api.okviz.com`
- `https://eu.synopticpanel-api.okviz.com`
- `https://au.synopticpanel-api.okviz.com`


### My Storage

Synoptic Panel allows you to store your maps in a private storage called **My Storage**. 

For more information about where and how we handle your data and the security measures we take, see the section [My Storage Security](my-storage.md).


## Synoptic Panel Lite

Synoptic Panel Lite is available from the AppSource marketplace only and it doesn't have access to remote maps or My Storage.

### Certification

Synoptic Panel Lite is [certified by Microsoft](../../get-started/certification.md).


### Data Sent over the Internet

No data is sent over the Internet or collected by OKVIZ.

## Synoptic Panel v1

This version is no longer supported and is not recommended for use since it won't receive any updates or bug fixes. More information is available in the [Deprecated (v1)](../versions/deprecated.md) page.