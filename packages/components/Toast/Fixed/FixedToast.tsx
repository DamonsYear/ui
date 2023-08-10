import React from "react";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";

import * as S from "./FixedToast.style";

import { Text } from "@damons-ui/text";
import { TFixedToastProps } from "./types";

export const FixedToast = ({
  text,
  textColor = "#fafafa",
  isActive,
  children,
  textStyle,
  ...props
}: TFixedToastProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        <FixedToast.Container
          key={isActive ? "toast-active" : "toast-inactive"}
          initial={{ width: 68 }}
          animate={{ width: isActive ? 240 : 68 }}
          exit={{ width: 68 }}
          {...props}
        >
          {isActive && text && (
            <FixedToast.Text as="p" color={textColor} margin="0" {...textStyle}>
              {text}
            </FixedToast.Text>
          )}
          {children}
        </FixedToast.Container>
      </AnimatePresence>
    </LazyMotion>
  );
};

FixedToast.Container = m(S.Container, { forwardMotionProps: false });
FixedToast.Text = m(Text, { forwardMotionProps: false });
