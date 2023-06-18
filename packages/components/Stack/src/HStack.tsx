import React from "react";
import styled, { css } from "css-in-js";
import { CSSProps } from "@damons-ui/react-core";
import { TStack, TStyledStack } from "./types";

/**
 * @description
 * [x] spacing: 컴포넌트 간의 세로 간격을 조정한다.
 */
export function HStack({
  children,

  spacing,

  boxSizing,

  zIndex,

  display = "flex",
  flexDirection = "column",
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
}: TStack) {
  return (
    <HStack.Style
      spacing={spacing}
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
    </HStack.Style>
  );
}

const baseCSS = () => css<CSSProps>`
  box-sizing: ${(props) => props.boxSizing};
  z-index: ${(props) => props.zIndex};

  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};

  align-self: ${(props) => props.alignSelf};
  justify-self: ${(props) => props.justifySelf};

  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};

  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};

  height: ${(props) => props.height};
  max-height: ${(props) => props.maxHeight};
  min-height: ${(props) => props.minHeight};

  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};

  padding: ${(props) => props.padding};
  padding-top: ${(props) => props.paddingTop};
  padding-right: ${(props) => props.paddingRight};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};

  border: ${(props) => props.border};
  border-width: ${(props) => props.borderWidth};
  border-style: ${(props) => props.borderStyle};
  border-radius: ${(props) => props.borderRadius};

  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => props.fontFamily};
  letter-spacing: ${(props) => props.letterSpacing};

  background: ${(props) => props.background};
  background-color: ${(props) => props.backgroundColor};

  opacity: ${(props) => props.opacity};

  transform: ${(props) => props.transform};
  transform-origin: ${(props) => props.transformOrigin};
  transition: ${(props) => props.transition};

  visibility: ${(props) => props.visibility};
`;

HStack.Style = styled.button<TStyledStack>`
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

  * {
    &:not(:last-of-type) {
      margin-right: ${(props) => props.spacing};
    }
  }
`;
