---
layout:             page
title:              Microsoft Certification
menu_title:         Certification
published:          true
date:               2021-11-17
modified:           2025-10-06
order:              /035
---

Custom visuals, like any other software, can contain malware code and steal data.
To make Power BI users more secure, Microsoft set up a certification program for visuals developed by third-party vendors, such as OKVIZ.  

<figure>
    <img src="images/certified.svg" width="190" class="nozoom">
    <figcaption>Microsoft Certified badge</figcaption>
</figure>

The certification guarantees that the visual meets certain requirements like:

- Not calling **external services** except Power BI core services
- Not storing underlying data anywhere
- Not using **insecure code** and adhering to some coding standards
- Using the latest SDK API available
- Be published on the Microsoft AppSource marketplace

> You can review all the criteria in this article:
[Get your Power BI visual certified](https://learn.microsoft.com/en-us/power-bi/developer/visuals/power-bi-custom-visuals-certified#certification-requirements)

The certification is optional; vendors do not need to apply it to their visuals for publication in AppSource.

>> **Uncertified Power BI visuals are NOT automatically unsafe.** They may not have been certified for various reasons, such as using proprietary licensing systems or allowing users to use remote resources.

## Pros and Cons

Not all OKVIZ visuals are certified—or do we offer both certified and uncertified versions ([see below](#okviz-certified-visuals)). This is because the certification process imposes certain limitations that can restrict your control over the visuals.

Here are the main pros and cons of certified visuals compared to uncertified ones:

### Certified Visuals

- **✅ Microsoft-Guaranteed Security**  
  - Certified visuals code is reviewed by Microsoft to ensure it is free from malicious elements and vulnerabilities.

- **✅ Exporting Support**  
  - Certified visuals can be included in email subscriptions and exported to PDF/PowerPoint.

- **✅ Sandbox Environment**
  - Certified visuals cannot call external services, ensuring that your data is not sent anywhere.

- **❌ Sandbox Environment**
  - This limitation can prevent the legitimate use of some features, like accessing remote resources essential for the visual's functionality.

- **✅ Automatic Updates**  
  - Updates are automatically applied to all users, ensuring that everyone is using the latest version.

- **❌ Automatic Updates**  
  - There is only one global version of a certified visual for all Power BI users, which cannot be frozen or managed individually.
  - The updates are applied automatically, which can lead to unexpected changes in visuals behavior or report design without prior notice.

- **❌ Update Latency**  
  - The certification and deployment **process takes up to 4 weeks**, and it must be repeated on every visual update, so fixes can take a long time to be available to users.
  - Version rollbacks (which are useful in case of regressions) are not immediate: they require 1 week to take effect.

- **❌ Platform Support for Paid Visuals**  
  - Certified visuals that requires a paid license can only use the [AppSource licensing model](./licensing/index.md), which does not support Power BI Report Server, Power BI Embedded, SharePoint, Publish to Web, and National Clouds.

### Uncertified Visuals

- **Vendor Trust**  
  - You must rely on the custom visuals vendor's commitment to security and reliability. [See our audit process](#audit-process) for uncertified visuals.

- **❌ Exporting Support**
  - Uncertified visual do not support email subscriptions or export to PDF/PowerPoint.

- **✅ No Limitations**
  - Uncertified visuals can access remote resources, which can be essential for some features.

- **✅ Faster Updates**
  - Custom visual vendors can roll out updates immediately upon release, bypassing the delay of Microsoft's certification process.

- **✅ Version Control**  
  - Organizations can decide when to update visuals or roll back to a previous version, offering better management of potential issues and regressions.

- **✅ No Platform Limitations**  
  - Uncertified visuals can be used with any Power BI platform, including Power BI Report Server, Power BI Embedded, SharePoint, Publish to Web, and National Clouds.  

> **NOTE:** The above pros and cons consider cases where uncertified visuals are installed from the vendor's website. Since uncertified visuals can also be published on AppSource, some of the cons—particularly those related to the update process—may not apply.

In summary:

- **Certified visuals cannot be controlled.**  
   Automatic updates mean you relinquish the ability to freeze or manage versions as per your business needs.

- **Certified visuals are guaranteed by Microsoft, but licensing from a third-party vendor means you make a deal and trust that vendor to maintain and update the product.**  
   This is a common scenario with software licenses: you trust the vendor to provide a secure and reliable product.

- **Paid Certified visuals don't support all Power BI platforms.**  
   If you need to use Power BI Report Server, Power BI Embedded, SharePoint, Publish to Web, or National Clouds, you may need to consider uncertified visuals.

## OKVIZ Certified Visuals

Here is a list of our visuals that are certified:

- [Bullet Chart](https://appsource.microsoft.com/en-us/product/power-bi-visuals/WA104380953)
- [Calendar Pro](https://appsource.microsoft.com/en-US/product/power-bi-visuals/okvizcorp1634637213047.calendarprobyokviz)
- [Candlestick](https://appsource.microsoft.com/en-us/product/power-bi-visuals/WA104380952)
- [Card with States](https://appsource.microsoft.com/en-us/product/office/WA104380967)
- [Smart Filter (Free)](https://appsource.microsoft.com/en-us/product/power-bi-visuals/WA104380859)
- [Sparkline](https://appsource.microsoft.com/en-us/product/power-bi-visuals/WA104380910)
- [Synoptic Panel Lite](https://appsource.microsoft.com/en-us/product/power-bi-visuals/okvizcorp1634637213047.synopticpanelbyokviz-lite)

## OKVIZ Uncertified Visuals

These visuals, instead, are not certified:

- [Bullet Chart](https://okviz.com/bullet-chart/) (if purchased from OKVIZ)
- [Calendar Pro](https://okviz.com/calendar-pro/) (if purchased from OKVIZ)
- [Smart Filter Pro](https://okviz.com/smart-filter-pro/)
- [Synoptic Panel](https://okviz.com/synoptic-panel/)

## Audit Process

We regularly have our (certified and uncertified) visuals code and infrastructure audited by **Aikido Security**, an external security service. This ongoing process ensures our visuals follow best practices and remain free of malicious code.

<a href="https://app.aikido.dev/audit-report/external/0p1vf4b2uv0xwQIZw0YOJ24l/request" target="_blank">
    <img src="https://app.aikido.dev/assets/badges/label-only-light-theme.svg" alt="Aikido Security Audit Report" height="40" class="naked nozoom" />  
</a>

The auditing includes:

- Static and dynamic code analysis (SAST & DAST)
- Open source dependency scanning (SCA)
- Open source license scanning (SBOM)
- Infrastructure as code scanning (IaC)
- Cloud posture management (CSPM)
- SLA compliance

You can [request our latest Aikido Security report here](https://app.aikido.dev/audit-report/external/0p1vf4b2uv0xwQIZw0YOJ24l/request).
