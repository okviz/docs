---
layout:         page
title:          Guidelines for Visual Reviews
menu_title:     Reviews Guidelines
published:      true
date:           2024-10-04
modified:       2024-10-08
version:        1.1
order:          /website/contributing/review-guidelines
pdf:            true
---

These editorial guidelines ensure that reviews of Power BI visuals we publish on OKVIZ are consistent, high-quality, and provide unbiased information to help both end-users and developers make informed decisions.

[Jump to the Checklist](#review-checklist)

## Mission and Values

Your goal is to provide clear, detailed, and objective reviews of Power BI visuals, based on actual usage and testing, without the influence of pricing or licensing models.

Your core values are:

- **Honesty:** Provide honest assessments based on real-world testing, free from external influence.
- **Objectivity:** Focus on the features and performance of the visual without regard to pricing or licensing.
- **Transparency:** Clearly explain the features, strengths, and weaknesses of the visual without bias.

## Target Audience

The primary audience includes Power BI end-users, developers, data professionals, and business intelligence experts seeking visuals to enhance their reports. The reviews aim to provide valuable insights to help users make informed decisions about the visuals they choose to integrate into their Power BI projects.

## Review Structure
Each review must be structured into the following sections:

1. **Introduction:**  
   Provide an overview of the visual and its general purpose within Power BI. This section could include a brief history of the visual, its developer, and any notable achievements or awards. Also it could include part of final consideration.

2. **Adherence to Chart Type/Category (If Applicable):**  
   Assess how well the visual adheres to the standard features of its chart type or category. See a list of chart types and categories in the [Classification page](classification.md).
   > If the visual does not fit into any classification, you can skip this section.

3. **Core Features:**  
   Provide a free-form discussion of the specific features that make the visual unique. Highlight any standout functionality or customization options that set it apart.

4. **Pros and Cons:**  
   Present the pros and cons in a highly schematic format. Be concise and clear. Find more details in the [Pros and Cons page](pros-cons.md).

   Example:
   ```
   Pros:
   - Easy to use
   - Customizable colors
   - Supports advanced data filtering

   Cons:
   - Poor performance with large datasets
   - Bad UI/UX design
   - Steep learning curve
   ```

   > **IMPORTANT**: Avoid discussing bugs unless the visual is highly bugged. Bugs are typically fixed over time and may not represent the long-term quality of the visual.

5. **Final Consideration:**  
   Summarize the overall performance of the visual. Discuss the rating ([see below](#rating-system)) and provide a detailed explanation of why the visual received that score based on its features and usability.


## Media Content

- **Screenshots:**  
   Include at least 2 screenshots. Ensure images are high-quality, suitable for 4K screens, and saved in PNG (recommended for UI) or JPEG format (recommended for pictures including photos). If you use tools like Snagit, avoid using shadow effects. 
   
   If you need to mark specific areas, use a simple red rectangle or arrow.
   <todo visible>We will provide an example of good and bad screenshots.</todo>
   > **IMPORTANT**: Optimize images using tools like [tinypng.com](https://tinypng.com/) before sending them.


- **Screencasts (Optional):**  
   If you need to record a quick demonstration of a feature, provide a small MP4 video (no longer than 10 seconds) without audio. Do not use GIFs.

- **Additional Images (Optional):**  
   You can include additional images (e.g., diagrams or visual enhancements), including AI-generated images, as long as you hold the rights to these images. However, we reserve the right to remove or reject any images that do not align with our website’s style or for any other reason at our discretion.

- **Video (Optional):**  
   If necessary, include a screencast MP4 video (no longer than 5 minutes) without audio, demonstrating key aspects of the visual. Ensure the screencast shows cursor movements and keystrokes. Optional captions may be provided for conversion to text-to-speech narration.
   > **IMPORTANT**: Do not include any personal footage, such as your face, in the videos. The screencast should solely focus on the visual and its usage within Power BI.


## Rating System

Assign a score from 1 to 10 for each of the following core values:

1. **Features:**  
   Assess the range and functionality of the visual. A higher score should reflect more comprehensive features that significantly enhance Power BI capabilities.

2. **Design:**  
   Evaluate the visual’s overall design, including its appearance, usability, and how seamlessly it integrates into Power BI dashboards and reports.

3. **Support:**  
   Consider the quality of documentation, user guides, help resources, and vendor responsiveness. A higher score should indicate strong support, well-structured documentation, and easy access to help if needed.

The final rating is calculated using a weighted average of the three scores. See [Rating System](rating-system.md) for a detailed breakdown.

## Comparison Policy

- **Permissible Comparisons:** Compare the custom visual to similar built-in visuals in Power BI, if applicable.
- **Prohibited Comparisons:** Do not compare the reviewed visual to other custom visuals. Such comparisons will be addressed in [separate content pieces](comparison-guidelines.md).

## Style and Grammar

- **Grammar Rules:** Adhere to American English grammar, punctuation, and spelling conventions. Use formal language without contractions or colloquialisms.

- **Language Use:** 
   - Be concise, clear, and objective. 
   - Avoid first-person language (e.g., “I think”), and instead use third-person (e.g., “the visual performs well”). 
   - Use non-abbreviated forms of words (e.g., "do not" instead of "don't"). 
   - Avoid marketing language.

## Editorial Process

- **Format:** Reviews can be submitted in Microsoft Word or Markdown format.

- **Editing:** Reviews will undergo editing for style, clarity, and factual accuracy. A technical review will be conducted to ensure that the visual was genuinely used and tested.

- **Video Editing:** If a video is provided, it will be edited into a finalized video using text-to-speech narration. You should only submit raw screencasts with optional captions.

## AI Usage

AI tools can be used to assist in drafting, editing, or optimizing the review. However, the visual must be genuinely used and tested by you to ensure the insights reflect real experience.
>> AI-generated content must not replace hands-on experience with the visual. You are responsible for the accuracy of the content and ensuring that the review aligns with the guidelines. Any AI-generated content must be fact-checked and edited to meet the quality standards of the review. 

## Fact-Checking and Originality

- **Source Verification:** Ensure that all information is accurate and verified based on your actual experience with the visual.

- **Originality:** Reviews must be original, free of plagiarism, and based on real use of the visual. Also, they should not be published elsewhere.


## SEO and Metadata

- **Best Practices:**
    - Use the term “Power BI”, "Semantic Model", and "Fabric" throughout the content.
    - Include links to relevant Power BI documentation or OKVIZ webpages where applicable. Links to comparisons or related articles are automatically added.
    - **Do not provide direct links to other external websites**. Links to vendor website or documentation are automatically added, so avoid including them in the content.

- **Terminology:**
    - Always refer to custom visuals as "visual" or "custom visual." Avoid using terms like "plugin", "component" or "view".
    - Use the terms as they are defined in the [glossary](../../visuals/glossary.md).

- **Highlights:**
    - Mark 2 to 5 sentences that can be highlighted on the webpage.

- **Metadata:**   
   Include the following additional metadata (with examples):

   - **Short Title**
      ```
      Smoother Trend Analysis with [Visual Name]
      ```

   - **Full Title**
      ```
      Achieving Smoother Trend Analysis with [Visual Name] in Power BI
      ```

   - **Single Sentence Description**
      ```
      [Visual Name] offers customizable options for improved 
      trend analysis and data precision in Power BI.
      ```

   - **Small Description**
      ```
      In this review, we dive into how [Visual Name] enhances trend 
      analysis in Power BI through its advanced customization options, 
      including flexible axis scaling, dynamic styling, and rich 
      interactivity. Whether you are visualizing complex data patterns or 
      fine-tuning your report’s aesthetics, this visual provides the tools 
      you need to create polished and highly informative line charts 
      tailored to your analytical needs.
      ```
   
   
   **The review title and descriptions must be meaningful and informative**, reflecting key insights or findings from the review. The title should highlight a significant aspect of the visual, such as its standout feature or primary use case.
 

## Legal and Ethical Considerations

Ensure any sponsorship or affiliation is disclosed. Avoid biased language or unfounded claims, maintaining full integrity.

## Maintenance

Reviews may be periodically updated to reflect significant changes in the visual, such as new features, design improvements, or enhancements to documentation and support. However, any updates must be agreed upon and carried out by the original author of the review. The author is responsible for revisiting the visual, reassessing it based on the updated criteria, and making any necessary changes to the review.

&nbsp; 

---

## Review Checklist
Use this checklist to verify that all guidelines have been followed:

- [ ] **Introduction:** Describe the visual and its purpose.
- [ ] **Chart Type Features:** Evaluate how well the visual meets the features of its category.
- [ ] **Core Features:** Discuss the unique features of the visual.
- [ ] **Pros and Cons:** Include a clear, schematic list of pros and cons.
- [ ] **Final Consideration:** Offer a short summary of the visual’s performance and rating.
- [ ] **Rating:** Define a rating, not influenced by pricing or licensing. [See the Rating System](rating-system.md).
- [ ] **Screenshots:** Provide at least 2 high-quality, optimized screenshots.
- [ ] **Video (Optional):** Provide a screencast without audio, including captions if applicable.
- [ ] **SEO:** Use relevant terms and avoid external links.
- [ ] **Highlights:** Mark 2 to 5 sentences for highlighting on the webpage.
- [ ] Provide additional metadata: 
    - [ ] **Short Title**
    - [ ] **Full Title**
    - [ ] **Single Sentence Description**
    - [ ] **Small Description**