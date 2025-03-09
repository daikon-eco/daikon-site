---
title: "Home"
date: 2023-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: hero
    content:
      title: Open-source AI for the AEC industry
      text: 🧱 INNOVATIVE. OPEN SOURCE. SUSTAINABLE 🧱
      primary_action:
        text: Get Started
        url: "#features"
        icon: rocket-launch
      secondary_action:
        text: Learn More
        url: "#solutions"
      announcement:
        text: "Announcing the release of version 1."
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
  - block: stats
    content:
      items:
        - statistic: "10+"
          description: |
            Open-source
            projects
        - statistic: "500+"
          description: |
            GitHub stars
            and growing
        - statistic: "24/7"
          description: |
            Community support
            and collaboration
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"
      # Reduce spacing
      spacing:
        padding: ["1rem", 0, "1rem", 0]
  - block: features
    id: features
    content:
      title: Features
      text: Transforming the AEC industry with AI 🏗️
      items:
        - name: Sustainable Design
          icon: leaf
          description: AI-powered tools to optimize building designs for energy efficiency and sustainability.
        - name: Fast
          icon: bolt
          description: Super fast processing of architectural data and construction plans.
        - name: Easy
          icon: sparkles
          description: User-friendly interfaces designed for architects and engineers, not just developers.
        - name: Open Source
          icon: code-bracket
          description: All our tools are open source, allowing for community contributions and customization.
        - name: Highly Accurate
          icon: star
          description: State-of-the-art AI models trained specifically for architectural and construction data.
        - name: Modular Components
          icon: rectangle-group
          description: Build your workflow with modular components that integrate seamlessly!
  - block: cta-image-paragraph
    id: solutions
    content:
      items:
        - title: Build better, more sustainable structures
          text: Powered by cutting-edge AI
          feature_icon: check
          features:
            - "Future-proof - sustainable design principles"
            - "AI-powered analysis of building performance"
            - "No machine learning expertise required"
          # Upload image to `assets/media/` and reference the filename here
          image: build-website.png
          button:
            text: Get Started
            url: "#features"
        - title: Growing Community
          text: Join our community of architects, engineers, and developers
          feature_icon: bolt
          features:
            - "Dedicated support channels"
            - "Growing user community"
            - "Share your projects and get feedback"
          # Upload image to `assets/media/` and reference the filename here
          image: coffee.jpg
          button:
            text: Join Community
            url: "https://github.com/orgs/daikon-eco"
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"
  - block: testimonials
    content:
      title: ""
      text: ""
      items:
        - name: "Alex Duverger"
          role: "Founder at daikon"
          # Upload image to `assets/media/` and reference the filename here
          image: "testimonial-1.jpg"
          text: "Our mission is to transform the AEC industry with open-source AI tools that make sustainable design accessible to everyone."
    design:
      spacing:
        # Reduce bottom spacing so the testimonial appears vertically centered between sections
        padding: ["6rem", 0, 0, 0]
  - block: cta-card
    content:
      title: Start building with daikon today
      text: Open-source AI tools for the AEC industry
      button:
        text: Get Started
        url: "https://github.com/orgs/daikon-eco"
    design:
      card:
        # Card background color (CSS class)
        css_class: "bg-primary-700"
        css_style: ""
---
