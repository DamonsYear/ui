import React, { PropsWithChildren } from "react";
import styled from "css-in-js";
import { CSSProps, StyledComponentCSSProps } from "../types/css";

type TButton = CSSProps & PropsWithChildren;

export function Button({
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
}: TButton) {
  return (
    <Button.Style
      $boxSizing={boxSizing}
      $zIndex={zIndex}
      $display={display}
      $flexDirection={flexDirection}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $alignSelf={alignSelf}
      $justifySelf={justifySelf}
      $position={position}
      $top={top}
      $right={right}
      $bottom={bottom}
      $left={left}
      $width={width}
      $maxWidth={maxWidth}
      $minWidth={minWidth}
      $height={height}
      $maxHeight={maxHeight}
      $minHeight={minHeight}
      $margin={margin}
      $marginTop={marginTop}
      $marginRight={marginRight}
      $marginBottom={marginBottom}
      $marginLeft={marginLeft}
      $padding={padding}
      $paddingTop={paddingTop}
      $paddingRight={paddingRight}
      $paddingBottom={paddingBottom}
      $paddingLeft={paddingLeft}
      $background={background}
      $backgroundColor={backgroundColor}
      $border={border}
      $borderWidth={borderWidth}
      $borderStyle={borderStyle}
      $borderRadius={borderRadius}
      $lineHeight={lineHeight}
      $color={color}
      $fontSize={fontSize}
      $transform={transform}
      $transition={transition}
    >
      {children}
    </Button.Style>
  );
}

type TButtonStyle = StyledComponentCSSProps;
Button.Style = styled.button<TButtonStyle>``;
