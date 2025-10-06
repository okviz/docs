---
layout:             page
title:              Security & Privacy
published:          true
date:               2022-07-13
modified:           2025-10-06
order:              /smart-filter-pro/{96}
toc_h_max:            2
---

At OKVIZ we care about the security of your data and strive to use the best technologies to keep you safe. Smart Filter Pro, like any other visuals we made, was developed with this philosophy.

## Certification

The **Microsoft Certification Program** ensures that custom visuals are safe, up-to-date, and reliable, but it has some limitations. Please refer to the [Certification Pros and Cons](../certification.md#pros-and-cons) page for more information.

**Most of OKVIZ visuals are certified, but not Smart Filter Pro.**

How come? Does it mean that Smart Filter Pro is not safe or we want to keep our source code private due to the use of malicious functions? Absolutely no. Smart Filter Pro is not certified for just a couple of reasons:

1. **To provide the powerful Filter and Search modes, we use some functions that belong to an old API SDK** that have not yet been migrated to the latest version. It might sound a bit cumbersome, but the point is, we cannot upgrade to the latest version of the API (which is another certification requirement) without removing these features.

2. **We support Power BI Report Server, Power BI Embedded, SharePoint, Publish to Web, and National Clouds**. These platforms are not supported by paid certified visuals because they require third-party licensing systems that are not compatible with the certification requirements.

## Audit Process

We understand that the lack of certification can raise concerns about the security of your data. For this reason, we submit Smart Filter Pro to a security audit process on every update. This process is performed by a third-party company, **Aikido Security**, that specializes in security audits for software.

<a href="https://app.aikido.dev/audit-report/external/0p1vf4b2uv0xwQIZw0YOJ24l/request" target="_blank">
    <img src="https://app.aikido.dev/assets/badges/label-only-light-theme.svg" alt="Aikido Security Audit Report" height="40" class="naked nozoom" />    
</a>

You can [request our latest Aikido Security report here](https://app.aikido.dev/audit-report/external/0p1vf4b2uv0xwQIZw0YOJ24l/request).


### Code Review

If you still have concerns about the security of your data, at our sole discretion and after signing an NDA document, we can provide temporary read-only access to the source code of the visual. If you are interested, [submit your request here](mailto:backoffice@okviz.com?subject=Smart%20Filter%20Pro%20Code%20Review).


## Data Sent over the Internet

Smart Filter Pro **does not send user/report data over the Internet** to external services.

However, it periodically communicate with external services to check the current status of your license. Note that you cannot block communication with our license servers, otherwise the visual will stop working properly.

If you have a corporate firewall that blocks outbound connections, you need to whitelist this URL:

- **From v2.3.2**: `https://api.okviz.com/`

- **Before v2.3.2**: `https://okvizviews.table.core.windows.net/`
