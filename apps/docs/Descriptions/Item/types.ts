import { PropsWithChildren } from "react";
import {
  TItemContainerProps,
  TItemContentProps,
  TItemLabelProps,
} from "./Item.styles";
import { CSSProps } from "@damons-ui/react-core";

export type TItemProps = {
  isRow?: boolean;
  label: string;
  labelHeight?: TItemLabelProps["height"];
  contentHeight?: TItemContentProps["height"];
  borderColor?: CSSProps["borderColor"];
} & Pick<TItemContainerProps, "unit"> &
  PropsWithChildren;
