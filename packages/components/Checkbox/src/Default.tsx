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

  ...rest
}: TCheckbox) {
  const onChangeInput = () => {
    onChange(!checked);
  };

  return (
    <S.Label htmlFor={id} {...rest}>
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
