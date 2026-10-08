# Proposal: dogday.com

## Problem

Dog owners need a welcoming, easy-to-scan starting point for trustworthy dog-care information. The current site is only a project starter page.

## Goals

- Create a responsive, warm and polished homepage for dogday.com.
- Bring breed discovery, behavior education, and basic wellness tools into one single-page experience.
- Make key interactions usable with a keyboard and assistive technology.
- Keep all content static and make the page deployable through the existing GitHub Pages pipeline.

## Constraints

- The current application is a static GitHub Pages site, with no backend or persistence service.
- Keep the implementation lightweight and compatible with the existing Node-based Playwright test setup.
- Health content must be educational, avoid diagnosis, and clearly direct urgent symptoms to a veterinarian or emergency clinic.

## Proposed approach

Replace the starter page with a self-contained HTML/CSS/JavaScript single-page site. Use same-page navigation, a data-driven breed directory, interactive behavior-state tabs, and a daily-care checklist persisted in local storage. Use clear medical disclaimers and conservative emergency guidance.

## Risks and tradeoffs

- A single HTML document avoids a framework/build pipeline and keeps Pages deployment straightforward, at the cost of colocating page styles and behavior.
- Static symptom guidance cannot assess an individual dog. Keep the tool informational, avoid diagnosing, and recommend professional veterinary care for concerning or rapidly worsening signs.
- Remote decorative photos may be unavailable. Use accessible fallback backgrounds and ensure all information remains available without images.
