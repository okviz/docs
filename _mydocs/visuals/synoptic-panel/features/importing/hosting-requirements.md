---
layout:             page
title:              Hosting Requirements for Remote Maps
menu_title:         Hosting Requirements
published:          true
date:               2025-03-23
modified:           2025-03-23
order:              /synoptic-panel/features/importing/01
---


To use remote maps in Synoptic Panel, you need to host the maps on a hosting with the following requirements:

- Must support the HTTPS protocol.
- Must allow cross-origin requests (CORS) - this requirement is a stopper for most cloud services.
- Must be publicly accessible to the target end-users.
- Cannot be password-protected or require authentication, except for the case of [My Storage](../my-storage.md) or when the password is provided in the URL.

## Cloud Services Availability

Here is a list of some popular cloud services and their availability:

| Cloud Service | Availability  | |
|---------------|---------------|-|
| My Storage    |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅|[Learn more](./maps-from-my-storage.md)|
| Github        |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅|[Learn more](./maps-from-github.md)|
| OneDrive      |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌||
| SharePoint    |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌||
| Google Drive  |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌||
| Dropbox       |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌||
