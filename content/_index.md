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
        text: Manifest
        url: /#manifest
        icon: rocket-launch
      secondary_action:
        text: Solutions
        url: /#solutions
      announcement:
        text: "Announcing the release of Gladis, the EPD search engine"
        link:
          text: "Read more"
          url: "/blog/"
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
      text: "blablabla"
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"
      # Reduce spacing
      spacing:
        padding: ["1rem", 0, "1rem", 0]
  - block: cta-image-paragraph
    id: solutions
    content:
      items:
        - title: Gladis
          text: The EPD search engine
          feature_icon: check
          features:
            - "A free web application to search for EPDs"
            - "EPDs from various Programme Operators: INIES, IBU, BRE Global, etc."
            - "A pay-as-you-go API for developers"
          # Upload image to `assets/media/` and reference the filename here
          image: build-website.png
          button:
            text: Get Started
            url: https://gladis.eco
        - title: Francis
          text: An AI Assistant with deep expertise in architecture, engineering and construction
          feature_icon: bolt
          features:
            - "Ready-to-use chatbot"
            - "Open-source base and instruct models available on Huggingface"
          # Upload image to `assets/media/` and reference the filename here
          image: coffee.jpg
          button:
            text: Get Started
            url: https://francis.eco
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
