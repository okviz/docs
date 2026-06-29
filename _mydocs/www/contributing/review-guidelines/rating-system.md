---
layout:         page
title:          Rating System
published:      true
date:           2024-10-04
modified:       2026-06-29
order:          /website/contributing/review-guidelines/rating-system
---

The OKVIZ rating system for Power BI visuals is designed to ensure consistent and objective evaluations in reviews by assessing key aspects of each visual. The evaluation is based on specific criteria categorized into three main areas: **Features**, **Design**, and **Support**.

The rating is a practical score designed to make Power BI custom visuals easier to compare. It combines public evidence, visual metadata, feature coverage, design quality, support signals, and reviewer input. It is not a popularity score and it is not intended to replace hands-on validation for a specific report scenario.

## Reviewer Role

Reviewers do not create the rating model, define weights, or calculate the final score. OKVIZ provides the rating list for each review assignment, including the criteria that apply to the visual and its classified type or types.

Use the provided rating list to record evidence-based assessments. If a criterion is unclear, not applicable, or appears to be missing from the list, flag it in your notes instead of changing the model yourself. OKVIZ will review the feedback and adjust the rating list or visual classification when needed.

## Rating List

The rating list is the source of truth for the reviewer. It is prepared by OKVIZ from the current rating schema, the visual classification, catalog metadata, public evidence, and known technical signals.

For each item in the rating list:

- Select the option that best matches the evidence you observed.
- Add concise notes when the selected option depends on context, partial evidence, or a visible limitation.
- Use public documentation, AppSource information, vendor websites, sample reports, screenshots, and direct testing when available.
- Do not penalize a visual only because a feature is not relevant to its type; mark it as not applicable when the rating list allows it.
- Do not add unofficial criteria or manually change criterion weights.

For multi-purpose visuals, OKVIZ will provide a rating list that covers all applicable visual types. If the visual supports an additional type that is not reflected in the list, mention it in the review notes so OKVIZ can verify the classification.

## Areas of Evaluation

### Features

Features scoring checks what the visual can do in Power BI and how broadly it supports common report-building needs.

- **Common Features:**

  Common features are capabilities that apply to many visuals, such as tooltips, data point selection, bookmarks, drilldown, formatting support, accessibility options, and Power BI integration behavior.

- **Type-Specific Features:**

  Type-specific features are capabilities that matter for the visual's classified type or types. They determine whether the visual represents data effectively for its intended structure, such as bar charts, line charts, maps, slicers, tables, matrices, or other visual families.

  > **For multi-purpose visuals**, evaluate the visual against all applicable criteria included in the rating list provided by OKVIZ. Do not build a separate checklist manually; flag missing type coverage in your notes.

### Design

Design scoring evaluates whether the visual communicates data clearly and looks production-ready in business reports. It also includes usability, accessibility, and performance considerations.

- **Visual Design:**

    Visual design includes clarity, readability, visual hierarchy, chart-type suitability, formatting quality, and the risk of misleading presentation.

- **Accessibility:**
    
    Accessibility includes support for high-contrast themes, keyboard navigation, screen readers, readable labels, and other features that help users with different needs.

- **Performance:**

    Performance includes loading times, responsiveness, rendering stability, and behavior with larger datasets.

    When performance testing is part of the assignment, evaluate performance using a **dataset with at least 10M rows**, which represents a large dataset well. An example of such a dataset is available for download here: [Contoso 10M.7z (420 MB)](https://github.com/sql-bi/Contoso-Data-Generator-V2-Data/releases/download/ready-to-use-data/pbix-10M.7z)

### Support

Support scoring estimates whether users can trust the publisher to maintain, document, and support the visual.

Consider public support links, documentation quality, website quality, release activity, vendor identity, AppSource information, bug reporting channels, tutorials, examples, and visible warnings such as missing, broken, ambiguous, or potentially unsafe evidence.

## Other Considerations

### Evidence and Public Signals

The OKVIZ Index is based on public evidence and extracted metadata. Public signals can be incomplete or outdated, especially when vendors do not publish documentation, when AppSource data changes, or when a visual has capabilities that are not visible from screenshots or metadata.

Use reviewer notes to separate verified behavior from assumptions. If you cannot confirm a claim, state what evidence is missing instead of treating the claim as proven.

### Weights and Scoring

You do not need to consider weights directly. Some criteria are more significant than others, and the final score reflects their relative importance. Essential features have a greater impact on the overall rating than nice-to-have features.

OKVIZ calculates the final rating from the completed rating list and internal weights. The reviewer contribution is the evidence-based assessment, not the numerical score.

### Corrections

If the rating list, visual classification, public evidence, or assigned rating values appear inaccurate, document the issue in your review notes. OKVIZ will verify the issue before updating the public rating, the rating schema, or the visual metadata.
