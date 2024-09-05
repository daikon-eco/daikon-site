---
title: 'Home'
date: 2023-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: hero
    content:
      title: daikon
      text: Open-source **AI** for the **AEC** industry
      primary_action:
        text: GitHub
        url: "https://github.com/orgs/daikon-eco"
        icon: brands/github
      secondary_action:
        text: Solutions
        url: /#solutions
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      # For full-screen, add `min-h-screen` below
      css_class: "dark"
      background:
        color: "navy"
        image:
          # Add your image background to `assets/media/`.
          filename: bg-triangles.svg
          filters:
            brightness: 0.5
  - block: markdown
    id: manifest
    content:
      title: Manifest
      text: "We believe that the current advancements in artificial intelligence are mature enough to radically transform the architecture and construction sector.


The massive impact of AI in industries such as tech and finance is largely the result of collaboration between different players – sometimes competitors – around open-source projects and tools. Initiatives such as model hosting by [HuggingFace](https://huggingface.co), the creation of training datasets by [Together AI](https://www.together.ai/blog/redpajama-data-v2), and the development of AI models like [Llama](https://llama.meta.com) and [Mistral](https://mistral.ai) are prime examples of this.


From our point of view, the slow adoption of AI in the AEC industry is primarily due to the fragmentation between different actors – companies, engineering firms, and others – who are often reluctant to share their data and internal tools.


With **daikon**, our ambition is to break down these barriers through clear objectives:


	•	Providing open-source solutions that allow all industry players to benefit from modern AI tools.


  •	Encouraging collaboration and exchange among different stakeholders in the sector to develop projects that benefit the greater good."

    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900 justify-text"
      # Reduce spacing
      spacing:
        padding: ["1rem", 0, "1rem", 0]

  - block: cta-image-paragraph
    id: solutions
    content:
      items:
        - title: Gladis
          text: The universal EPD search engine
          feature_icon: check
          features:
            - "A free web application to search for EPDs"
            - "EPDs from various Programme Operators: INIES, IBU, BRE Global, etc."
            - "A modern API for developers"
          # Upload image to `assets/media/` and reference the filename here
          image: build-website.png
          button:
            text: Coming soon
            url: /#solutions
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"
  - block: features
    id: services
    content:
      title: Services
      items:
        - name: AI for business
          icon: briefcase
          description: Get your company up-to-date with AI. We provide brainstorming sessions, training, etc.
        - name: Software development
          icon: computer-desktop
          description: We develop end-to-end full-stack solutions.
        - name: ML Engineering
          icon: cpu-chip
          description: We train and deploy machine learning models for all type of data and use-cases.
---
