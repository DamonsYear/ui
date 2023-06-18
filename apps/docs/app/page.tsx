"use client";
import Box from "@damons-ui/box";
import { Button } from "@damons-ui/button";
import { HStack, VStack } from "@damons-ui/stack";

export default function Page() {
  return (
    <Box>
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
