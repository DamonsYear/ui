import React from "react";
import * as S from "./index.styles";
import { TInput } from "./types";
import { Label } from "./Label";
import { v4 as uuidv4 } from "uuid";
import { Title } from "./Title/Title";

export const Input = ({
  id,
  title,
  placeholder,
  onChange,
  ...rest
}: TInput) => {
  const inputId = id ?? (uuidv4() as string);

  return (
    <Input.Label htmlFor={inputId}>
      {title && <Input.Title>{title}</Input.Title>}
      <S.Input
        id={inputId}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </Input.Label>
  );
};

Input.Title = Title;
Input.Label = Label;
