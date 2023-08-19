import { CSSProps } from "./types";

export type ImgCSSProps = Pick<
  CSSProps,
  | "objectFit"
  | "objectPosition"
  | "imageOrientation"
  | "imageRendering"
  | "imageResolution"
>;

export const ImgCSSPropSet = new Set<string>([
  "objectFit",
  "objectPosition",
  "imageOrientation",
  "imageRendering",
  "imageResolution",
]);
