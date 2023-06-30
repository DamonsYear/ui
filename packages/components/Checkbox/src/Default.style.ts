import styled from "css-in-js";
import { CSSProps, baseCSS, pseudoCSS } from "@damons-ui/react-core";

import Box from "@damons-ui/box";

import { TCheckBoxInner } from "./types";

export const Label = styled.label<CSSProps>`
  position: relative;

  display: block;

  ${(props) => baseCSS(props)}

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

export const Container = styled(Box)<CSSProps>`
  ${(props) => baseCSS(props)}

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

export const BaseLine = styled.polyline<TCheckBoxInner>`
  fill: none;
  stroke: #ffffff;
  stroke-width: 4px;
  stroke-miterlimit: 10;
  stroke-dashoffset: ${(props) => (props.checked ? 0 : 60)};
  stroke-dasharray: 60;
  transition: all 0.3s;
`;

export const Input = styled.input<CSSProps>`
  ${(props) => baseCSS(props)}

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
