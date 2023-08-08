import React from "react";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";

import * as S from "./FixedToast.style";

import { Text } from "@damons-ui/text";
import { TFixedToastProps } from "./types";

export const FixedToast = ({ text, isActive, ...props }: TFixedToastProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        <FixedToast.Container
          key={isActive ? "toast-active" : "toast-inactive"}
          initial={{ width: 68 }}
          animate={{ width: isActive ? 240 : 68 }}
          exit={{ width: 68 }}
          {...props}
        />

        {text && <FixedToast.Text as="p">{text}</FixedToast.Text>}
      </AnimatePresence>
    </LazyMotion>
  );
};

FixedToast.Container = m(S.Container, { forwardMotionProps: false });
FixedToast.Text = m(Text, { forwardMotionProps: false });
