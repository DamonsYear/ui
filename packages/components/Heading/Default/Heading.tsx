import React from "react";
import { THeading } from "./types";
import * as S from "./Heading.styles";

export function Heading({ as = "h4", children, ...rest }: THeading) {
  return (
    <S.Heading as={as} {...rest}>
      {children}
    </S.Heading>
  );
}
