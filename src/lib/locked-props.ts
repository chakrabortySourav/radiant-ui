/**
 * Utilities to lock library components against consumer styling overrides.
 *
 * - `LockedProps<P>` removes `className` and `style` from a prop type so
 *   TypeScript rejects them at the call site.
 * - `stripStyleProps(props)` removes them at runtime as a safety net
 *   (covers `as any` casts, `{...rest}` spreads, JS consumers, etc.).
 */

export type LockedProps<P> = Omit<P, "className" | "style">;

export function stripStyleProps<T extends object>(
  props: T,
): Omit<T, "className" | "style"> {
  if (!props) return props;
  // Avoid mutating caller's object.
  const { className: _c, style: _s, ...rest } = props as T & {
    className?: unknown;
    style?: unknown;
  };
  void _c;
  void _s;
  return rest;
}
