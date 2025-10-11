# jfk9

JFK9 site source code

## Debugging and styling fixes

This update includes multiple CSS and config improvements to address formatting glitches:

- Tailwind color tokens now use OKLCH where our CSS variables are defined in OKLCH for better color fidelity.
- Fixed an invalid tooltip transform-origin class by switching to a supported arbitrary property.
- Header background uses theme token (`bg-background`) instead of hardcoded white to avoid dark-mode flashes.
- Updated the custom dark variant selector to use `:where(.dark *)` to reduce specificity conflicts in Tailwind v4.
- Removed an overreaching base outline utility to prevent unintended outlines on all elements.

### Validate locally

- Type-check: `npm run type-check`
- Lint: `npm run lint`
- Build: `npm run build`

## Styling policy: no inline styles

- Source code must not use the `style` prop for visual styling. Prefer Tailwind utilities and CSS variables/tokens in `styles/`.
- The ESLint rule `react/forbid-component-props` enforces this policy project-wide with no exceptions.
- Note: some runtime or framework code (e.g., Next.js error pages, scripts, or third-party widgets) may inject inline styles into the compiled `.next/` output. Those are not authored in this repo and are acceptable.
