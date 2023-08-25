import { css } from "css-in-js";
import { CSSProps, CSSPseudos } from "./types";
import { baseCSS, styleSet } from "./base";
import { transformStyleProp, union } from "@damons-ui/css-core";

export const pseudoPropsCSS = (
  props: CSSProps,
  pseudo: CSSPseudos
) => css<CSSProps>`
  &${pseudo} {
    ${Object.keys(props)
      .filter(
        (propKey) =>
          union(styleSet).has(propKey) &&
          props[propKey as keyof CSSProps] !== undefined
      )
      .map((propKey) => {
        const value = props[propKey as keyof CSSProps] as CSSProps;

        if (!value) return "";

        return `${transformStyleProp(propKey)}: ${value};`;
      })
      .join("")}
  }
`;

export const pseudoCSS = (props: CSSProps, pseudo: CSSPseudos) => css<CSSProps>`
  &${pseudo} {
    ${() => baseCSS(props)}
  }
`;
