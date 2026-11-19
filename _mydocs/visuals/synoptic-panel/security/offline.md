---
layout:             page
title:              Offline and Restricted Environments
menu_title:         Offline Use
published:          true
date:               2026-11-16
modified:           2026-11-19
order:              /synoptic-panel/security/1
toc_h_max:         2
---

When you are in an offline or restricted environment with no Internet access, only Synoptic Panel with a license purchased directly from OKVIZ will work. This applies to Power BI Desktop used offline, Power BI Report Server on an isolated network, and cloud environments that block outbound Internet connections such as the [government clouds](../../licensing/index.md#government-clouds-gcc-and-gcc-high).

## Supported Versions Without Internet Access

| Version | Licensing | Power BI Desktop | Power BI Report Server | GCC, GCC High, and National Clouds |
| --- | --- | --- | --- | --- |
| Synoptic Panel | OKVIZ | ✅ Supported | ✅ Supported | ✅ Supported |
| Synoptic Panel | AppSource | ❌ Unsupported | ❌ Unsupported | ❌ Unsupported |
| Synoptic Panel | [Hybrid](../../licensing/index.md#a-third-option-hybrid-licensing) | ❌ Unsupported | ❌ Unsupported | ❌ Unsupported |
| Synoptic Panel Lite | AppSource | ❌ Unsupported | ❌ Unsupported | ❌ Unsupported |

## Licensing and Renewal

When you buy Synoptic Panel [directly from OKVIZ](../../licensing/index.md#okviz-licensing), you receive a package that must be installed on your Organizational Visuals (Org Store) or manually imported in your reports. That package already contains your license. The visual still attempts to contact OKVIZ to validate it, but if the licensing server is unreachable, it continues to work until the embedded license expires.

To continue using the visual offline after that date, renew your license and update the visual in your reports.

### Replace the Visual After Renewal

After renewal, download the updated visual from your
[OKVIZ account](https://okviz.com/account). Update it where you installed it.

- **Imported from a file.** Open each report for editing and
    [import the updated visual](../../get-started/updating.md#from-a-file).
    Save the report. If you edited a local copy of a published report, publish
    it again to the Power BI service or save it back to Power BI Report Server.

- **Installed from Organizational Visuals (Org Store).** A Power BI admin can
    [update the existing store entry](../../get-started/updating.md#from-organizational-visuals-org-store)
    with the updated visual. Reports that use the entry pick up the update
    when they can reach the store.

## Features Without Internet Access

✅ [Local maps](../features/importing/index.md#local-maps) and report
interactions such as tooltips, cross-filtering, and drill-down to local maps
work with the data available to Power BI.

- ### Remote Maps

    ❌ Synoptic Panel cannot download or refresh
    [remote maps](../features/importing/index.md#remote-maps) hosted on the
    Internet. This includes maps selected through ***Map Selector*** or Drill
    Mode.

    ✅ Maps on a reachable internal host can still load if the host meets the
    [hosting requirements](../features/importing/hosting-requirements.md).

- ### Map URLs

    ❌ The [***Map URLs*** field](../fields/map-urls.md) cannot load maps from
    Internet hosts.

    ✅ A URL on a reachable internal host can still load its map.

- ### My Storage

    ❌ [My Storage](../features/my-storage.md) is unavailable offline. Loading
    or managing maps requires access to the regional OKVIZ service.

- ### Child Maps

    ❌ [Child maps](../features/drill-mode.md#child-maps) on unreachable hosts
    cannot load, even if the parent map is stored in the report.

    ✅ A child map can load from a reachable internal host.

- ### Auto-Fetch

    ❌ [Auto-Fetch](../features/auto-fetch.md) cannot download child maps when
    the parent map's host is unreachable.

    ✅ Auto-Fetch can use a reachable internal host that serves both the
    parent and child maps.

- ### Map Search

    ❌ [Map Search](../features/map-search.md) skips remote maps it cannot
    download when building the search index.

    ✅ Map Search can index maps stored in the report and maps it can download
    from a reachable internal host.

- ### Dynamic Links

    ❌ Pages blocked by the viewer's network cannot load. This applies to
    [Dynamic Links](../features/dynamic-links.md) and other links to URLs.

    ✅ Links to internal pages still work if the browser can reach them.

- ### Check for Updates

    ❌ [***Check for updates***](../options/updates/index.md#check-for-updates)
    requires access to the OKVIZ update server.

## Fully Isolated Version

The standard visual still declares its Power BI privileges when it runs
offline. On request, OKVIZ can provide a fully isolated version that declares
no Power BI privileges and makes no outbound connection attempts. It includes
your OKVIZ license and supports the same environments listed above.

To request the fully isolated version, [contact OKVIZ](mailto:backoffice@okviz.com).
