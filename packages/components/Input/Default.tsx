import React from "react";
import * as S from "./index.styles";
import { TInput } from "./types";

export const Default = ({ id, placeholder, ...rest }: TInput) => {
  return (
    <S.Input id={id} placeholder={placeholder} onChange={rest?.onChange} />
  );
};
