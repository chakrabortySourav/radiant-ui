import * as React from "react";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export function Skeleton(props: LockedProps<React.HTMLAttributes<HTMLDivElement>>) {
  return <div className="animate-pulse rounded-md bg-muted h-4 w-full" {...stripStyleProps(props)} />;
}
