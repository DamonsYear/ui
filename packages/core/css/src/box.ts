import { CSSProps } from "./types";

export type BoxModel = Pick<
  CSSProps,
  | "boxSizing"
  | "width" // size
  | "minWidth"
  | "maxWidth"
  | "height"
  | "minHeight"
  | "maxHeight"
  | "padding" // padding
  | "paddingTop"
  | "paddingRight"
  | "paddingBottom"
  | "paddingLeft"
  | "margin" // margin
  | "marginTop"
  | "marginRight"
  | "marginBottom"
  | "marginLeft"
  | "border" // border
  | "borderWidth"
  | "borderColor"
  | "borderStyle"
  | "borderRadius"
  | "aspectRatio" // set size by ratio
>;

export const BoxModelCSSPropSet = new Set<string>([
  "boxSizing",

  "width",
  "minWidth",
  "maxWidth",
  "height",
  "minHeight",
  "maxHeight",

  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",

  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",

  "border",
  "borderWidth",
  "borderColor",
  "borderStyle",
  "borderRadius",
]);
