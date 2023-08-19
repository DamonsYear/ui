import { CSSProps } from "./types";

export type TransformCSSProp = Pick<
  CSSProps,
  | "transform"
  | "transformBox"
  | "transformOrigin"
  | "transformStyle"
  | "rotate"
  | "scale"
>;

export const TransformCSSPropSet = new Set<string>([]);
