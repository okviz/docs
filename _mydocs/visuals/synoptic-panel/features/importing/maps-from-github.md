---
layout:             page
title:              Load Maps from GitHub
menu_title:         Maps from GitHub
published:          true
date:               2025-03-23
modified:           2025-03-23
order:              /synoptic-panel/features/importing/02
---

Synoptic Panel allows you to load custom maps hosted on the web, but with an important requirement: the hosting service must allow cross-origin requests (CORS). This requirement is a stopper for most cloud services, but [GitHub](https://github.com) is an exception as it supports CORS by default.

Also, GitHub provides a **free hosting service for static files up to 1GB**, which makes it a perfect choice for hosting your maps.

>> **ATTENTION:** Private GitHub repositories are not supported by Synoptic Panel, so your maps can only be hosted in a public repository, accessible to everyone.

Here is a step-by-step guide to hosting your maps on GitHub and using them in Synoptic Panel:

1. If you don't have already one, [create an account on GitHub](https://github.com/signup), and then [create a new **public** repository](https://github.com/new).

    <img src="images/github-new-repo.png" width="600">

2. Go to the repository page and click on the ***uploading an existing file*** link.

    <img src="images/github-start.png" width="600">

3. Drag and drop your SVG map files to the upload area or click on the ***choose your files*** link, then click on the ***Commit changes*** button.

    <img src="images/github-upload.png" width="600">

4. After uploading your files, click on the SVG file to open it, and then click on the ***Raw*** button to get the URL of the file.

    <img src="images/github-raw.png" width="600">

5. Add the URL to your column bound to the ***Map URL*** field in Synoptic Panel or add the map URL directly in the Synoptic Panel interface (see [Importing Remote Maps](../importing/index.md#remote-maps) for more info).

That's it! Now you can use your maps hosted on GitHub in Synoptic Panel.
