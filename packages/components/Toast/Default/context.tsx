import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { TToast, TToastStoreState } from "./types";

const ToastContext = createContext<TToastStoreState>({
  toasts: new Map(),
  add: () => {},
  remove: () => {},
  clear: () => {},
});

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toasts, setToasts] = useState<Map<string | number, TToast>>(new Map());

  const add = (id: string | number, toast: TToast) => {
    setToasts((state) => new Map(state.set(id, toast)));
  };

  const remove = (id: string | number) => {
    setToasts((state) => {
      const nextState = new Map(state);
      nextState.delete(id);

      return nextState;
    });
  };

  const clear = () => {
    setToasts(new Map());
  };

  const value = useMemo(
    () => ({
      add,
      remove,
      clear,
      toasts,
    }),
    [toasts, add, remove, clear]
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
