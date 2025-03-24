---
layout:             page
title:              Hosting Requirements for Maps
menu_title:         Hosting Requirements
published:          true
date:               2025-03-23
modified:           2025-03-23
order:              /synoptic-panel/features/importing/01
---


To use remote maps in Synoptic Panel, you need to host the maps on a hosting with the following requirements:

- Must support the **HTTPS protocol**.
- Must allow **cross-origin requests (CORS) from any origin** - this requirement is a stopper for most cloud services.
- Must be **publicly accessible to the target end-users** - not necessarily to the general public.
- Cannot be password-protected or require authentication, except for the case of [My Storage](../my-storage.md) or when the password is provided in the URL.

## What is CORS

When you use Synoptic Panel, it runs directly in your browser—not on a server. That means everything happens on your computer.

Now, if the visual needs to load a map from an online service, your browser sees that it's trying to get information from a different place (a different website or domain). For security reasons, browsers are very strict about this. They block these requests unless the online service clearly says:
***"Yes, it's okay to access this from outside."***

This security rule is called CORS, short for [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS), and can be setup to allow specific origins to access the service.

In our case, **the visual runs in the browser and has no origin of its own**—it's just your browser trying to reach out. For this particular case, the CORS rule must be set more permissively to allow any origin to access the service, which is not common in most cloud services.

## Popular Hosting Services

Here are some popular cloud services and their availability to setup CORS for Synoptic Panel.

| Service       | Availability  | Help |
|---------------|---------------|------|
| [My Storage](../../features/my-storage.md)    |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅|[How to Connect](./maps-from-my-storage.md)|
| GitHub        |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅|[How to Connect](./maps-from-github.md)|
| Azure Static Web Apps |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅|Setup CORS on `staticwebapp.config.json`|
| AWS S3 + CloudFront |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅|Setup CORS on S3 bucket policy|
| Firebase Hosting |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅|Setup CORS on `firebase.json`|
| OneDrive      |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌||
| SharePoint    |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌||
| Google Drive  |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌||
| Dropbox       |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌||
