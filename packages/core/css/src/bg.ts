import { CSSProps } from "./types";

export type BgCSSProps = Pick<
  CSSProps,
  | "background"
  | "backgroundColor"
  | "backgroundPosition"
  | "backgroundSize"
  | "backgroundImage"
  | "backgroundRepeat"
  | "backgroundClip"
  | "backgroundOrigin"
  | "backgroundPositionX"
  | "backgroundPositionY"
  | "backgroundAttachment"
>;

/**
 * 강하게 타입을 추론시키고 싶지만 그러면 하위에서 타입단언을 매우 많이 해야 한다.
 * 따라서 불가피하게 string으로 자동 추론되게끔 설정했다.
 */
export const BgCSSPropSet = new Set<string>([
  "background",
  "backgroundColor",
  "backgroundPosition",
  "backgroundSize",
  "backgroundImage",
  "backgroundRepeat",
  "backgroundClip",
  "backgroundOrigin",
  "backgroundPositionX",
  "backgroundPositionY",
  "backgroundAttachment",
]);
