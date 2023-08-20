import { CSSProps } from "./types";

export type LayoutCSSProps = Pick<CSSProps, "display">;

export const LayoutCSSPropSet = new Set<string>(["display"]);
