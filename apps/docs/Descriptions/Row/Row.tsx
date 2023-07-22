import { HStack } from "@damons-ui/stack";
import React, { PropsWithChildren } from "react";
import { useDescriptions } from "../Container/Container.context";

export type TRow = {
  span?: number;
  unit?: number;
  height?: string;
} & PropsWithChildren;

export const Row = ({ children, unit, height }: TRow) => {
  const { descriptionsState } = useDescriptions();

  return (
    <HStack
      flexWrap="wrap"
      height={height}
      width={unit / descriptionsState.unit}
    >
      {children}
    </HStack>
  );
};
