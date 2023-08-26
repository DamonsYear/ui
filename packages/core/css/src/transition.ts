import { CSSProps } from "./types";

export type Transition = Pick<
  CSSProps,
  | "transition"
  | "transitionDelay"
  | "transitionDuration"
  | "transitionProperty"
  | "transitionTimingFunction"
>;

export const TransitionCSSPropSet = new Set<string>([
  "transition",
  "transitionDelay",
  "transitionDuration",
  "transitionProperty",
  "transitionTimingFunction",
]);
