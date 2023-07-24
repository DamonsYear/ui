"use client";

import Box from "@damons-ui/box";
import styled from "css-in-js";

const Div = styled.div`
  color: red;
  background-color: #111;
`;
export default function Page() {
  return (
    <Box color="#fb0" background="#333">
      Hello World!
      <Div>HEllo...</Div>
    </Box>
  );
}
