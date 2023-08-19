import { CSSProps } from "./types";

export type DefaultCSSProps = Pick<
  CSSProps,
  | "display"
  | "appearance"
  | "content"
  | "outline"
  | "outlineColor"
  | "outlineOffset"
  | "outlineStyle"
  | "outlineWidth"
  | "order"
  | "overscrollBehavior"
  | "overscrollBehaviorBlock"
  | "overscrollBehaviorInline"
  | "overscrollBehaviorX"
  | "overscrollBehaviorY"
  | "touchAction"
  | "listStyle"
  | "listStyleImage"
  | "listStylePosition"
  | "listStyleType"
  | "breakBefore"
  | "breakAfter"
  | "breakInside"
  | "caretColor"
  | "colorScheme"
  | "colorAdjust"
  | "colorInterpolation"
  | "colorRendering"
  | "cursor"
>;

export const DefaultCSSPropSet = new Set<string>([
  "display",
  "appearance",
  "content",
  "outline",
  "outlineColor",
  "outlineOffset",
  "outlineStyle",
  "outlineWidth",
  "order",
  "overscrollBehavior",
  "overscrollBehaviorBlock",
  "overscrollBehaviorInline",
  "overscrollBehaviorX",
  "overscrollBehaviorY",
  "touchAction",
  "listStyle",
  "listStyleImage",
  "listStylePosition",
  "listStyleType",
  "breakBefore",
  "breakAfter",
  "breakInside",
  "caretColor",
  "colorScheme",
]);
