import React, { useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";

import * as S from "./FixedToast.style";

import { TFixedToastProps } from "./types";

import { useTimeout } from "@damons-ui/react-hooks";

export const FixedToast = ({
  text,
  textColor = "#fafafa",
  isActive,
  children,
  textStyle,
  activeDuration = 5000,
  onClose,
  ...props
}: TFixedToastProps) => {
  const [textActive, setTextActive] = useState(false);

  const { start: inactiveToast } = useTimeout(() => {
    onClose();
  }, 100);

  const { start: hideText } = useTimeout(() => {
    setTextActive(false);
    inactiveToast();
  }, activeDuration);

  const { start: showText } = useTimeout(() => {
    setTextActive(true);
    hideText();
  }, 100);

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
          <AnimatePresence>
            {isActive && textActive && text && (
              <FixedToast.Text
                key={textActive ? "toast-text--active" : "toast-text--inactive"}
                color={textColor}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1, delay: 0.2 }}
                onAnimationComplete={hideText}
                {...textStyle}
              >
                {text}
              </FixedToast.Text>
            )}
          </AnimatePresence>
          {children}
        </FixedToast.Container>
      </AnimatePresence>
    </LazyMotion>
  );
};

FixedToast.Container = m(S.Container, { forwardMotionProps: false });
FixedToast.Text = m(S.Text, { forwardMotionProps: false });
