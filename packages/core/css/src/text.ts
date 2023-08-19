import { CSSProps } from "./types";

export type TextCSSProps = Pick<
  CSSProps,
  | "fontSize"
  | "fontWeight"
  | "fontFamily"
  | "fontWeight"
  | "textAlign"
  | "letterSpacing"
  | "wordBreak"
  | "lineHeight"
  | "whiteSpace"
  | "textOverflow"
  | "color"
  | "wordWrap"
  | "wordSpacing"
  | "textShadow"
  | "textDecoration"
  | "textDecorationColor"
  | "textDecorationSkip"
  | "textDecorationLine"
  | "textDecorationSkipInk"
  | "textDecorationStyle"
  | "textDecorationThickness"
  | "textAnchor"
  | "verticalAlign"
  | "lineBreak"
  | "lineClamp"
  | "lineHeightStep"
>;

/**
 * 강하게 타입을 추론시키고 싶지만 그러면 하위에서 타입단언을 매우 많이 해야 한다.
 * 따라서 불가피하게 string으로 자동 추론되게끔 설정했다.
 */
export const TextCSSPropSet = new Set<string>([
  "fontSize",
  "fontWeight",
  "fontFamily",
  "fontWeight",
  "textAlign",
  "letterSpacing",
  "wordBreak",
  "lineHeight",
  "whiteSpace",
  "textOverflow",
  "color",
  "wordWrap",
  "wordSpacing",
  "textShadow",
  "textDecoration",
  "textDecorationColor",
  "textDecorationSkip",
  "textDecorationLine",
  "textDecorationSkipInk",
  "textDecorationStyle",
  "textDecorationThickness",
  "textAnchor",
  "verticalAlign",
  "lineBreak",
  "lineClamp",
  "lineHeightStep",
]);
