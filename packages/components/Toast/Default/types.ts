import { CSSProps } from "@damons-ui/react-core";
import { ReactNode } from "react";

export type TToastStoreState = {
  updateDirection: (direction: Directions) => void;
  toasts: Map<string | number, TToast>;
  add: (id: string | number, toast: TToast) => void;
  remove: (id: string | number) => void;
  clear: () => void;
};

export type TToast = {
  message: string;
  icon: "info" | "error" | "success" | ReactNode;
} & CSSProps;

export type Directions =
  | "top"
  | "topLeft"
  | "topRight"
  | "right"
  | "bottomRight"
  | "bottom"
  | "bottomLeft"
  | "left";
