# Copilot instructions for this repo

These notes teach AI coding agents how to be productive in this Next.js codebase quickly. Keep it short, specific, and follow the existing patterns.

## Architecture
- Framework: Next.js App Router (Next 15, React 19, TypeScript) with Tailwind CSS v4.
- Routing: Files under `app/**/page.tsx` create routes. Examples:
  - Home: `app/(app)/page.tsx` (client component; heavy sections are lazy-loaded with `React.lazy` + `Suspense`).
  - Detection service page: `app/services/detection/page.tsx` (server component with JSON‑LD via `dangerouslySetInnerHTML`).
- Global layout and SEO: `app/layout.tsx` sets metadata, loads global CSS from `styles/`, registers SW, and wraps UI providers.
- API routes: `app/api/health/route.ts` is used by container health checks. Don’t remove or change its response shape.
- Config and constants: `config/site.ts` (site metadata), `lib/utils.js` (Tailwind `cn` helper), `tailwind.config.ts` (tokens), `next.config.ts` (headers, images, standalone output).
- Service worker: `public/sw.js` is registered by `components/service-worker-register.tsx` and implements offline caching for a small set of stable assets.

## Conventions and patterns
- Styling: prefer Tailwind utilities and CSS variables; avoid authoring inline styles (`style={...}`) in components. See README section “Styling policy: no inline styles”. Use `cn()` from `lib/utils.js` to merge classes.
- Client vs server: components are server by default. Add `"use client"` only when needed (state, effects, refs, browser APIs). Example: homepage at `app/(app)/page.tsx` is a client component.
- Performance: lazy-load heavy, below‑the‑fold sections with `React.lazy` and show lightweight `Suspense` fallbacks (see home page). Keep the service worker pre‑cache list in `public/sw.js` small and bump cache names when changing it.
- Aliases: import via `@/*` (see `tsconfig.json`). Example: `import Header from '@/components/header'`.
- Forms and validation: use `react-hook-form` with Zod (`@hookform/resolvers`) and show messages via `sonner` toasts (see `components/contact-form.tsx`).
- UI: Radix UI primitives (`@radix-ui/*`), Lucide icons, Tailwind tokens defined in `tailwind.config.ts` (brand: navy/red). Prefer composing small UI in `components/ui/*`.
- SEO: set page‑specific `export const metadata` and include JSON‑LD when relevant (see `services/detection/page.tsx`).

## Build, run, and quality
- Common scripts (see `package.json`)
  - Dev: `npm run dev` (Turbopack)
  - Lint: `npm run lint` (Next ESLint config; lint failures block builds)
  - Type-check: `npm run type-check` (no emit)
  - Build/Start: `npm run build` / `npm run start`
  - Analyze bundle: `npm run analyze` (after build)
- VS Code task: “lint-and-build” runs `npm run lint && npm run build`.
- Docker/Cloud Run: `Dockerfile` uses Next standalone output; `deploy-cloud-run.sh` builds with Cloud Build and deploys to Cloud Run. Keep `app/api/health/route.ts` stable for the container `HEALTHCHECK`.

## When adding features
- Pages: add `app/<route>/page.tsx`. Put route‑specific JSON‑LD in that file (server component) and use `metadata` for titles/OG tags.
- Components: default to server components; switch to client only when required. Keep props serializable for server components.
- Styling: extend tokens in `tailwind.config.ts` if you need new colors; do not add inline styles. Prefer utility classes and CSS in `styles/*` imported via `app/layout.tsx`.
- Images: use Next Image if possible and respect `next.config.ts` image domains.

## Gotchas
- `optimizePackageImports` is enabled in `next.config.ts`; prefer named imports (e.g., from `lucide-react`) and keep imports tree‑shakable.
- The service worker only pre‑caches a fixed list; don’t add hashed `/_next/static` assets to it. Bump `STATIC_CACHE`/`DYNAMIC_CACHE` names when changing caching strategy.
- TS path alias `@/*` targets project root; avoid deep relative paths.

References: `app/layout.tsx`, `app/(app)/page.tsx`, `app/services/detection/page.tsx`, `components/*`, `components/ui/*`, `public/sw.js`, `config/site.ts`, `tailwind.config.ts`, `next.config.ts`, `lib/utils.js`.