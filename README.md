# @company/ui-library

A production-ready, reusable **React + TypeScript + ShadCN + Tailwind** component library, distributed as a versioned npm package directly from a **Bitbucket** repository. Built with Vite library mode, strict TypeScript, tree-shakable ESM/CJS output, full dark mode, and a centralized design-token system.

---

## Table of contents

1. [Features](#features)
2. [Installation from Bitbucket](#installation-from-bitbucket)
3. [Quick start](#quick-start)
4. [Tailwind setup in consumer projects](#tailwind-setup-in-consumer-projects)
5. [Theme customization](#theme-customization)
6. [Available components](#available-components)
7. [Versioning & releases](#versioning--releases)
8. [Local development](#local-development)
9. [Architecture decisions](#architecture-decisions)
10. [Bitbucket Pipelines](#bitbucket-pipelines)

---

## Features

- **Strict TypeScript** everywhere, full `.d.ts` generation
- **ShadCN (New York) + Radix** primitives, all `forwardRef` and accessible
- **CVA-driven variants** for consistent component APIs
- **Tree-shakable** ESM + CJS dual build via Vite library mode
- **Shared Tailwind preset** — consumer apps inherit tokens automatically
- **CSS variables + dark mode** out of the box
- **Single `UIProvider`** wires theme + toasts + tooltip portal
- **Storybook** with light/dark toolbar
- **Vitest + Testing Library** setup
- **Husky + lint-staged** for pre-commit hygiene
- **Bitbucket Pipelines** CI included
- **npm only** — no pnpm/yarn/bun/turbo

---

## Installation from Bitbucket

This package is **not published to the npm registry**. Install it directly from Bitbucket by Git tag (recommended for reproducible builds) or branch.

### SSH (recommended for CI with deploy keys)

```bash
npm install git+ssh://git@bitbucket.org/company/ui-library.git#v1.0.0
```

### HTTPS (with app password)

```bash
npm install git+https://username:app-password@bitbucket.org/company/ui-library.git#v1.0.0
```

### Pin to a branch (not recommended for production)

```bash
npm install git+ssh://git@bitbucket.org/company/ui-library.git#main
```

> The package ships its prebuilt `dist/` folder via the `files` field — consumers do **not** need to compile it.

### Peer dependencies

Make sure your consumer app has:

```bash
npm install react react-dom
```

---

## Quick start

```tsx
// main.tsx
import "@company/ui-library/styles.css";
import { UIProvider } from "@company/ui-library";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <UIProvider defaultTheme="system">
    <App />
  </UIProvider>,
);
```

```tsx
// App.tsx
import { Button, Card, CardHeader, CardTitle, CardContent, FormField } from "@company/ui-library";

export default function App() {
  return (
    <Card className="max-w-md mx-auto mt-12">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <FormField label="Email" type="email" placeholder="you@example.com" />
        <FormField label="Password" type="password" />
        <Button>Continue</Button>
      </CardContent>
    </Card>
  );
}
```

---

## Tailwind setup in consumer projects

The library ships a shared Tailwind preset so every consumer inherits the same design tokens.

```ts
// tailwind.config.ts (in your consumer app)
import type { Config } from "tailwindcss";
import preset from "@company/ui-library/tailwind-preset";

export default {
  darkMode: ["class"],
  presets: [preset],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    // IMPORTANT: scan the library so Tailwind keeps its classes
    "./node_modules/@company/ui-library/dist/**/*.{js,cjs}",
  ],
} satisfies Config;
```

Then ensure your app imports the compiled stylesheet **once**:

```ts
import "@company/ui-library/styles.css";
```

---

## Theme customization

All tokens are CSS variables defined in `globals.css`. Consumers override them anywhere in their own CSS:

```css
:root {
  --primary: 250 90% 55%;          /* brand purple */
  --primary-foreground: 0 0% 100%;
  --radius: 0.75rem;
}

.dark {
  --primary: 250 80% 70%;
}
```

Switch themes programmatically:

```tsx
import { useTheme } from "@company/ui-library";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      Toggle theme
    </button>
  );
}
```

---

## Available components

| Category   | Components                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------- |
| `ui/`      | Button, Input, Label, Card, Dialog, Badge, Table, Tooltip, DropdownMenu, Tabs, Toast        |
| `forms/`   | FormField (label + input + hint/error wrapper)                                              |
| `layout/`  | Container, Stack                                                                            |
| `feedback/`| Spinner, EmptyState                                                                         |
| `hooks/`   | `useTheme`, `useMediaQuery`, `useDebouncedValue`                                            |
| `lib/`     | `cn()` — Tailwind-aware class merge                                                         |
| `utils/`   | `mergeRefs`, `visuallyHiddenStyle`                                                          |

Every component is `forwardRef`, fully typed, supports variants via CVA, and renders accessible Radix primitives where applicable.

---

## Versioning & releases

We follow **semantic versioning**:

- `MAJOR` — breaking API or token changes
- `MINOR` — new components or non-breaking additions
- `PATCH` — bug fixes, style tweaks, internal refactors

### Cut a release

```bash
npm run release          # patch
npm run release:minor
npm run release:major
```

The `release` scripts run `npm version`, which creates a git tag (`vX.Y.Z`) and updates `package.json`. Push the tag — consumers then pin to it:

```bash
npm install git+ssh://git@bitbucket.org/company/ui-library.git#v1.2.0
```

`prepublishOnly` ensures `dist/` is rebuilt before any publish or tag operation, and the `dist/` directory is committed to the released tag so consumers don't need a build step.

> Tip: many teams keep `dist/` out of `main` but **do** commit it on release tags via a CI step. See `bitbucket-pipelines.yml`.

---

## Local development

```bash
npm install
npm run storybook        # browse components
npm run build            # produce dist/
npm run typecheck
npm run lint
npm run test
```

### Linking into a consumer app for local testing

```bash
# inside ui-library
npm run build
npm link

# inside consumer app
npm link @company/ui-library
```

---

## Architecture decisions

- **Vite library mode** instead of tsup → single build tool for app + lib + Storybook.
- **Separate `tsconfig.build.json`** emits declarations only; runtime bundling is done by Vite.
- **Externalize React + Radix** so consumers dedupe their own copies (avoids hook errors).
- **Single CSS file output (`styles.css`)** — consumers import once, no per-component CSS chunks.
- **`sideEffects: ["**/*.css"]`** preserves the stylesheet during tree shaking but allows JS to shake.
- **Tailwind preset over re-declared config** keeps one source of truth for tokens.
- **`UIProvider` composition** avoids forcing consumers to learn 3 separate providers.
- **Roles & state belong in consumer apps** — this library is presentation-only.

---

## Bitbucket Pipelines

`bitbucket-pipelines.yml` defines:

- **PR pipelines** — lint, typecheck, test, build
- **Main branch** — same as PRs
- **Tag pipelines (`v*`)** — full quality gate + build for releases

Connect a deploy key in *Repository settings → Access keys* so CI can run `npm ci`.

---

## License

MIT © Company
