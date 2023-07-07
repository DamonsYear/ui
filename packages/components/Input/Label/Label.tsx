import React from "react";
import * as S from "./Label.styles";
import { LabelProps } from "./types";

export const Label = ({ children, htmlFor }: LabelProps) => {
  return <S.Label htmlFor={htmlFor}>{children}</S.Label>;
};
