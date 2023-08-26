import styled from "css-in-js";
import { CSSProps, basePropsCSS } from "@damons-ui/react-core";

import Box from "@damons-ui/box";

import { TCheckBoxInner } from "./types";

export const Label = styled.label<CSSProps>`
  position: relative;

  display: block;

  ${basePropsCSS}
`;

export const Container = styled(Box)<CSSProps>`
  ${basePropsCSS}
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
  ${basePropsCSS}
`;
