import { css } from "css-in-js";
import { CSSProps, CSSPseudos } from "./types";
import { baseCSS, basePropsCSS } from "./base";

export const pseudoPropsCSS = (props: CSSProps, pseudo: CSSPseudos) => `
  &${pseudo} {
    ${() => basePropsCSS(props)}
  }
`;

export const pseudoCSS = (props: CSSProps, pseudo: CSSPseudos) => css<CSSProps>`
  &${pseudo} {
    ${() => baseCSS(props)}
  }
`;
