import { css } from "css-in-js";
import { CSSProps, CSSPseudos } from "./types";
import { baseCSS, styleSet } from "./base";
import { transformStyleProp, union } from "@damons-ui/css-core";

export const pseudoPropsCSS = (props: CSSProps, pseudo: CSSPseudos) => {
  return css<CSSProps>`
    &${pseudo} {
      ${Object.keys(props)
        .filter(
          (propKey) =>
            union(styleSet).has(propKey) &&
            props[propKey as keyof CSSProps] !== undefined
        )
        .map((propKey) => {
          const value = props[propKey as keyof CSSProps];

          if (value === undefined) return "";

          return `${transformStyleProp(propKey)}: ${
            value === "" ? `""` : value
          };`;
        })}
    }
  `;
};

export const pseudoCSS = (props: CSSProps, pseudo: CSSPseudos) => css<CSSProps>`
  &${pseudo} {
    ${() => baseCSS(props)}
  }
`;
