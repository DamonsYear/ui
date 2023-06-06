import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CSSProps } from "../style";

type ThemeState = {
  [K: string | number]: CSSProps;
};

const initialState = {};

export const ThemeStore = createContext(initialState);

export const DamonsUIThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeState>(initialState);

  return (
    <ThemeStore.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeStore.Provider>
  );
};

export const useDamonsUITheme = () => useContext(ThemeStore);
