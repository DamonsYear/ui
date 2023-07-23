import { PropsWithChildren } from "react";
import { TItemContentProps, TItemLabelProps } from "./Item.styles";
import { CSSProps } from "@damons-ui/react-core";

export type TItemProps = {
  unit?: number;
  isRow?: boolean;
  label: string;
  labelHeight?: TItemLabelProps["height"];
  contentHeight?: TItemContentProps["height"];
  borderColor?: CSSProps["borderColor"];
} & PropsWithChildren;
