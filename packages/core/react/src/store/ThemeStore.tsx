import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { CSSProps } from "../style";

type ContextState = {
  theme: ThemeState;
  setTheme: Dispatch<SetStateAction<ThemeState>>;
};
type ThemeState = {
  descriptions: {
    row: CSSProps;
    col: CSSProps;
    item: CSSProps;
  };
};

const Descriptions = {
  borderColor: "#BEBEBE",
} as const;

const initialThemeState = {
  descriptions: {
    row: { ...Descriptions },
    col: { ...Descriptions },
    item: { ...Descriptions },
  },
};

const initialState = {
  theme: initialThemeState,
  setTheme: () => {},
};

export const ThemeStore = createContext<ContextState>(initialState);

export const DamonsUIThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeState>(initialThemeState);

  return (
    <ThemeStore.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeStore.Provider>
  );
};

export const useDamonsUITheme = () => useContext(ThemeStore);
