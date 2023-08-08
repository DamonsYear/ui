"use client";

import Box from "@damons-ui/box";
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

  return (
    <>
      <Box color="#fb0" background="#333">
        Hello World!
        <Div>HEllo...</Div>
        <button onClick={onToggle}>CLICK</button>
      </Box>
      <FixedToast
        text="테스트중!"
        isActive={isActive}
        backgroundColor="#123467"
        borderRadius={"34px"}
        width="68px"
        height="68px"
        bottom="20px"
        right="20px"
      ></FixedToast>
    </>
  );
}
