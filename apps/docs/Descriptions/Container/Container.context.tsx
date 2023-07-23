import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { Unit } from "@damons-ui/css-core";

export type TContextProps = {
  layout: "vertical" | "horizontal";
} & PropsWithChildren;

export type THeight = {
  height: number;
  heightUnit: Unit;
};
export type TInitialDescriptionsState = {
  layout: TContextProps["layout"];
  unit: number;
  containerWidth: number | null;
  label: THeight;
  content: THeight;
};

export const initialState: TInitialDescriptionsState = {
  layout: "horizontal",
  unit: 12,
  containerWidth: null,
  label: {
    height: 40,
    heightUnit: Unit.px,
  },
  content: {
    height: 40,
    heightUnit: Unit.px,
  },
};

export type TDescriptionsContext = {
  descriptionsState: TInitialDescriptionsState;
  setDescriptionsState: Dispatch<SetStateAction<TInitialDescriptionsState>>;
};

const DescriptionsContext = createContext<TDescriptionsContext>({
  descriptionsState: initialState,
  setDescriptionsState: () => {},
});

export const DescriptionsProvider = ({ layout, children }: TContextProps) => {
  const [descriptionsState, setDescriptionsState] =
    useState<TInitialDescriptionsState>({ ...initialState, layout });

  return (
    <DescriptionsContext.Provider
      value={{
        descriptionsState,
        setDescriptionsState,
      }}
    >
      {children}
    </DescriptionsContext.Provider>
  );
};

export const useDescriptions = () => useContext(DescriptionsContext);
