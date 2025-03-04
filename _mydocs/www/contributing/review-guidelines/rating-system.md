---
layout:         page
title:          Rating System
published:      true
date:           2024-10-04
modified:       2025-03-04
order:          /website/contributing/review-guidelines/rating-system
---

The OKVIZ rating system for Power BI visuals is designed to ensure consistent and objective evaluations in reviews by assessing key aspects of each visual. The evaluation is based on specific criteria categorized into three main areas: **Features**, **Design**, and **Support**.

## Areas of Evaluation

### Features

This area assesses the core functionality of the visual, considering both common and chart-specific features. Some features are essential must-haves, while others enhance usability and interactivity.

- **Common Features:**

  Common features are functionalities that are present in most visuals and are essential for effective data visualization. These features include basic interactions, formatting options, and Power BI integration capabilities.

- **Type-Specific Features:**

  Type-specific features are functionalities that are unique to a particular visual type. These features enhance the visual's ability to represent data effectively and provide additional value to users. In the checklist, you will find features specific to various visual types, such as bar charts, line charts, pie charts, etc.

  > **For multi-purpose visuals** (visuals that can represent multiple visual types), you must evaluate the visual against the feature checklists for **all applicable types**. This ensures a comprehensive assessment of the visual's capabilities across its various functionalities.

### Design

This area focuses on the visual's appearance, user experience, and performance. It evaluates how well the visual integrates into Power BI dashboards, its aesthetic appeal, consistency, ease of use, and how efficiently it performs.

- **Visual Design:**

    Visual design includes the overall aesthetic quality of the visual, the use of color, layout, and other graphical elements. A visually appealing design can enhance user engagement and comprehension.

- **Accessibility:**
    
    Accessibility features are essential for ensuring that the visual can be used by all users, including those with disabilities. This includes support for screen readers, keyboard navigation, and other accessibility features.

- **Performance:**

    Performance aspects are critical components of the user experience and are included within this category. This includes loading times, responsiveness, and rendering performance. 

    It is important to evaluate performance using a **dataset with at least 10M rows**, which represents a large dataset well. An example of such a dataset is available for download here: [Contoso 10M.7z (420 MB)](https://github.com/sql-bi/Contoso-Data-Generator-V2-Data/releases/download/ready-to-use-data/pbix-10M.7z)

### Support

This area examines the quality of documentation, tutorials, user guides, and vendor responsiveness. Good support ensures that users have the resources they need to use the visual effectively and resolve any issues that may arise.

## Other Considerations

### Weights and Scoring

While you won't need to consider weights in your evaluation directly, please be aware that some features are more significant than others. The final rating considers the importance of each feature to provide a fair and balanced score. Essential features will have a greater impact on the overall rating than nice-to-have features.


## Rating Checklist

Please use our latest checklist to evaluate a visual. For each feature, select the appropriate option based on your assessment.

**Version**: 2.1.3   
**Date**: 2025-03-04

<a href="files/okviz-rating-checklist.xlsm" class="icon-download">Download Rating Checklist (.xlsm)</a>

> **INSTRUCTIONS**:   
- **The rating file contains a macro** that automatically show the features specific to the visual type you select. Enable macros to use this feature. Otherwise, you have to select only the features that are relevant to visual type(s) you are evaluating.
- The checklist asks you to provide a visual id. This id is a unique identifier for each visual in the [OKVIZ index](https://okviz.com/index).