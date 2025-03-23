---
layout:             page
title:              My Storage
published:          true
date:               2024-05-10
modified:           2025-03-23
order:              /synoptic-panel/features/my-storage
next_reading:       true
---

My Storage is an exclusive feature of Synoptic Panel that provides an online storage space to upload, store, and manage SVG maps for use within Synoptic Panel. 

>> This feature is **not available** with:
- Synoptic Panel with an AppSource license
- Synoptic Panel Lite

My Storage offers several benefits:

- **Centralized Storage**: All maps are stored in a single location, accessible to all users within your organization. Each Synoptic Panel license **includes 100 MB of storage** space for maps.
- **Report Performance**: Maps are stored externally, reducing the size of your report and improving performance.
- **Map Management**: Maps can be renamed, replaced, protected, and deleted directly from the visual interface.
- **Security**: Maps can be browsed only with a specific Edit Key, ensuring only authorized users can manage them. Also, maps can be protected with a password, ensuring only authorized users can edit or delete them.
- **Encryption**: Maps can be encrypted for additional security, ensuring they are stored in an encrypted format on the server.

For more information on the security measures in place, please read [My Storage Security](./../security/my-storage.md).

> To use My Storage, you must agree to the [Terms of Service](./../legal/my-storage-tos.md).

## Displaying My Storage Maps

To display a map stored in My Storage in Synoptic Panel, you must first:
- [Setup your storage space](#setup-my-storage).
- [Choose or upload a map to My Storage](#browsing-my-storage).
- Connect the map to the visual.

After a map has been connected to the visual, it is available to all users of the report wihout any additional authentication. However, to setup, manage and browse the maps stored in your storage, you need an additional key, the [Edit Key](#edit-key).

## Setup My Storage

The first time you access My Storage, you will be prompted to set up your storage space. This process involves defining a unique name for your storage and, optionally, an encryption key to secure your maps.

<img src="images/setup-my-storage.png" width="600">

### Encryption (Optional)

My Storage offers an optional encryption feature to enhance the security of your maps. When enabled, all maps uploaded to My Storage are encrypted using a single encryption key. 

Note that:

- The encryption can be only set during the initial setup of My Storage. If you choose not to enable encryption at this stage, you cannot enable it later automatically unless you contact support.
- The encryption key is not stored on the server, so it must be provided each time you access the maps in the visual, but you can save it in the [Encryption Key property](../options/my-storage/keys.md#encryption-key) for convenience.
- If you lose the encryption key, **you will not be able to decrypt the maps and we are not able to recover it**. Make sure to store it securely within your organization.


## Browsing My Storage

To access and browse My Storage, click the ***+ Add Map*** button and select the ***My Storage Map*** element, as specified in the [Importing My Storage Maps](../features/importing/index.md#my-storage-maps) section.

>> This operation is available only to users with the **Edit Key**, a key provided when you purchase a Synoptic Panel license and that can be retrieved from your account dashboard on [okviz.com](https://okviz.com/account/).

### Edit Key

When accessing My Storage, you will be prompted to enter the Edit Key. You can choose one of the following options for convenience:

<img src="./images/add-edit-key.png" width="350">

1. **Remember key for 29 days**:
Temporarily saves the Edit Key in your browser’s local storage, allowing you to reuse it for future sessions for 29 days. This option is useful if you frequently access My Storage from the same device and browser.

2. **Make key available for all users of this report**:
Stores the Edit Key directly in the report. This ensures it is available whenever the report is opened, but it is tied to that specific report.

If you choose not to save the Edit Key, you will need to re-enter it each time you access My Storage. If you selected one of the save options, you can change it at any time by toggling the [Save Edit Key](./../options/my-storage/keys.md#save-edit-key) setting in the visual properties, removing the saved key from the report and/or local storage.

### My Storage Browser

My Storage browser interface is divided into tree main sections:

<video src="./images/my-storage-layout.mp4" autoplay loop muted></video>


- **Map List** (Left Pane):

    This section displays the list of all maps stored. You can browse through the list and select one or more maps to be associated with the current [Drill Path](./drill-mode.md#the-drill-path). Each map can be previewed, renamed, replaced, protected or deleted directly from the list. 

    <img src="./images/my-storage-map-menu.png" width="400">

- **Map Preview** (Right Pane):

    The right panel shows a preview of the map selected from the list, allowing you to verify its content before adding it to the visual. The map is displayed in the center of the pane while in the corners you can find some useful information.

    <img src="./images/my-storage-map-preview.png" width="600">

    - ***Map Title***(1): the name of the map currently in preview.
    - ***Map Id***(2): unique ID in the storage system.
    - ***Map Author***(3) - if available: the author of the map.
    - ***Protected Marker***(4): indicates if the map is protected with a password.
    - ***Last Modified Date***(5): the date and time the map was last updated.
    - ***File Size***(6): the size of the map file on the server.
    - ***Refresh Icon***(7): allows you to reload the map to ensure it is up to date.

- **Header**:

    In the header you will find the current ***Region*** and ***Storage Available Quota***. The region indicates the location where your storage is hosted (which is defined when purchasing the license), while the quota shows the remaining space available in your storage out of the total space.

### Upload Maps

Uploading maps means selecting one or more local files from your machine and saving it to My Storage. Once a map is uploaded, it becomes available to all users of My Storage within your organization. However, uploading a map does not automatically connect it to the visual.

Upload maps as follows:

1.  If My Storage is empty(i.e., no maps have been uploaded yet), click the ***Upload*** button in the center of the screen, otherwise, the button is located at the bottom of the ***Map List*** pane.

    <img src="./images/my-storage-upload-btn-empty.png" width="300">

2.	Select the local files you want to upload from your machine.

#### Upload Limitations

- **File Size Limit**: Each file must not exceed 10 MB.
- **Total Upload Limit**: A maximum of 20 MB can be uploaded in a single operation.
- **Image Optimization**: Embedded bitmap images in SVG maps will be compressed based on the [Image Quality](./../options/advanced-options/performance.md#image-quality) setting.

### Connecting Maps to the Visual

To connect a map to the current [Drill Path](./drill-mode.md#the-drill-path) within the visual:

1.  **Upload the Map**: the map must first be [uploaded to My Storage](#upload-maps).

2.	**Select the Map**: use the checkbox next to the map name in the list to select the map you want to connect.
    - Multiple maps can be selected by checking multiple checkboxes.
    - To select all maps in the list, use the ***Select All*** element at the top of the list.

3.	**Add the Selected Maps**: click the ***Add Selected*** button to connect the selected maps to the current [Drill Path](./drill-mode.md#the-drill-path) in the visual.

Maps that are already connected to the current Drill Path will appear grayed out and cannot be selected again.

<video src="./images/my-storage-connect-maps.mp4" style="clip-path:inset(0 0 2px 0)" autoplay loop muted></video>

### Map Protection

Each map in My Storage can be protected with a password. This feature ensures that unauthorized users cannot edit or delete the map without the correct password.

You can protect a map as follows:

1.	Open the My Storage window and select the map you wish to protect.
2.	Click the ***Protect*** option from the map’s contextual menu (accessible via the three-dot menu).
3.	Enter and confirm the desired password.

It is possible to update or remove the password at any time. To do so, just select ***Unprotect*** or ***Change Password*** from the map’s contextual menu and confirm the action, providing the current password.

<video src="./images/my-storage-add-protection.mp4" autoplay loop muted></video>  

> **NOTE:**
- Users must provide the password to edit or delete the map; without the password, attempts to edit, replace or delete the map will be blocked.
- Password protection does not restrict the ability to view or use the map in read-only mode.
- Users can open the map in the Map Editor even without the password. However, they cannot save changes directly to the original My Storage map.
- Users can save a local copy of a protected map and eventually upload it to My Storage as a new map.