"use client";
import Box from "@damons-ui/box";
import { Button } from "@damons-ui/button";
import { CheckBox } from "@damons-ui/checkbox";
import { HStack, VStack } from "@damons-ui/stack";
import { useState } from "react";

export default function Page() {
  const [checked, setChecked] = useState(true);
  const onChange = (value: boolean) => {
    setChecked(value);
  };

  return (
    <Box>
      <CheckBox
        id="test"
        checked={checked}
        onChange={onChange}
        activeBackground="#752bed"
        defaultBackground="white"
      >
        CheckBox Click!
      </CheckBox>
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
