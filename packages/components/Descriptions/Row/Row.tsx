import { HStack } from "@damons-ui/stack";
import React, { PropsWithChildren } from "react";
import { useDescriptions } from "../Container/Container.context";

export type TRow = {
  unit?: number;
  height?: string;
} & PropsWithChildren;

export const Row = ({ children, unit = 6, height }: TRow) => {
  const { descriptionsState } = useDescriptions();

  return (
    <HStack
      flexWrap="wrap"
      height={height}
      width={`${((descriptionsState.containerWidth ?? 0) * unit) / 12}px`}
    >
      {children}
    </HStack>
  );
};
