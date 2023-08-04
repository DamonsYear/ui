import React from "react";
import { TDefaultProps } from "./Default.types";
import * as S from "./Default.styles";

export const Default = ({ as = "span", children, ...props }: TDefaultProps) => {
  return (
    <S.Text as={as} {...props}>
      {children}
    </S.Text>
  );
};
