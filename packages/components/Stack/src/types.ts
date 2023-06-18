import { CSSProps } from "@damons-ui/react-core";
import { PropsWithChildren } from "react";

export type StackOriginProps = {
  spacing: string;
};

export type TStyledStack = StackOriginProps & CSSProps;
export type TStack = StackOriginProps & CSSProps & PropsWithChildren;
