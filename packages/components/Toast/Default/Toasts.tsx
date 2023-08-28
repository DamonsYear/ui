import React, { PropsWithChildren, useEffect } from "react";
import { CSSProps } from "@damons-ui/react-core";
import { Directions } from "./types";
import { useToast } from "./context";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";

import * as S from "./styles";

export type ToastsContainerStyledProps = { direction: Directions } & CSSProps;

export type ToastsProps = { direction: Directions } & PropsWithChildren &
  CSSProps;

export const Toasts = ({
  direction = "top",
  animationDirection = "top",
  ...props
}: {
  direction: Directions;
  animationDirection: Exclude<
    Directions,
    "topLeft" | "topRight" | "bottomLeft" | "bottomRight"
  >;
} & PropsWithChildren) => {
  const { toasts, remove, updateDirection } = useToast();

  useEffect(() => {
    updateDirection(direction);
  }, [direction]);

  return (
    <LazyMotion features={domAnimation}>
      <Toasts.Container direction={direction} {...props}>
        <AnimatePresence>
          {[...toasts].map(([id, toast]) => (
            <Toasts.Item
              key={id}
              direction={direction}
              variants={S.getVarient(animationDirection)}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {toast.icon}
              {toast.message}

              <button onClick={() => remove(id)}>❌2</button>
            </Toasts.Item>
          ))}
        </AnimatePresence>
      </Toasts.Container>
    </LazyMotion>
  );
};

Toasts.Container = S.Container;

Toasts.Item = m(S.Item, { forwardMotionProps: true });
