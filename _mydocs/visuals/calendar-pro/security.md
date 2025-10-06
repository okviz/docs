---
layout:             page
title:              Security & Privacy
published:          true
date:               2022-07-17
modified:           2025-10-06
order:              /calendar-pro/{96}
---
Calendar Pro uses the latest technologies available and is updated regularly. It does not contain malicious or unsafe code.

According to the version of the visual you are using, there are some differences in the security and privacy aspects.

> **IMPORTANT**: The code base of all versions is the same. The only difference is the distribution channel and the limitations imposed by the Microsoft Certification Program.

## AppSource Version

This version is available on the AppSource marketplace.

### Certification

The **Microsoft Certification Program** ensures that custom visuals are safe, up-to-date, and reliable, but it has some limitations. Please refer to the [Certification Pros and Cons](../certification.md#pros-and-cons) page for more information.

**Calendar Pro (from AppSource) is certified by Microsoft.**

<img src="../images/certified.svg" width="190" class="nozoom">


### Data Sent over the Internet

No data is sent over the Internet to external services. The only network communication is between the Power BI core services and the visual, which is required to make it work properly.

## OKVIZ Version

This version is available directly from our OKVIZ website.

### Certification

Calendar Pro (from OKVIZ) is not certified by Microsoft. This is because it **supports Power BI Report Server, Power BI Embedded, SharePoint, Publish to Web, and National Clouds.** These platforms are not supported by paid certified visuals because they require third-party licensing systems that are not compatible with the certification requirements.

### Audit Process

We understand that the lack of certification can raise concerns about the security of your data. For this reason, we submit Calendar Pro to a security audit process on every update. This process is performed by a third-party company, **Aikido Security**, that specializes in security audits for software.

<a href="https://app.aikido.dev/audit-report/external/0p1vf4b2uv0xwQIZw0YOJ24l/request" target="_blank">
    <img src="https://app.aikido.dev/assets/badges/label-only-light-theme.svg" alt="Aikido Security Audit Report" height="40" class="naked nozoom" />    
</a>

You can [request our latest Aikido Security report here](https://app.aikido.dev/audit-report/external/0p1vf4b2uv0xwQIZw0YOJ24l/request).


### Data Sent over the Internet

Calendar Pro **does not send user/report data over the Internet** to external services.

However, it periodically communicate with external services to check the current status of your license. You cannot block communication with our license servers, otherwise the visual will stop working properly.

During this communication, the visual sends and logs the following data:

- **Timestamp**: The date and time when the visual is used.
- **Visual Version**: The version of the visual that is used.

#### URLs to Whitelist

To ensure that Calendar Pro (from OKVIZ) works correctly, if you have a corporate firewall that blocks outbound connections, you need to whitelist these URLs:

- `https://api.okviz.com`