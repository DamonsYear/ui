import React from "react";
import { TTitle } from "./Title.types";
import * as S from "./Title.styles";

export const Title = ({ title, ...rest }: TTitle) => {
  return <S.Title {...rest}>{title}</S.Title>;
};
