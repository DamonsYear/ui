import { CSSProps } from "@damons-ui/react-core";
import { HTMLAttributes, PropsWithChildren } from "react";

export type THeading = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & PropsWithChildren<HTMLAttributes<HTMLHeadingElement> & CSSProps>;
