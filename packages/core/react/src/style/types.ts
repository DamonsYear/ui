import type * as CSS from "csstype";

export type PseudosPropKey =
  | "_after"
  | "_before"
  | "_backdrop"
  | "_placeholder"
  | "_active"
  | "_checked"
  | "_default"
  | "_defined"
  | "_disabled"
  | "_empty"
  | "_enabled"
  | "_first"
  | "_firstChild"
  | "_firstLetter"
  | "_firstLine"
  | "_firstOfType"
  | "_focus"
  | "_focusWithin"
  | "_hover"
  | "_valid"
  | "_invalid"
  | "_lastOfType"
  | "_required"
  | "_visited";

export type ComponentBaseCSS = Omit<
  CSS.Properties<string | number>,
  "translate"
>;
export type ComponentPseudoCSS = ComponentBaseCSS & {
  [P in PseudosPropKey]?: ComponentBaseCSS;
};

export type CSSProps = ComponentBaseCSS & ComponentPseudoCSS;
export type CSSPseudos = CSS.Pseudos;
