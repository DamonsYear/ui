import { VStack } from "@damons-ui/stack";
import React, { PropsWithChildren } from "react";
import { useDescriptions } from "../Container/Container.context";

export type TCol = {
  unit?: number;
  height?: string;
} & PropsWithChildren;

export const Col = ({ children, unit = 3, height }: TCol) => {
  const { descriptionsState } = useDescriptions();

  return (
    <VStack
      flexWrap="wrap"
      height={height}
      width={`${((descriptionsState?.containerWidth ?? 0) * unit) / 12}px`}
    >
      {children}
    </VStack>
  );
};
