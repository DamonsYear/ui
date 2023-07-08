import { CSSProps } from "@damons-ui/react-core";
import { HTMLAttributes, PropsWithChildren } from "react";

export type TTitle<ElementType = HTMLHeadingElement> = {
  title?: string;
} & CSSProps &
  HTMLAttributes<ElementType> &
  PropsWithChildren;
