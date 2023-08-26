import { PseudoPropKeys } from "@damons-ui/css-core";
import type * as CSS from "csstype";

export type PseudosPropKey = PseudoPropKeys;

export type ComponentBaseCSS = Omit<
  CSS.Properties<string | number>,
  "translate"
>;

export type ComponentPseudoCSS = {
  [P in PseudosPropKey]?: ComponentBaseCSS;
};

export type CSSProps = ComponentBaseCSS & ComponentPseudoCSS;
export type CSSPseudos = CSS.Pseudos;
