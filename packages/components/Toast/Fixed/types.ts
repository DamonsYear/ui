import { CSSProps } from "@damons-ui/react-core";
import { AnimationProps } from "framer-motion";

import { PropsWithChildren } from "react";

export type TFixedToastProps = {
  text?: string;
  textColor?: CSSProps["color"];
  textStyle?: CSSProps & AnimationProps;
  isActive: boolean;
  activeDuration?: number;
  onClose: () => void;
} & CSSProps &
  PropsWithChildren;
