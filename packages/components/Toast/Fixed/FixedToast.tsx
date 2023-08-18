import React from "react";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";

import * as S from "./FixedToast.style";

import { TFixedToastProps, TFixedToastTextProps } from "./types";

import { FixedToastContextProvider, useFixedToastContext } from "./context";

export const FixedToast = ({
  isActive,
  children,
  activeDuration = 5000,
  onClose,
  ...props
}: TFixedToastProps) => {
  return (
    <FixedToastContextProvider
      isActive={isActive}
      onClose={onClose}
      activeDuration={activeDuration}
    >
      <FixedToastComponent {...props}>{children}</FixedToastComponent>
    </FixedToastContextProvider>
  );
};

function FixedToastComponent({
  children,
  ...props
}: Omit<TFixedToastProps, "isActive" | "onClose">) {
  const { isActive, showText } = useFixedToastContext();
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        <FixedToast.Container
          key={isActive ? "toast-active" : "toast-inactive"}
          initial={{ width: 68 }}
          animate={{ width: isActive ? 240 : 68 }}
          exit={{ width: 68 }}
          onAnimationComplete={showText}
          {...props}
        >
          {children}
        </FixedToast.Container>
      </AnimatePresence>
    </LazyMotion>
  );
}
FixedToast.Container = m(S.Container, { forwardMotionProps: false });

const MotionText = m(S.Text, { forwardMotionProps: false });

FixedToast.Text = function FixedToastText({
  children,
  ...props
}: TFixedToastTextProps) {
  const { isActive, textActive, hideText } = useFixedToastContext();
  return (
    <AnimatePresence>
      {isActive && textActive && children && (
        <MotionText
          key={textActive ? "toast-text--active" : "toast-text--inactive"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, delay: 0.2 }}
          onAnimationComplete={hideText}
          {...props}
        >
          {children}
        </MotionText>
      )}
    </AnimatePresence>
  );
};
