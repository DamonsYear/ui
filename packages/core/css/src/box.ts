import { CSSProps } from "./types";

export type BoxModel = Pick<
  CSSProps,
  | "boxSizing"
  | "width" // size
  | "height"
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
>;

export const BoxModelCSSPropSet = new Set<string>([
  "boxSizing",
  "width",
  "height",

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
