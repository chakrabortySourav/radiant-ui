/** Public, shared type aliases used across the library. */

export type WithChildren<T = unknown> = T & { children?: React.ReactNode };

export type Size = "sm" | "md" | "lg";
export type Variant = "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
