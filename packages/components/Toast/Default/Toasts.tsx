import React, { PropsWithChildren, useEffect } from "react";
import { CSSProps } from "@damons-ui/react-core";
import { Directions, OverlapToastsProps, StackToastsProps } from "./types";
import { useToast } from "./context";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";

import * as S from "./styles";

export type ToastsContainerStyledProps = { direction: Directions } & CSSProps;

export type ToastsProps = { direction: Directions } & PropsWithChildren &
  CSSProps;

export const Toasts = ({ ...props }: OverlapToastsProps) => {
  const { type } = useToast();

  switch (type) {
    case "stack": {
      return <StackToasts {...props} />;
    }

    case "overlap": {
      return <OverlapToasts {...props} />;
    }

    default: {
      return null;
    }
  }
};

export const StackToasts = ({
  direction = "top",
  animationDirection = "top",
  ...props
}: StackToastsProps) => {
  const { toasts, remove, updateDirection } = useToast();

  useEffect(() => {
    updateDirection(direction);
  }, [direction]);

  return (
    <LazyMotion features={domAnimation}>
      <StackToasts.Container direction={direction} {...props}>
        <AnimatePresence>
          {[...toasts].map(([id, toast], index) => (
            <StackToasts.Item
              key={id}
              direction={direction}
              variants={S.getVarient(animationDirection)}
              initial="initial"
              animate="animate"
              exit="exit"
              zIndex={index}
            >
              {toast.icon}
              {toast.message}

              <button onClick={() => remove(id)}>❌</button>
            </StackToasts.Item>
          ))}
        </AnimatePresence>
      </StackToasts.Container>
    </LazyMotion>
  );
};

StackToasts.Container = S.Container;

StackToasts.Item = m(S.Item, { forwardMotionProps: true });

export const OverlapToasts = ({
  direction = "top",
  animationDirection = "top",
  ...props
}: OverlapToastsProps) => {
  const { toasts, remove, updateDirection } = useToast();

  useEffect(() => {
    updateDirection(direction);
  }, [direction]);

  return (
    <LazyMotion features={domAnimation}>
      <OverlapToasts.Container direction={direction} {...props}>
        <AnimatePresence>
          {[...toasts].map(([id, toast], index) => (
            <OverlapToasts.Item
              key={id}
              direction={direction}
              variants={S.getVarient(animationDirection)}
              initial="initial"
              animate="animate"
              exit="exit"
              zIndex={index}
            >
              {toast.icon}
              {toast.message}

              <button onClick={() => remove(id)}>❌</button>
            </OverlapToasts.Item>
          ))}
        </AnimatePresence>
      </OverlapToasts.Container>
    </LazyMotion>
  );
};

OverlapToasts.Container = S.Container;

OverlapToasts.Item = m(S.Item, { forwardMotionProps: true });
