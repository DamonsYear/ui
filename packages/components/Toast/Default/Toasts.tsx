import React, { useEffect } from "react";

import { OverlapToastsProps, StackToastsProps, ToastsProps } from "./types";
import { useToast } from "./context";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";

import * as S from "./styles";

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
  const {
    toastHeight: stateToastHeight,
    toastGutter: stateToastGutter,
    toasts,
    remove,
    updateDirection,
    updateToastHeight,
    updateToastGutter,
  } = useToast();

  const toastHeight = propsToastHeight ?? stateToastHeight;
  const toastGutter = propsToastGutter ?? stateToastGutter;

  const getHeight = ({
    heightUnit = "px",
    gutterUnit = "px",
  }: {
    heightUnit?: "px";
    gutterUnit?: "px";
  }) => {
    const height = toastHeight.replace(heightUnit, "");
    const gutter = toastGutter.replace(gutterUnit, "");

    return Number(height) + Number(gutter);
  };

  console.log({ toastHeight, toastGutter });

  useEffect(() => {
    updateDirection(direction);

    updateToastHeight(toastHeight);
    updateToastGutter(toastGutter);
  }, [direction]);

  return (
    <LazyMotion features={domAnimation}>
      <StackToasts.Container direction={direction}>
        <AnimatePresence>
          {[...toasts].map(([id, toast], index) => (
            <StackToasts.Item
              key={id}
              direction={direction}
              variants={S.getVarient(
                animationDirection,
                getHeight({ heightUnit: "px", gutterUnit: "px" }) * index
              )}
              initial="initial"
              animate="animate"
              exit="exit"
              zIndex={index}
            >
              {toast.icon}
              {toast.message}

              <button onClick={() => remove(id)}>O</button>
            </StackToasts.Item>
          ))}
        </AnimatePresence>
      </StackToasts.Container>
    </LazyMotion>
  );
};

StackToasts.Container = S.Container;

StackToasts.Item = m(S.StackItem, { forwardMotionProps: true });

export const OverlapToasts = ({
  direction = "top",
  animationDirection = "bottomToTop",
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
