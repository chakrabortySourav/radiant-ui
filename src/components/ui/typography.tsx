import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    },
  },
  defaultVariants: { variant: "p" },
});

export interface TypographyProps
  extends LockedProps<React.HTMLAttributes<HTMLElement>>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant = "p", as: Component, ...props }, ref) => {
    const safe = stripStyleProps(props);

    const tagMap: Record<string, React.ElementType> = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      p: "p",
      blockquote: "blockquote",
      lead: "p",
      large: "div",
      small: "small",
      muted: "p",
    };

    const Tag = Component || tagMap[variant || "p"] || "p";

    return (
      <Tag
        ref={ref as React.Ref<any>}
        className={typographyVariants({ variant })}
        {...safe}
      />
    );
  },
);
Typography.displayName = "Typography";
