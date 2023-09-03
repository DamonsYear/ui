import { CSSProps } from "@damons-ui/react-core";
import { ReactNode } from "react";

export type TToast = {
  message: string;
  icon: "info" | "error" | "success" | ReactNode;
  timerId: number;
} & CSSProps;

export type TToastStoreState = {
  updateDirection: (direction: Directions) => void;
  toasts: Map<string | number, TToast>;
  add: (id: string | number, toast: Omit<TToast, "timerId">) => void;
  remove: (id: string | number) => void;
  clear: () => void;
  direction: Directions;
  updateToastHeight: (height: string) => void;
  toastHeight: string;
};

export type Directions =
  | "top"
  | "topLeft"
  | "topRight"
  | "right"
  | "bottomRight"
  | "bottom"
  | "bottomLeft"
  | "left";
