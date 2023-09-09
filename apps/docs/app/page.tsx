"use client";

import { FixedToast, Toasts, useToast } from "@damons-ui/toast";
import Image from "next/image";

import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

export default function Page() {
  const [isActive, setIsActive] = useState(false);

  const { add } = useToast();

  const onAddToast = () => {
    const id = uuidv4();

    add(id, {
      message: id,
      icon: <Image src="/success.svg" alt="info" width={24} height={24} />,
    });
  };

  const onClose = () => {
    setIsActive(false);
  };

  return (
    <>
      <Toasts direction="top" type="stack" />
      <Toasts direction="topRight" />
      <Toasts direction="topLeft" />
      <Toasts direction="left" animationDirection="leftToRight" />
      <Toasts direction="right" />
      <Toasts
        direction="bottom"
        type="stack"
        animationDirection="bottomToTop"
      />
      <Toasts direction="bottomLeft" />
      <Toasts direction="bottomRight" />

      <button
        onClick={onAddToast}
        style={{ position: "relative", zIndex: 100000000 }}
      >
        CLICK
      </button>

      <FixedToast
        isActive={isActive}
        backgroundColor="#123467"
        borderRadius={"34px"}
        width="68px"
        height="68px"
        bottom="20px"
        right="20px"
        activeDuration={2000}
        onClose={onClose}
      >
        <FixedToast.Text color="#fff">테스트 중!</FixedToast.Text>
      </FixedToast>
    </>
  );
}
