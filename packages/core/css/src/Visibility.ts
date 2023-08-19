import { CSSProps } from "./types";

export type VisibilityCSSProps = Pick<
  CSSProps,
  "visibility" | "opacity" | "contentVisibility" | "backfaceVisibility"
>;

export const VisibilityCSSPropSet = new Set([
  "visibility",
  "opacity",
  "contentVisibility",
  "backfaceVisibility",
]);
