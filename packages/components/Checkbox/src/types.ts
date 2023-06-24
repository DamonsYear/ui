import { CSSProps } from "@damons-ui/react-core";
import { PropsWithChildren } from "react";

export type TCheckBoxState = {
  checked: boolean;
  onChange: (value: boolean, e: Event) => void;
};

export type TCheckBoxInner = {
  checked: boolean;
};

export type TCheckBoxContainer = {
  checked: boolean;
  onClick: (e: Event) => void;
} & PropsWithChildren;

export type TCheckbox = TCheckBoxState & CSSProps & PropsWithChildren;
