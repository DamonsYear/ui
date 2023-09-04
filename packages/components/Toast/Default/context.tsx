import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { TToastStoreState, ToastType } from "./types";

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

  type: "overlap",
  updateType: () => {},
});

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [type, setType] = useState<ToastType>("overlap");

  const [toasts, setToasts] = useState<TToastStoreState["toasts"]>(new Map());

  const [toastHeight, setToastHeight] =
    useState<TToastStoreState["toastHeight"]>("0px");

  const [direction, setDirection] =
    useState<TToastStoreState["direction"]>("top");

  const [animationDirection, setAnimationDirection] =
    useState<TToastStoreState["animationDirection"]>("topToBottom");

  const updateType = (type: ToastType) => {
    setType(type);
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

  const clear: TToastStoreState["clear"] = () => {
    setToasts(new Map());
  };

  const updateDirection: TToastStoreState["updateDirection"] = (value) => {
    setDirection(value);
  };

  const updateToastHeight: TToastStoreState["updateToastHeight"] = (height) => {
    setToastHeight(height);
  };

  const updateToastAnimationDirection: TToastStoreState["updateToastAnimationDirection"] =
    (direction) => {
      setAnimationDirection(direction);
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

      updateType,
      type,
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

      type,
      updateType,
    ]
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
