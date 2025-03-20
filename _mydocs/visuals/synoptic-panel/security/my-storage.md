---
layout:             page
title:              My Storage Security
menu_title:         My Storage
published:          true
date:               2024-09-12
modified:           2025-01-29
order:              /synoptic-panel/security/my-storage
---

My Storage is a feature of the Synoptic Panel designed to provide secure and controlled access to your SVG maps. This document outlines the key security measures and considerations involved in using My Storage.

## Backend Security

Your data is stored on Microsoft Azure servers in the region you select at the time of license activation (e.g., North US, West Europe, East Australia). As a globally recognized cloud platform, Azure provides robust physical and network-level security measures, ensuring a secure foundation for storing your maps and associated metadata.

### Audit Process

Our backend infrastructure is regularly audited by **Aikido Security** to ensure it meets the highest security standards. This audit process includes checks for compliance with industry standards and regulations, such as ISO 27001, HIPAA, and GDPR.

<a href="https://app.aikido.dev/audit-report/external/0p1vf4b2uv0xwQIZw0YOJ24l/request" target="_blank">
    <img src="https://app.aikido.dev/assets/badges/label-only-light-theme.svg" alt="Aikido Security Audit Report" height="40" class="naked nozoom" />    
</a>

You can [request our latest Aikido Security report here](https://app.aikido.dev/audit-report/external/0p1vf4b2uv0xwQIZw0YOJ24l/request).

## Access Controls and URLs

### Private Storage Access
My Storage does not expose a publicly browsable file directory. You cannot list or view all resources without the appropriate credentials. Instead, each map is assigned a unique URL that must be known in advance to request that specific resource.

### Resource URLs and Nonce Protection
To access a particular map, a user or the Synoptic Panel visual needs:

1. **Resource URL:**  
   Each map is hosted at a unique URL, for example:  
   `https://okviz_server_url_on_region/v1/my/ff78a3b6-640a-40e8-942d-e9d7a2d0fc18/map/a4eb6922-c599-4fa8-b5fd-d789867b92f7`
   
   This URL is not guessable and is not based on the map name, but on a GUID-like structure, making it extremely difficult to discover by brute force.

2. **Read Key:**  
   The Synoptic Panel visual stores a read key that is required to retrieve the maps on the user's storage. Without this read key, simply knowing the URL is insufficient.

3. **Nonce (Temporary Code):**  
   When the visual requests the map, it generates a temporary, single-use code (nonce). The server requires this nonce to deliver the requested map. This prevents someone from simply putting the URL into a browser's address bar to view the map, as a valid nonce is needed from within the visual's runtime environment.

## Edit Key for Administration

In addition to the read mechanisms, My Storage provides an **Edit Key** to the license manager. The Edit Key grants administrative capabilities:

- **Listing Maps:** Only those with the Edit Key can list all maps stored in My Storage.
- **Editing/Deleting Maps:** The Edit Key is required to modify or delete existing maps.

This separation of roles and keys allows maps to be shared internally on a read-only basis without exposing administrative capabilities. The Edit Key is only sent to the license manager, who may choose how, or if, it is distributed within the organization.

## Encryption (Optional)

My Storage offers an optional encryption feature for further security:

- **Single Encryption Key:** You choose one encryption key for the entire storage location. Every map you upload while encryption is enabled will be encrypted using this key.
- **Local Encryption and Decryption:**  
  *The encryption key is never stored on our servers*. We only keep a hash to verify that you are using the same key for all future uploads. Decryption happens locally in the Synoptic Panel visual.  
- **Performance Impact:**  
  Decryption can impact performance, so consider whether encryption is necessary for your scenario.
- **Irreversible Choice:**  
  Once encryption is enabled, you cannot turn it off yourself. Contact our support if you need to reconsider this choice.
- **Security of the Key:**  
  Store your encryption key securely within your organization. We cannot recover it if lost, and without it, you cannot decrypt your files. We recommend using secure internal storage practices (like a password manager) to ensure it is not lost.

## Limitations and Considerations

- **Front-End Security Limitations:**  
  The Synoptic Panel visual runs in a web environment. A highly skilled, malicious user may attempt to analyze and modify the visual's source code, potentially retrieving read keys or nonces. While the security measures discussed here provide robust deterrents and safeguards, they cannot offer a 100% hack-proof guarantee.

- **Best Practices:**  
  - Avoid publishing your reports with My Storage maps publicly on the internet if security is a concern.  
  - Keep your edit key and encryption key confidential and share them only with trusted members of your organization.  
  - Regularly review who has access to these keys and consider changing them if a security incident is suspected.

## Conclusion

My Storage's security model relies on a layered approach:

- Protected backend infrastructure on Microsoft Azure.
- Obfuscated, GUID-based resource URLs.
- Access keys and nonce requirements for viewing maps.
- An Edit Key for full administrative control.
- Optional encryption for data-at-rest security.

Combined, these measures aim to provide a secure environment that, while not impervious to all advanced threats, is well-suited for typical business use cases and internal organizational sharing.
