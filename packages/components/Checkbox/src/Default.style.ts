import styled, { css } from "css-in-js";
import { CSSProps, baseCSS } from "@damons-ui/react-core";

import Box from "@damons-ui/box";

import { TCheckBoxInner } from "./types";

export const Label = styled.label<CSSProps>`
  position: relative;

  display: block;

  ${baseCSS}

  ${(props) =>
    props._before &&
    css`
      &::before {
        ${baseCSS}
      }
    `}

${(props) =>
    props._after &&
    css`
      &::after {
        ${baseCSS}
      }
    `}

${(props) =>
    props._active &&
    css`
      &:active {
        ${baseCSS}
      }
    `}

${(props) =>
    props._disabled &&
    css`
      &:disabled {
        ${baseCSS}
      }
    `}

${(props) =>
    props._enabled &&
    css`
      &:enabled {
        ${baseCSS}
      }
    `}

${(props) =>
    props._focus &&
    css`
      &:focus {
        ${baseCSS}
      }
    `}

${(props) =>
    props._hover &&
    css`
      &:hover {
        ${baseCSS}
      }
    `}

${(props) =>
    props._firstOfType &&
    css`
      &:first-of-type {
        ${baseCSS}
      }
    `}
  
${(props) =>
    props._lastOfType &&
    css`
      &:last-of-type {
        ${baseCSS}
      }
    `}
`;

export const Container = styled(Box)<CSSProps>`
  ${baseCSS}

  ${(props) =>
    props._before &&
    css`
      &::before {
        ${baseCSS}
      }
    `}

${(props) =>
    props._after &&
    css`
      &::after {
        ${baseCSS}
      }
    `}

${(props) =>
    props._active &&
    css`
      &:active {
        ${baseCSS}
      }
    `}

${(props) =>
    props._disabled &&
    css`
      &:disabled {
        ${baseCSS}
      }
    `}

${(props) =>
    props._enabled &&
    css`
      &:enabled {
        ${baseCSS}
      }
    `}

${(props) =>
    props._focus &&
    css`
      &:focus {
        ${baseCSS}
      }
    `}

${(props) =>
    props._hover &&
    css`
      &:hover {
        ${baseCSS}
      }
    `}

${(props) =>
    props._firstOfType &&
    css`
      &:first-of-type {
        ${baseCSS}
      }
    `}
  
${(props) =>
    props._lastOfType &&
    css`
      &:last-of-type {
        ${baseCSS}
      }
    `}
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
  ${baseCSS}

  ${(props) =>
    props._before &&
    css`
      &::before {
        ${baseCSS}
      }
    `}

${(props) =>
    props._after &&
    css`
      &::after {
        ${baseCSS}
      }
    `}

${(props) =>
    props._active &&
    css`
      &:active {
        ${baseCSS}
      }
    `}

${(props) =>
    props._disabled &&
    css`
      &:disabled {
        ${baseCSS}
      }
    `}

${(props) =>
    props._enabled &&
    css`
      &:enabled {
        ${baseCSS}
      }
    `}

${(props) =>
    props._focus &&
    css`
      &:focus {
        ${baseCSS}
      }
    `}

${(props) =>
    props._hover &&
    css`
      &:hover {
        ${baseCSS}
      }
    `}

${(props) =>
    props._firstOfType &&
    css`
      &:first-of-type {
        ${baseCSS}
      }
    `}
  
${(props) =>
    props._lastOfType &&
    css`
      &:last-of-type {
        ${baseCSS}
      }
    `}
`;
