import React from "react";
import styled from "css-in-js";
import { CSSProps, baseCSS, pseudoCSS } from "@damons-ui/react-core";
import { TBox } from "./types";

export default function Box({
  onClick,

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
}: TBox) {
  return (
    <Box.Style
      onClick={onClick}
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
    </Box.Style>
  );
}

Box.Style = styled.div<CSSProps>`
  ${(props) => baseCSS(props)}

  ${(props) => props._disabled && pseudoCSS(props._disabled, ":disabled")}
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
