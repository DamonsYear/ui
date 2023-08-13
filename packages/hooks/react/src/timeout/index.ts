import { useRef } from "react";

export const useTimeout = (callback: () => void, time: number) => {
  const timerId = useRef<number | null>(null);
  const callbackRef = useRef<() => void>(callback);

  const clear = () => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = null;
  };

  const start = () => {
    if (timerId?.current) {
      clear();
    }

    timerId.current = setTimeout(() => {
      callbackRef?.current();
    }, time);
  };

  return {
    start,
    clear,
  };
};
