import { CSSProps } from "@damons-ui/react-core";
import { PropsWithChildren } from "react";

export type TDefaultProps = {
  as: "p" | "span" | "div" | "strong";
} & PropsWithChildren &
  CSSProps;
