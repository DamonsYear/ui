import { PropsWithChildren } from "react";
import {
  TItemContainerProps,
  TItemContentProps,
  TItemLabelProps,
} from "./Item.styles";

export type TItemProps = {
  isRow?: boolean;
  label: string;
  labelHeight?: TItemLabelProps["height"];
  contentHeight?: TItemContentProps["height"];
} & Pick<TItemContainerProps, "gridWidth"> &
  PropsWithChildren;
