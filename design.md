# Design: dogday.com

## Overview

A static single-page dog-care hub with clear section anchors and lightweight client-side interactions.

## Visual direction

- Soft sky blue for brand and primary actions.
- Warm cream page background, white content surfaces, and cocoa/bark-brown text.
- Rounded image-led cards, subtle borders and shadows, generous spacing, and friendly editorial typography.
- Responsive card grids and a compact accessible menu on smaller screens.

## Page structure

1. Sticky site header: brand, primary section links, and breed search.
2. Hero: welcoming message, CTAs, and dog photography.
3. Featured guide cards.
4. Breed explorer: filters, search results, and six sample breed cards.
5. Behavior guide: state selector and changing signal/tip panel.
6. Health dashboard: daily checklist and symptom guidance with prominent disclaimer.
7. Footer with navigation and educational note.

## Interaction and accessibility

- Use section anchors with smooth scrolling only when reduced motion is not requested.
- Breed filters combine by size and temperament; free-text search is case-insensitive.
- Use semantic buttons and selected-state attributes for behavior choices.
- Store per-day checklist selections in local storage and announce progress through a polite live region.
- Keep symptom advice conservative and make emergency guidance immediately visible.
- Ensure visible focus indicators, labels for inputs, meaningful alternative text, and mobile menu expanded state.

## Technical approach

Keep HTML, CSS, data, and browser-native JavaScript in `site/index.html`; do not add a framework or runtime dependencies. Extend the existing Playwright E2E suite against the local static server.
