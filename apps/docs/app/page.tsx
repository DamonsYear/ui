"use client";

import Box from "@damons-ui/box";
import { Button } from "@damons-ui/button";
import { FixedToast } from "@damons-ui/toast";
import styled from "css-in-js";
import { useState } from "react";

const Div = styled.div`
  color: red;
  background-color: #111;
`;
export default function Page() {
  const [isActive, setIsActive] = useState(false);

  const onToggle = () => {
    setIsActive((state) => !state);
  };

  const onClose = () => {
    setIsActive(false);
  };

  return (
    <>
      <Box color="#fb0" background="#333">
        Hello World!
        <Div>HEllo...</Div>
        <button onClick={onToggle}>CLICK</button>
        <Button background="#124215">CLICK!!!</Button>
        <Button background="red">CLICK!!!</Button>
        <Button
          background="purple"
          _after={{
            cursor: "pointer",
            content: "",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            background: "#f22fff",
            marginLeft: "10px",
          }}
        >
          CLICK!!!!!
        </Button>
      </Box>
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
