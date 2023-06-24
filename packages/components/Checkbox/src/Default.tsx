import React from "react";
import styled, { css } from "css-in-js";
import { CSSProps, baseCSS } from "@damons-ui/react-core";
import Box from "@damons-ui/box";
import { TCheckBoxContainer, TCheckBoxInner, TCheckbox } from "./types";

export function CheckBox({
  checked,
  onChange,

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
  const onChangeCheckBox = (e: Event) => {
    onChange(!checked, e);
  };

  return (
    <CheckBox.Label
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
      _after={_after}
      _before={_before}
      _active={_active}
      _disabled={_disabled}
      _enabled={_enabled}
      _firstOfType={_firstOfType}
      _focus={_focus}
      _hover={_hover}
      _lastOfType={_lastOfType}
    >
      <CheckBox.Container checked={checked} onClick={onChangeCheckBox}>
        <CheckBox.Inner checked={checked} />
        {children}
      </CheckBox.Container>

      <CheckBox.Style
        type="checkbox"
        position="absolute"
        visibility="hidden"
        width="1px"
        height="1px"
        margin="-1px"
        checked={checked}
      />
    </CheckBox.Label>
  );
}

CheckBox.Label = styled.label<CSSProps>`
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

CheckBox.ContainerStyle = styled(Box)<TCheckBoxContainer>`
  background-color: ${(props) => (props.checked ? "#ffffff" : "#752bed")};
`;

CheckBox.Container = function Container({
  checked,
  onClick,
  children,
}: TCheckBoxContainer) {
  return (
    <CheckBox.ContainerStyle
      width="40px"
      height="40px"
      borderRadius="4px"
      background="#752bed"
      checked={checked}
      onClick={onClick}
    >
      {children}
    </CheckBox.ContainerStyle>
  );
};

const BaseLine = styled.polyline<TCheckBoxInner>`
  fill: none;
  stroke: #ffffff;
  stroke-width: 4px;
  stroke-miterlimit: 10;
  stroke-dashoffset: 0;
  stroke-dasharray: 60;
  transition: all 0.3s;

  ${(props) =>
    !props.checked &&
    css`
      stroke-dashoffset: 0;
    `}
`;

CheckBox.Inner = function Inner({ checked }: TCheckBoxInner) {
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 40 40"
    >
      <BaseLine points="8 18 18 28 32 12" checked={checked} />
    </svg>
  );
};
