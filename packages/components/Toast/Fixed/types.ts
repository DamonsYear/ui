import { CSSProps } from "@damons-ui/react-core";
import { Transition } from "framer-motion";
import { PropsWithChildren } from "react";

export type TFixedToastProps = {
  text?: string;
  textColor?: CSSProps["color"];
  textStyle?: Omit<CSSProps, "transition"> & Transition;
  isActive: boolean;
} & CSSProps &
  PropsWithChildren;
