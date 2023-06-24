"use client";
import Box from "@damons-ui/box";
import { Button } from "@damons-ui/button";
import { CheckBox } from "@damons-ui/checkbox";
import { HStack, VStack } from "@damons-ui/stack";
import styled from "styled-components";

const CheckLine = styled.polyline`
  fill: none;
  stroke: #ffffff;
  stroke-width: 4px;
  stroke-miterlimit: 10;
  stroke-dashoffset: 0;
  stroke-dasharray: 60;
  transition: all 0.3s;
  animation: dash 0.3s linear alternate 1;
  @keyframes dash {
    from {
      stroke-dashoffset: 60;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export default function Page() {
  return (
    <Box>
      체크박스
      <CheckBox></CheckBox>
      <Box width="40px" height="40px" borderRadius="4px" background="#752bed">
        <svg
          width="100%"
          height="100%"
          xmlns="http://w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 40 40"
        >
          <CheckLine
            fill="none"
            stroke="#fff"
            strokeWidth="4px"
            points="8 18 18 28 32 12"
          />
        </svg>
      </Box>
      <VStack spacing="10px">
        <Button>안녕하세요!</Button>
        <Button>반가워요!</Button>
      </VStack>
      <HStack spacing="10px" marginTop="20px">
        <Button>안녕하세요!</Button>
        <Button>반가워요!</Button>
      </HStack>
    </Box>
  );
}
