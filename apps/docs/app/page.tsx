"use client";

import { FixedToast, Toasts, useToast } from "@damons-ui/toast";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function Page() {
  const [isActive, setIsActive] = useState(false);

  const { add } = useToast();

  useEffect(() => {
    add("1", {
      message: "토스트입니다!",
      icon: <Image src="/success.svg" alt="info" width={24} height={24} />,
    });
    add("2", {
      message: "토스트2입니다!",
      icon: <Image src="/info.svg" alt="info" width={24} height={24} />,
    });
  }, [add]);

  const onClose = () => {
    setIsActive(false);
  };

  return (
    <>
      <Toasts direction="top" />
      <Toasts direction="topRight" />
      <Toasts direction="topLeft" />
      <Toasts direction="left" />
      <Toasts direction="right" />
      <Toasts direction="bottom" />
      <Toasts direction="bottomLeft" />
      <Toasts direction="bottomRight" />

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
