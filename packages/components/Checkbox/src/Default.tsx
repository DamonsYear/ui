import React, { PropsWithChildren } from "react";
import styled, { css } from "css-in-js";
import { CSSProps, baseCSS } from "@damons-ui/react-core";
import Box from "@damons-ui/box";
import { TCheckbox } from "./types";

type TCheckBoxContainer = PropsWithChildren;
export function CheckBox({
  children,

  boxSizing,

  zIndex,

  display,
  flexDirection,
  justifyContent,
  alignItems,

  alignSelf,
  justifySelf,

  position,
  top,
  right,
  bottom,
  left,

  width,
  maxWidth,
  minWidth,

  height,
  maxHeight,
  minHeight,

  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,

  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,

  background,
  backgroundColor,

  border,
  borderWidth,
  borderStyle,
  borderRadius,

  lineHeight,
  color,
  fontSize,

  transform,
  transition,

  _after,
  _before,
  _active,
  _disabled,
  _enabled,
  _firstOfType,
  _focus,
  _hover,
  _lastOfType,
}: TCheckbox) {
  return (
    <label>
      <CheckBox.Container>
        <CheckBox.Inner></CheckBox.Inner>
      </CheckBox.Container>

      <CheckBox.Style
        type="checkbox"
        boxSizing={boxSizing}
        zIndex={zIndex}
        display={display}
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        alignItems={alignItems}
        alignSelf={alignSelf}
        justifySelf={justifySelf}
        position={position}
        top={top}
        right={right}
        bottom={bottom}
        left={left}
        width={width}
        maxWidth={maxWidth}
        minWidth={minWidth}
        height={height}
        maxHeight={maxHeight}
        minHeight={minHeight}
        margin={margin}
        marginTop={marginTop}
        marginRight={marginRight}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        padding={padding}
        paddingTop={paddingTop}
        paddingRight={paddingRight}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        background={background}
        backgroundColor={backgroundColor}
        border={border}
        borderWidth={borderWidth}
        borderStyle={borderStyle}
        borderRadius={borderRadius}
        lineHeight={lineHeight}
        color={color}
        fontSize={fontSize}
        transform={transform}
        transition={transition}
        _before={_before}
        _after={_after}
        _active={_active}
        _disabled={_disabled}
        _enabled={_enabled}
        _focus={_focus}
        _hover={_hover}
        _firstOfType={_firstOfType}
        _lastOfType={_lastOfType}
      >
        {children}
      </CheckBox.Style>
    </label>
  );
}

CheckBox.Style = styled.input<CSSProps>`
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

CheckBox.Container = function Container({ children }: TCheckBoxContainer) {
  return (
    <Box width="40px" height="40px" borderRadius="4px" background="#752bed">
      {children}
    </Box>
  );
};

CheckBox.Inner = function Inner() {
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 40 40"
    >
      <polyline
        fill="none"
        stroke="#fff"
        strokeWidth="4px"
        points="8 18 18 28 32 12"
      />
    </svg>
  );
};
