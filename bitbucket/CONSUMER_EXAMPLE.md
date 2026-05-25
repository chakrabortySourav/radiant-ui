# Example consumer project

A minimal Vite + React + Tailwind app consuming `@company/ui-library` from Bitbucket.

## 1. Create the app

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 2. Install the library from Bitbucket

```bash
npm install git+ssh://git@bitbucket.org/company/ui-library.git#v1.0.0
```

## 3. `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";
import preset from "@company/ui-library/tailwind-preset";

export default {
  darkMode: ["class"],
  presets: [preset],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@company/ui-library/dist/**/*.{js,cjs}",
  ],
} satisfies Config;
```

## 4. `src/main.tsx`

```tsx
import "@company/ui-library/styles.css";
import "./index.css"; // your own tailwind entry
import React from "react";
import { createRoot } from "react-dom/client";
import { UIProvider } from "@company/ui-library";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UIProvider defaultTheme="system">
      <App />
    </UIProvider>
  </React.StrictMode>,
);
```

## 5. `src/App.tsx`

```tsx
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  FormField,
  Container,
  Stack,
  useTheme,
} from "@company/ui-library";

export default function App() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Container size="md" className="py-12">
      <Stack gap={6}>
        <Stack direction="row" justify="between" align="center">
          <h1 className="text-3xl font-semibold">Welcome</h1>
          <Button
            variant="outline"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            Toggle theme
          </Button>
        </Stack>

        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Update your profile <Badge>beta</Badge></CardDescription>
          </CardHeader>
          <CardContent>
            <Stack gap={4}>
              <FormField label="Display name" placeholder="Jane Doe" />
              <FormField label="Email" type="email" error="Required" />
            </Stack>
          </CardContent>
          <CardFooter className="justify-end">
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </Stack>
    </Container>
  );
}
```

## 6. Run

```bash
npm run dev
```

That's it — you're consuming the centralized library, themed via CSS variables, and pinned to a Bitbucket tag for reproducibility.
