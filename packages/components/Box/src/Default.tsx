import React from "react";
import styled from "css-in-js";
import { CSSProps, basePropsCSS } from "@damons-ui/react-core";
import { TBox } from "./types";

export default function Box({
  onClick,
  children,

  ...props
}: TBox) {
  return (
    <Box.Style onClick={onClick} {...props}>
      {children}
    </Box.Style>
  );
}

Box.Style = styled.div<CSSProps>`
  ${basePropsCSS}
`;
