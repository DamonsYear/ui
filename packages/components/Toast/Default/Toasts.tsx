import React from "react";

import { OverlapToastsProps, StackToastsProps, ToastsProps } from "./types";
import { useToast } from "./context";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";

import * as S from "./styles";
import { useToasts } from "./hooks";
import { getNumber } from "./utils";

export const Toasts = ({
  type: propsType = "overlap",
  ...props
}: ToastsProps) => {
  const { type: toastType, updateType } = useToast();

  const type = propsType ?? toastType;

  React.useEffect(() => {
    updateType(type);
  }, []);

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
  animationDirection = "topToBottom",
  toastHeight: propsToastHeight,
  toastGutter: propsToastGutter,
}: StackToastsProps) => {
  const { toasts, remove } = useToast();

  const { toastHeight, toastGutter } = useToasts({
    direction,
    toastHeight: propsToastHeight,
    toastGutter: propsToastGutter,
  });

  return (
    <LazyMotion features={domAnimation}>
      <StackToasts.Container direction={direction}>
        <AnimatePresence>
          {[...toasts].map(([id, toast], index) => (
            <StackToasts.Item
              key={id}
              direction={direction}
              variants={S.getStackVarient({
                direction: animationDirection,
                height:
                  (getNumber(toastHeight) + getNumber(toastGutter)) * index,
                toastHeight: getNumber(toastHeight),
              })}
              initial="initial"
              animate="animate"
              exit="exit"
              zIndex={index}
              gutter={toastGutter}
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
  animationDirection = "topToBottom",
  toastHeight: propsToastHeight = "64px",
  toastGutter: propsToastGutter,
  ...props
}: OverlapToastsProps) => {
  const { toasts, remove } = useToast();

  const { toastGutter } = useToasts({
    direction,
    toastHeight: propsToastHeight,
    toastGutter: propsToastGutter,
  });
  return (
    <LazyMotion features={domAnimation}>
      <OverlapToasts.Container direction={direction} {...props}>
        <AnimatePresence>
          {[...toasts].map(([id, toast], index) => (
            <OverlapToasts.Item
              key={id}
              direction={direction}
              variants={S.getOverlapVarient({
                direction: animationDirection,
              })}
              initial="initial"
              animate="animate"
              exit="exit"
              zIndex={index}
              gutter={toastGutter}
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
