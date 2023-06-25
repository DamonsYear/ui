import { CSSProps } from "@damons-ui/react-core";
import { PropsWithChildren } from "react";

export type TBox = {
  onClick?: (e: React.MouseEvent) => void;
} & CSSProps &
  PropsWithChildren;
