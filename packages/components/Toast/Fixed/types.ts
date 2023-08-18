import { CSSProps } from "@damons-ui/react-core";

import { PropsWithChildren } from "react";

export type TFixedToastProps = {
  isActive: boolean;
  activeDuration?: number;
  onClose: () => void;
} & CSSProps &
  PropsWithChildren;

export type TFixedToastTextProps = CSSProps & PropsWithChildren;
