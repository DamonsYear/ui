import { PropsWithChildren } from "react";
import { TContextProps } from "./Container.context";

export type TContainerProps = {
  layout?: TContextProps["layout"];
  labelHeight?: string;
  contentHeight?: string;
} & PropsWithChildren;

export type TInnerProps = PropsWithChildren;
