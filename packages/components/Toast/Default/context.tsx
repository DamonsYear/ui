import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { AnimationDirection, Directions, TToastStoreState } from "./types";

const ToastContext = createContext<TToastStoreState>({
  toasts: new Map(),

  add: () => {},
  remove: () => {},
  clear: () => {},

  direction: "top",
  updateDirection: () => {},

  toastHeight: "0px",
  updateToastHeight: () => {},

  animationDirection: "topToBottom",
  updateToastAnimationDirection: () => {},
});

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toasts, setToasts] = useState<TToastStoreState["toasts"]>(new Map());

  const [toastHeight, setToastHeight] = useState<string>("0px");

  const [direction, setDirection] = useState<Directions>("top");

  const [animationDirection, setAnimationDirection] =
    useState<AnimationDirection>("topToBottom");

  const updateToastHeight = (height: string) => {
    setToastHeight(height);
  };

  const updateToastAnimationDirection = (direction: AnimationDirection) => {
    setAnimationDirection(direction);
  };

  const add: TToastStoreState["add"] = (id, toast) => {
    const timerId = setTimeout(() => {
      remove(id);
    }, 1000);

    setToasts((state) => new Map(state.set(id, { ...toast, timerId })));
  };

  const remove: TToastStoreState["remove"] = (id) => {
    const toast = toasts.get(id);

    if (!toast) return;

    setToasts((state) => {
      const nextState = new Map(state);
      nextState.delete(id);

      return nextState;
    });

    clearTimeout(toast.timerId);
  };

  const clear = () => {
    setToasts(new Map());
  };

  const updateDirection: TToastStoreState["updateDirection"] = (value) => {
    setDirection(value);
  };

  const value = useMemo(
    () => ({
      toasts,

      add,
      remove,
      clear,

      direction,
      updateDirection,

      toastHeight,
      updateToastHeight,

      animationDirection,
      updateToastAnimationDirection,
    }),
    [
      toasts,

      add,
      remove,
      clear,

      direction,
      updateDirection,

      toastHeight,
      updateToastHeight,

      animationDirection,
      updateToastAnimationDirection,
    ]
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
