import { createContext, useContext } from "react";

const initialState = {
  color: "",
  backgroundColor: "",
};

export const themeStore = createContext(initialState);

export const useDamonsUIStore = () => useContext(themeStore);
