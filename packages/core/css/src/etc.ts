import { CSSProps } from "./types";

export type OtherCSSProps = Pick<
  CSSProps,
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

export const OtherCSSPropSet = new Set<string>([
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
