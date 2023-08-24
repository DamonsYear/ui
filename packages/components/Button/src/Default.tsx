import React from "react";
import styled from "css-in-js";
import { CSSProps, basePropsCSS } from "@damons-ui/react-core";
import { TButton } from "./types";

export function Button({ children, ...props }: TButton) {
  return <Button.Style {...props}>{children}</Button.Style>;
}

Button.Style = styled.button<CSSProps>`
  ${(props) => {
    return basePropsCSS(props);
  }}
`;
