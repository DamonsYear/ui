import React from "react";

import { TCheckBoxContainer, TCheckBoxInner, TCheckbox } from "./types";
import * as S from "./Default.style";

export function CheckBox({
  id,

  checked,
  onChange,

  activeBackground,
  defaultBackground,

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
  const onChangeInput = () => {
    onChange(!checked);
  };

  return (
    <S.Label
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
      htmlFor={id}
    >
      <CheckBox.Container
        checked={checked}
        activeBackground={activeBackground}
        defaultBackground={defaultBackground}
      >
        <CheckBox.Inner checked={checked} />
      </CheckBox.Container>
      {children}

      <S.Input
        id={id}
        type="checkbox"
        // position="absolute"
        // visibility="hidden"
        width="10px"
        height="10px"
        margin="-1px"
        checked={checked}
        onChange={onChangeInput}
      />
    </S.Label>
  );
}

CheckBox.Container = function Container({
  checked,
  children,
  activeBackground,
  defaultBackground,
}: TCheckBoxContainer) {
  return (
    <S.Container
      width="40px"
      height="40px"
      border="1px solid #ddd"
      borderRadius="4px"
      background={checked ? activeBackground : defaultBackground}
      transition="all 0.1s"
    >
      {children}
    </S.Container>
  );
};

CheckBox.Inner = function Inner({ checked }: TCheckBoxInner) {
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 40 40"
    >
      <S.BaseLine
        fill="none"
        stroke="#fff"
        strokeWidth="4px"
        checked={checked}
        points="8 18 18 28 32 12"
      />
    </svg>
  );
};
