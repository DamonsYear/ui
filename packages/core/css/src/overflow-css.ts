import { CSSProps } from "./types";

export type OverflowCSSProps = Pick<
  CSSProps,
  "overflow" | "overflowX" | "overflowY"
>;

export const OverflowCSSPropSet = new Set<string>([
  "overflow",
  "overflowX",
  "overflowY",
]);
