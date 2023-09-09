import { useEffect } from "react";
import { useToast } from "./context";
import { TToastStoreState } from "./types";

export const useToasts = ({
  direction,
  toastHeight,
  toastGutter,
}: Pick<TToastStoreState, "direction"> &
  Partial<Pick<TToastStoreState, "toastHeight" | "toastGutter">>) => {
  const {
    toastHeight: stateToastHeight,
    toastGutter: stateToastGutter,
    updateDirection,
    updateToastHeight,
    updateToastGutter,
  } = useToast();

  const height = toastHeight ?? stateToastHeight;
  const gutter = toastGutter ?? stateToastGutter;

  useEffect(() => {
    updateDirection(direction);

    updateToastHeight(height);
    updateToastGutter(gutter);
  }, [direction]);

  return {
    toastHeight: height,
    toastGutter: gutter,
  };
};
