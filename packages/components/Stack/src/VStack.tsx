import React from "react";
import styled from "css-in-js";
import { basePropsCSS } from "@damons-ui/react-core";
import { TStack, TStyledStack } from "./types";

/**
 * @description
 * [x] spacing: 컴포넌트 간의 세로 간격을 조정한다.
 */
export function VStack({
  children,

  spacing,

  boxSizing,

  zIndex,

  display = "flex",
  flexDirection = "column",
  ...props
}: TStack) {
  return (
    <VStack.Style
      spacing={spacing}
      boxSizing={boxSizing}
      zIndex={zIndex}
      display={display}
      flexDirection={flexDirection}
      {...props}
    >
      {children}
    </VStack.Style>
  );
}

VStack.Style = styled.div<TStyledStack>`
  ${basePropsCSS}

  * {
    &:not(:last-of-type) {
      margin-bottom: ${(props) => props.spacing};
    }
  }
`;
