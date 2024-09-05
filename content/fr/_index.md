---
title: 'Accueil'
date: 2023-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: hero
    content:
      title: daikon
      text: "**IA** open-source pour le secteur de l'**architecture** et de la **construction**"
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
      title: Manifeste
      text: "Nous sommes convaincus que la maturité actuelle des technologies d’intelligence artificielle est suffisante pour transformer radicalement le secteur de l’architecture et de la construction.


L’impact massif de l’IA dans des secteurs comme la tech et la finance est principalement le fruit de la collaboration entre différents acteurs – parfois concurrents – autour de projets et d’outils open source. Des initiatives comme l’hébergement de modèles par [HuggingFace](https://huggingface.co), la création de jeux de données d’entraînement avec [Together AI](https://www.together.ai/blog/redpajama-data-v2), ou encore le développement de modèles d'IA tels que [Llama](https://llama.meta.com) et [Mistral](https://mistral.ai) en sont des exemples marquants.


De notre point de vue, la lente adoption de l’IA dans le secteur de la construction est principalement due au cloisonnement entre les différents acteurs – entreprises, bureaux d’études, et autres – qui sont peu enclins à partager leurs données et outils internes.


Avec **daikon**, nous avons pour ambition de briser ces barrières à travers des objectifs clairs :


	•	Offrir des solutions open source qui permettent à tous les acteurs du secteur de bénéficier d’outils d’IA modernes.


  •	Encourager la collaboration et l’échange entre les différents intervenants du secteur pour développer des projets qui profitent au plus grand nombre."

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
          text: Le moteur de recherche universel de DEP
          feature_icon: check
          features:
            - "Une application web gratuite pour rechercher des DEPs"
            - "DEPs de différents opérateurs de programmes : INIES, IBU, BRE Global, etc."
            - "Une API moderne pour les développeurs"
          # Upload image to `assets/media/` and reference the filename here
          image: build-website.png
          button:
            text: Disponible bientôt
            url: /fr/#solutions
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"
  - block: features
    id: services
    content:
      title: Services
      items:
      - name: IA pour les entreprises
        icon: briefcase
        description: Faites entrer votre entreprise dans l’ère de l’intelligence artificielle. Nous proposons des sessions de brainstorming, des formations, etc.

      - name: Développement logiciel
        icon: computer-desktop
        description: Nous développons des solutions complètes de bout en bout (full-stack).

      - name: Ingénierie de l'IA
        icon: cpu-chip
        description: Nous entraînons et déployons des modèles d'apprentissage automatique pour tous types de données et cas d'utilisation.
---
