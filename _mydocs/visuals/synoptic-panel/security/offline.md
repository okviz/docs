---
layout:             page
title:              Offline and Restricted Environments
menu_title:         Offline Use
published:          true
date:               2026-11-16
modified:           2026-11-16
order:              /synoptic-panel/security/offline
---

This page describes how to use Synoptic Panel in environments that restrict or block outbound connections, such as air-gapped networks, Government Clouds, and National Clouds.

## Supported Version and License

Only Synoptic Panel v2 with an [OKVIZ license](../../licensing/index.md#okviz-licensing) can be used in these environments:

- Synoptic Panel Lite and AppSource licenses do not support Government Clouds, National Clouds, or offline use.
- The [Hybrid Licensing](../../licensing/index.md#a-third-option-hybrid-licensing) model does not support Government Clouds, National Clouds, or offline use either.

With an OKVIZ license, Synoptic Panel can be used on any Power BI platform, including Government Clouds (GCC/GCC High) and National Clouds, for both report authors and report viewers. For more information, see [Government Clouds (GCC and GCC High)](../../licensing/index.md#government-clouds-gcc-and-gcc-high).

## Deployment

With an OKVIZ license, you receive a visual package (.pbiviz file) that contains your license information. No per-user assignment is required.

You can import the package directly into your reports, or deploy it centrally through the [Organizational Visuals store](../../get-started/org-store.md). The Organizational Visuals store makes it easier to replace the package when the license is renewed.

## Network Behavior

Synoptic Panel does not send user or report data over the Internet.

The visual periodically tries to contact the OKVIZ licensing servers to check the license status. The data sent during this check is described in [Data Sent over the Internet](index.md#data-sent-over-the-internet).

If these connections are blocked, the visual keeps working until the license expiration date included in the package. Blocking all OKVIZ domains does not affect the visual during this period.

> **NOTE:** The visual still attempts the connections even when they are blocked. Blocked requests may appear in firewall or proxy logs.

## Maps

In an offline environment, import maps as [local maps](../features/importing/index.md#local-maps). Local maps are stored inside the report, so they do not require any external connection.

The following features load maps from external locations and do not work when outbound connections are blocked:

- [Remote maps](../features/importing/index.md#remote-maps)
- [My Storage](../features/my-storage.md) maps
- Maps loaded from the [Map URLs](../fields/map-urls.md) field

Because local maps are stored inside the report, large maps can increase the report size and affect performance. Review the [Best Practices](../concepts/best-practices.md) before importing large or numerous maps.

## License Renewal

The license information in the package is valid until the next payment date of your subscription. To keep using the visual offline after a renewal:

1. Download the updated visual package from the OKVIZ website.
2. Replace the visual in your reports or in the Organizational Visuals store.

How often you need to replace the package depends on the billing period of your subscription: monthly, yearly, or every three years.

>> **IMPORTANT:** If the package is not replaced and the visual cannot reach the licensing servers, the visual can no longer validate the license after the expiration date included in the package.

## Security Reviews

Synoptic Panel is audited by a third-party company on every update. Your security team can request the latest audit report as described in [Audit Process](index.md#audit-process).

For additional documentation requests, [contact our administrative support team](mailto:backoffice@okviz.com).
