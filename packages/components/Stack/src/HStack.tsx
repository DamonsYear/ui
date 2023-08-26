import React from "react";
import styled from "css-in-js";
import { basePropsCSS } from "@damons-ui/react-core";
import { TStack, TStyledStack } from "./types";

/**
 * @description
 * [x] spacing: 컴포넌트 간의 세로 간격을 조정한다.
 */
export function HStack({
  children,

  spacing,

  boxSizing,

  zIndex,

  display = "flex",
  flexDirection = "row",
  ...props
}: TStack) {
  return (
    <HStack.Style
      spacing={spacing}
      boxSizing={boxSizing}
      zIndex={zIndex}
      display={display}
      flexDirection={flexDirection}
      {...props}
    >
      {children}
    </HStack.Style>
  );
}

HStack.Style = styled.div<TStyledStack>`
  ${basePropsCSS}

  * {
    &:not(:last-of-type) {
      margin-right: ${(props) => props.spacing};
    }
  }
`;
