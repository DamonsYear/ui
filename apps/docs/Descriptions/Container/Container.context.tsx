import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { TContainerProps } from "./types";

export type TInitialDescriptionsState = {
  layout: "vertical" | "horizontal";
  unit: number;
};

export const initialState: TInitialDescriptionsState = {
  layout: "horizontal",
  unit: 12,
};

export type TDescriptionsContext = {
  descriptionsState: TInitialDescriptionsState;
  setDescriptionsState: Dispatch<SetStateAction<TInitialDescriptionsState>>;
};

const DescriptionsContext = createContext<TDescriptionsContext>({
  descriptionsState: initialState,
  setDescriptionsState: () => {},
});

export const DescriptionsProvider = ({ layout, children }: TContainerProps) => {
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
