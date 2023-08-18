import { CSSProps } from "@damons-ui/react-core";
import React, { PropsWithChildren } from "react";

export type PropsWithId = {
  id: string;
};

export type TCheckBoxBaseProps = {
  checked: boolean;

  activeBackground: CSSProps["background"];
  defaultBackground: CSSProps["background"];
};

export type TCheckBoxState = {
  onChange: (value: boolean, e?: React.ChangeEvent<HTMLInputElement>) => void;
} & TCheckBoxBaseProps;

export type TCheckBoxInner = {
  checked?: TCheckBoxBaseProps["checked"];
};

export type TCheckBoxContainer = TCheckBoxBaseProps & PropsWithChildren;

export type TCheckbox = TCheckBoxState &
  CSSProps &
  PropsWithId &
  PropsWithChildren;
