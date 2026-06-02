/** Design-system wrapper. Raw shadcn lives in `./_shadcn/slider.tsx`. */
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { Slider as ShadcnSlider } from "./_shadcn/slider";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  LockedProps<React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>>
>((props, ref) => <ShadcnSlider ref={ref} {...stripStyleProps(props)} />);
Slider.displayName = "Slider";
