import { PropsWithChildren } from "react";
import { TItemContainerProps } from "./Item.styles";

export type TItemProps = {
  isRow?: boolean;
  label: string;
} & Pick<TItemContainerProps, "gridWidth"> &
  PropsWithChildren;
