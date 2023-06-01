"use client";

import * as React from "react";
import { CSSProps } from "./types/css";

type TButton = CSSProps;
export const Button = ({ props }: TButton) => {
  const a = 2;
  return <button onClick={() => alert("boop")}>Boop</button>;
};

const Component = () => {
  return <Button boxSizing="content-box" />;
};
