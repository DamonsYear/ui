import { CSSProps } from "@damons-ui/react-core";
import React, { PropsWithChildren } from "react";

export type PropsWithId = {
  id: string;
};

type TIntrinsicTranslate = "yes" | "no" | undefined;
export type TCheckBoxBaseProps = {
  checked: boolean;

  activeBackground: CSSProps["background"];
  defaultBackground: CSSProps["background"];

  translate?: TIntrinsicTranslate & CSSProps["translate"];
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
