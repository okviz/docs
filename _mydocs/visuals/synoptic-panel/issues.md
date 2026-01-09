---
layout:             page
title:              Issues
published:          true
date:               2025-09-05
modified:           2025-09-05
order:              /synoptic-panel/issues
---

This page lists all possible error messages that may appear in Synoptic Panel, along with their meaning, common causes, and possible solutions.
When available, additional documentation links are provided for further guidance.

## Unknown Error

**Error Message**: *Something went wrong. Please try again*.

This error can occur due to various reasons, such as network issues, data source problems, or internal errors in Power BI.

**Try To**: Refresh the report page or restart Power BI. If the problem persists, contact support.

## Invalid File Type

**Error Message**: *The selected file is not valid. You can only upload file types as described in the documentation*.

This error occurs when the uploaded file is not a valid format supported by Synoptic Panel. 

Read more about [Supported Map Format](./concepts/maps/index.md#supported-map-formats).

## Invalid SVG

**Error Message**: *The file contains an invalid SVG structure that cannot be parsed*.

This error indicates that the SVG file you are trying to use could be malformed or not compliant with SVG standards. Read more about [SVG Format](./concepts/maps/svg-format.md).

## Invalid JSVG

**Error Message**: *This file cannot be parsed as a JSVG file*.

This error occurs when the JSVG file is not in the correct format or is corrupted. JSVG files should be a valid JSON representation of an SVG map with the required structure. 

Read more about [JSVG](./concepts/maps/index.md#jsvg).

## Invalid JSON

**Error Message**: *The selected file is not valid. You can only upload JSON files that match the structure described in the documentation*.

This error indicates that the JSON file you are trying to upload does not match the expected structure to import multiple maps in Synoptic Panel.

Read more about [Adding Multiple Maps from a JSON File](./features/importing/index.md#adding-multiple-maps-from-a-json-file).

## Invalid Level

**Error Message**: *Current level is not supported*.

This error occurs when you have multiple levels in your hierarchy and click on the double-arrow down button *"Go the next level in the hierarchy"*. 
This feature is not supported in Synoptic Panel.

Read more about [Drill Mode](./features/drill-mode.md).

## (Blank)

**Error Message**: *Cannot display maps without data points. Try changing the selection or set "Show items with no data*.

This error occurs when you have no data points in your dataset.

**Try To**: Enable the option *"Show items with no data"* on the category column in the *Category* field well or change the selection in the report to include data points.

## No Maps

**Error Message**: *No maps match the selector*.

This error occurs when you filter maps using the [Map Selector](./features/filtering-maps/map-selector.md) and no maps match the selected filter criteria.

**Try To**: Ensure that at least one map matches the selected filter or enable the option [Show Maps without Selector](./options/advanced-options/map-selector.md#show-maps-without-selector).

## Unreachable

**Error Message**: *The server is unreachable or the URL is invalid.*

This error occurs when the selected [Remote Map](./features/importing/index.md#remote-maps) cannot be accessed. This can happen if the URL is incorrect, the server is down, or there are network issues.

**Try To**: Check the URL of the remote map and ensure that it is accessible from your network. If the problem persists, contact support.

## Unauthorized

**Error Message**: *You are not authorized to access this resource*.

This error occurs when you do not have the permission to access the resource or when you try to access a My Storage map that is protected with password without providing the correct one.

Read more on [Protecting Maps](./features/my-storage.md#protecting-maps).

## Not Found

**Error Message**: *Map could not be found*.

This error occurs when the map you are trying to access does not exist or has been deleted. 

**Try To**: Try to refresh the report or check if the map is still available in your My Storage. Open the report in a different browser or in incognito mode to ensure that there are no caching issues.

## Decryption Failed

**Error Message**: *The file could not be decrypted. Please check the encryption key and retry*.

This error occurs when you try to access My Storage maps that are encrypted with a key, and the key provided is incorrect.

**Try To**: Ensure that you have entered the correct [Encryption Key](./options/my-storage/keys.md#encryption-key) in the visual settings.

Read more on [Encryption](./security/my-storage.md#encryption-optional).

## File Size Exceeded

**Error Message**: *The selected file is too large*.

This error occurs when the file you are trying to upload exceeds the maximum allowed size for Synoptic Panel.

**Try To**: Reduce the size of the file by optimizing the SVG or JSVG content, or split the file into smaller parts if possible.

Read more about [Performance & Limits](./concepts/best-practices.md#performance--limits).

## Image Compression Failed

**Error Message**: *Something went wrong while compressing some images in SVG*.

This error occurs when Synoptic Panel tries to compress bitmap image in the SVG file but fails due to an internal error or unsupported image format.

**Try To**: Ensure that the images in the SVG file are in a supported format (e.g., PNG, JPEG) and are not corrupted. If the problem persists, contact support.

## Upload Size Exceeded

**Error Message**: *The total size of the uploaded files exceeds the limit*.

This error occurs when you try to upload multiple files that together exceed the maximum allowed size of 20 MB.

**Try To**: Reduce the size of the files you are trying to upload or upload them in multiple trances. Ensure that the total size of all uploaded files does not exceed the limit.

Read more about [Performance & Limits](./concepts/best-practices.md#performance--limits).

## Local Map Size Exceeded

**Error Message**: *The total size of the local maps exceeds the limit*.

This error occurs when the total size of all local maps exceeds the maximum allowed size of 20 MB. This is due to the fact that local maps are embedded within the Power BI report file, consuming memory and potentially slowing down the report if too many are added or if their sizes are too large.

**Try To**: Reduce the size of the local maps you are trying to upload or remove some of the existing local maps to free up space. Ensure that the total size of all local maps does not exceed the limit.

Read more about [Performance & Limits](./concepts/best-practices.md#performance--limits).

## Network Error

**Error Message**: *A network error occurred. Please check your connection*.

This error occurs when there is a problem with the network connection while trying to load a remote map or access My Storage maps.

**Try To**: Check your internet connection and ensure that you can access the remote map URL or My Storage. If the problem persists, try refreshing the report or restarting Power BI.

## Missing Category

**Error Message**: *TThe map is missing a category. Please select a category to continue*.

This error occurs when you try to use a map without connect a category in the [Category field well](./fields/categories.md).

## Invalid Legend

**Error Message**: *The legend is invalid. Please ensure that the legend is properly configured*.

This error occurs when the column connected to the [Legend field well](./fields/legend.md) is also used as *Category* and is not the first column in the Category field well. 

**Try to**: Reorder the columns in the Category field well or change legend to fix this issues.

## Unable To Aggregate

**Error Message**: *This visual contains data points that cannot be aggregated*.

This error appears only when you drill down using **Expand all down one level** and the option [Ignore Hierarchical Binding](./options/drill-behavior/ignore-hierarchical-binding.md) is enabled.

> This error does not block visual rendering. A warning icon is displayed in the top-right corner of the visual, next to the drill-down buttons. Matched areas with active labels will also display a warning icon "⚠️" to indicate the issue.

In this mode, Synoptic Panel attempts to aggregate data client-side. If the dataset or the connected fields are not structured correctly, the aggregation cannot be performed.

The most common causes are:

- The columns connected to the [Category field well](./fields/categories.md) are placed in an inverted or inconsistent hierarchical order.

- The map contains duplicate IDs across different areas, making it impossible to match data points unambiguously.

**Try to**: make sure the hierarchy in the dataset follows a logical top-down order and that the map does not contain duplicate IDs.

Read more about [Automatic Binding when Hierarchy is Expanded](./concepts/data-binding.md#automatic-binding-when-hierarchy-is-expanded).

## Invalid Edit Key

**Error Message**: *Missing or invalid edit key*.

This error occurs when you try to access to [My Storage](./features/my-storage.md) or edit a My Storage map without providing the correct [Edit Key](./features/my-storage.md#edit-key).

**Try To**: Ensure that you have entered the correct Edit Key.

## Invalid Encryption Key

**Error Message**: *This storage is secured with a different encryption key or you did not provide the correct one*.

This error occurs when you try to access to [My Storage](./features/my-storage.md) without providing the correct [Encryption Key](./options/my-storage/keys.md#encryption-key).

**Try To**: Ensure that you have entered the correct Encryption Key.

## Inactive Storage

**Error Message**: *TThis storage is not active. Please contact our support*.

This error occurs when you try to access to [My Storage](./features/my-storage.md) but you did not activate it yet or it has been deactivated.

**Try To**: Follow the instructions to [Setup My Storage](./features/my-storage.md#setup-my-storage) or contact support.

## Storage Not Found

**Error Message**: *Unable to find the specified storage*.

This error occurs when you try to access to [My Storage](./features/my-storage.md) but it has been deleted or unreachable.

**Try To**: Try to access My Storage in a different browser or in incognito mode to ensure that there are no caching issues. Moreover, ensure that your internet connection is stable and try with a blank new report. If the problem persists, contact support.

## Storage Quota Exceeded

**Error Message**: *The storage quota has been reached. You cannot upload more files, please delete some files to free up space*.

This error occurs when you try to upload new maps to [My Storage](./features/my-storage.md) but you have reached the maximum allowed storage quota of 100 MB.

**Try To**: Delete some existing maps from My Storage to free up space before uploading new ones.

Read more about [My Storage Size Limit](./features/my-storage.md#size-considerations).

## Map Not Found

**Error Message**: *Map not found in the storage. It may have been deleted or moved*.

This error occurs when you try to access a map in [My Storage](./features/my-storage.md) that has been deleted or moved.

**Try To**: Ensure that the map still exists in your My Storage.

## Operation Failed

**Error Message**: *The requested operation failed*.

This error occurs when an operation in [My Storage](./features/my-storage.md) fails due to various reasons, such as network issues, permission problems, or internal errors.

**Try To**: Refresh the report page or restart Power BI. If the problem persists, contact support.

## Etag Mismatch

**Error Message**: *The file has been modified by another user*.

This error occurs when you try to edit or delete a map in [My Storage](./features/my-storage.md) that has been modified by another user since you last accessed it.

You will be prompted to overwrite the changes or save a copy of the map with your changes.
