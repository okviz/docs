---
layout:             page
title:              Learn How to Use OKVIZ Visuals with AI
menu_title:         Learn with AI
description:        Ask an AI assistant how to configure and use OKVIZ visuals with the official documentation.
published:          true
date:               2026-08-25
modified:           2026-08-27
order:              /01/05
toc:                false
---

You do not have to read the documentation from start to finish. Ask an AI assistant what you want to achieve with an OKVIZ visual and let it use this documentation to guide you.

For example, you can ask:

- which fields a visual needs and where to place them;
- where to find a formatting option;
- how to configure a feature or reproduce an example;
- what an error message means and which documented steps may resolve it;
- whether a feature is available in your visual or version.

## Choose an AI Assistant

[BI Buddy](https://bibuddy.ai/) is a practical choice when you are already working in Power BI.  
You can also use familiar assistants such as 
- [ChatGPT](https://chatgpt.com/), 
- [Claude](https://claude.com/product/overview), 
- [Google Gemini](https://gemini.google.com/), 
- [Microsoft Copilot](https://copilot.microsoft.com/) or
- [Perplexity](https://www.perplexity.ai/).

The assistant must be able to open web pages or accept documentation as a source. If it cannot open an OKVIZ page, paste the relevant text into the conversation together with the page URL.

## Ask Your Question

Tell the assistant:

- which OKVIZ visual you are using;
- what you want the visual to do;
- when relevant, its version;
- the URL of documentation.

Then ask it to use official OKVIZ documentation, link the pages it used, and say clearly when the documentation does not contain the answer.

For example:

```text
I am using [visual name] from OKVIZ.
I want to [describe the result you want].

Use the official OKVIZ documentation starting from {{ site.url }}.
Explain the required fields, formatting sections, and option names step by
step. Link every page you use. If the documentation does not answer something,
say so instead of guessing.
```

You can continue the conversation with questions such as:

- "Which page documents that option?"
- "What should I check if the result is different?"
- "Give me a short checklist to reproduce these settings."

Tools that accept a website index can start from the [OKVIZ documentation index for AI](/llms.txt).

>> **IMPORTANT:** Follow your organization's AI policy. Do not share confidential report data, credentials, license keys, customer information, or proprietary model details with an AI assistant unless explicitly allowed.
