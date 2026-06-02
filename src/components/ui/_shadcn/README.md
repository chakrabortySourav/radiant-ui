# Raw shadcn components

**Do not edit these files by hand.** They are managed by the shadcn CLI:

```bash
npx shadcn@latest add <component>
```

These files are the unmodified shadcn/ui source. Consumer-facing exports live one
directory up in `src/components/ui/*.tsx`, which import from here and apply the
design-system contract (locked `className`/`style`, token bindings, custom variants).

## Adding / updating a component

1. Run `npx shadcn@latest add <name>` — it writes here because `components.json`
   has `"ui": "@/components/ui/_shadcn"`.
2. If a matching wrapper exists at `../<name>.tsx`, verify it still compiles. If
   shadcn changed the API, update the wrapper — never edit the raw file.
3. If no wrapper exists, create one following the pattern in `../button.tsx`.

## Why the wrapper layer?

- `LockedProps` strips `className`/`style` from the public type so consumers cannot
  override design-system styling.
- `stripStyleProps` enforces it at runtime (covers `as any` casts).
- Token bindings (e.g. `--sidebar-*`) and custom variants stay in the wrapper, so
  CLI updates never clobber them.
