import { CSSProps } from "./types";

export type PositionCSSProps = Pick<
  CSSProps,
  "position" | "top" | "right" | "bottom" | "left" | "zIndex"
>;

export const PositionPropSet = new Set<string>([
  "position",
  "top",
  "right",
  "bottom",
  "left",
  "zIndex",
]);
