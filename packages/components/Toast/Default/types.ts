import { CSSProps } from "@damons-ui/react-core";
import { PropsWithChildren, ReactNode } from "react";

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

export type OverlapToastsProps = {
  direction: Directions;
  animationDirection: Exclude<
    Directions,
    "topLeft" | "topRight" | "bottomLeft" | "bottomRight"
  >;
} & PropsWithChildren;

export type StackToastsProps = {
  direction: Directions;
  animationDirection: Exclude<
    Directions,
    "topLeft" | "topRight" | "bottomLeft" | "bottomRight"
  >;
} & PropsWithChildren;
