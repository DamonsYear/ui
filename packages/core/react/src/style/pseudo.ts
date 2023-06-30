import { css } from "css-in-js";
import { CSSProps, CSSPseudos } from "./types";
import { baseCSS } from "./base";

export const pseudoCSS = (props: CSSProps, pseudo: CSSPseudos) => css<CSSProps>`
  &${pseudo} {
    ${() => baseCSS(props)}
  }
`;
