import { CSSProps, baseCSS, pseudoCSS } from "@damons-ui/react-core";
import styled from "css-in-js";

export const Container = styled.section<CSSProps>`
  position: fixed;

  ${baseCSS}
  ${(props) => props._hover && pseudoCSS(props._hover, ":hover")}
  ${(props) => props._before && pseudoCSS(props._before, ":before")}
  ${(props) => props._after && pseudoCSS(props._after, ":after")}
  ${(props) => props._active && pseudoCSS(props._active, ":active")}
  ${(props) => props._disabled && pseudoCSS(props._disabled, ":disabled")}
  ${(props) => props._enabled && pseudoCSS(props._enabled, ":enabled")}
  ${(props) => props._focus && pseudoCSS(props._focus, ":focus")}
  ${(props) =>
    props._firstOfType && pseudoCSS(props._firstOfType, ":first-of-type")}
  ${(props) =>
    props._lastOfType && pseudoCSS(props._lastOfType, ":last-of-type")}
`;
