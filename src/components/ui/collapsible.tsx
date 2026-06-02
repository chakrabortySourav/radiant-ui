/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/collapsible.tsx`.
 * Collapsible has no styled slots (logic-only), so we re-export the primitives.
 */
export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./_shadcn/collapsible";
