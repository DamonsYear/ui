import { CSSProps } from "@damons-ui/react-core";
import { ReactNode } from "react";

export type StyledToastsContainerProps = {
  direction: Directions;
} & CSSProps;
export type StyledToastItemProps = {
  direction: Directions;
  gutter: string;
} & CSSProps;

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
  updateToastGutter: (gutter: string) => void;
  toastHeight: string;
  toastGutter: string;
  animationDirection: AnimationDirection;
  updateToastAnimationDirection: (direction: AnimationDirection) => void;
  type: ToastType;
  updateType: (type: ToastType) => void;
};

export type ToastType = "stack" | "overlap";

export type Directions =
  | "top"
  | "topLeft"
  | "topRight"
  | "right"
  | "bottomRight"
  | "bottom"
  | "bottomLeft"
  | "left";

export type AnimationDirection =
  | "bottomToTop"
  | "topToBottom"
  | "leftToRight"
  | "rightToLeft";

export type ToastsProps = {
  type?: ToastType;
  direction: Directions;
  animationDirection?: AnimationDirection;
  toastGutter?: TToastStoreState["toastGutter"];
};

export type OverlapToastsProps = {
  toastHeight?: TToastStoreState["toastHeight"];
  toastGutter?: TToastStoreState["toastGutter"];
} & Omit<ToastsProps, "type" | "toastGutter">;

export type StackToastsProps = Partial<
  Pick<TToastStoreState, "toastHeight" | "toastGutter">
> &
  Omit<ToastsProps, "type">;
