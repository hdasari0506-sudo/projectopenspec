# dogday.com Single-Page Website

## 1. Problem and goals

Replace the generic project landing page with a responsive dog-owner resource hub. Visitors should be able to find breed information, learn to recognize common body-language signals, and use simple daily-care and symptom-information tools.

Goals:

- Provide a friendly, professional, responsive single-page experience.
- Make Home, Breeds, Behavior, and Health reachable from the main navigation.
- Support meaningful keyboard, screen-reader, and mobile use.
- Keep the app static and compatible with the existing GitHub Pages deployment.

## 2. Current state and constraints

- `site/index.html` is currently a small standalone landing page.
- GitHub Actions publishes the `site/` directory after tests pass on `main`.
- Playwright uses `tests/fixtures/server.mjs` to serve the static page.
- There is no application backend or server-side data storage.
- Keep the solution dependency-free at runtime and use browser local storage only for optional care checklist persistence.

## 3. Functional specification

### Homepage and navigation

- Brand the site as dogday.com with a warm cream, soft-blue, and brown color palette.
- Provide responsive navigation with Home, Breeds, Behavior, Health, and an accessible search field.
- Include a welcoming hero headline, explanatory copy, and a CTA that scrolls to breed discovery.
- Include featured resource cards and a footer with section links.
- Search filters the breed directory live and clearly reports when there are no matches.
- Navigation collapses accessibly on narrow viewports and closes after a section is selected.

### Breed explorer

- Show six sample breeds: Labrador Retriever, French Bulldog, German Shepherd, Golden Retriever, Dachshund, and Cavalier King Charles Spaniel.
- Each card includes an image or image placeholder with alt text, breed name, size, life expectancy, a two-sentence summary, and temperament labels.
- Provide an all-sizes option plus Small, Medium, and Large filters.
- Provide temperament filters for Friendly, Energetic, Calm, and Guard Dog; filters combine with AND semantics.
- Search matches breed names, temperament, size, and descriptive text and updates the visible result count.
- Filter controls have visible selected states and keyboard-operable native semantics.

### Behavior guide

- Provide selectable Happy / Relaxed, Anxious / Stressed, Alert / Uncomfortable, and Playful states.
- Selecting a state updates an accessible details panel with tail, ears, eyes, posture, and actionable owner tips.
- State descriptions explain that body language should be interpreted as a whole and in context.
- Avoid implying that a single signal reliably predicts intent. For potentially unsafe situations, advise creating distance and contacting a qualified professional.

### Health and wellness

- Provide a daily checklist including feeding, fresh water, walk/play, and tooth brushing.
- Persist checklist state by local date in local storage and show task completion progress. If storage is unavailable, the checklist remains usable for the current page session.
- Provide a symptom selector with lethargy, scratching, loss of appetite, vomiting/diarrhea, and breathing difficulty.
- The selected symptom gives cautious general information and indicates routine veterinary follow-up versus emergency care.
- Display a prominent disclaimer that information is educational, not a diagnosis, and not a replacement for a veterinarian.
- Emergency guidance must direct the user to contact an emergency veterinarian immediately; never encourage delaying care.

### Responsive and accessible behavior

- Use semantic landmarks, heading structure, descriptive button labels, visible keyboard focus, sufficient contrast, and reduced-motion support.
- Maintain usable spacing and readable content on mobile and desktop.
- Interactions provide accessible status updates.

## 4. Data and schema changes

No backend schema or application data changes. Breed and educational guide content is static in the page. Daily checklist state is stored in local storage per calendar day.

## 5. API and integration spec

- No network API is introduced.
- The page is served from `site/index.html` and published using the existing GitHub Pages workflow.
- Browser-native JavaScript implements filters, tabs, checklist state, symptom guidance, and navigation.

## 6. Testing and validation plan

- Add Playwright checks for page metadata/navigation, combined breed filters and search, behavior-state content switching, daily checklist state/progress, symptom urgency/disclaimer, and mobile navigation.
- Run all existing unit, integration, and Playwright tests with `cd tests && npm test`.
- Check keyboard-accessible names for major interactive controls and test the narrow viewport layout.
- Verify the static page is served by the existing local Playwright server.

## 7. Implementation plan

1. Replace the starter document with a semantic, responsive site and styles.
2. Add accessible client-side breed filters/search, behavior state selection, care checklist, symptom guide, and mobile navigation.
3. Expand Playwright coverage for each user-facing workflow.
4. Run the full test suite and fix any failures.

## 8. Release checklist

- [x] Required homepage and navigation content is present.
- [x] All filters and interactive tools work on desktop and mobile.
- [x] Health disclaimer and conservative emergency guidance are visible.
- [x] Automated tests pass.
- [x] GitHub Pages deployment renders the completed site: https://hdasari0506-sudo.github.io/projectopenspec/

## Open Questions

None blocking. Use a single-page layout, the specified warm palette, and static educational content as requested.
