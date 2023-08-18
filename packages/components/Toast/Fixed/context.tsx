import { useTimeout } from "@damons-ui/react-hooks";
import { PropsWithChildren, createContext, useContext, useState } from "react";

export type TFixedToastContextState = {
  isActive: boolean;
  onClose: () => void;
  textActive: boolean;
  showText: () => void;
  hideText: () => void;
};

const FixedToastContext = createContext<TFixedToastContextState>({
  isActive: false,
  onClose: () => {},
  textActive: false,
  showText: () => {},
  hideText: () => {},
});

export const FixedToastContextProvider = ({
  isActive,
  onClose,
  children,
  activeDuration,
}: {
  isActive: boolean;
  onClose: () => void;
  activeDuration: number;
} & PropsWithChildren) => {
  const [textActive, setTextActive] = useState(false);

  const { start: inactiveToast } = useTimeout(() => {
    onClose();
  }, 100);

  const { start: hideText } = useTimeout(() => {
    setTextActive(false);
    inactiveToast();
  }, activeDuration);

  const { start: showText } = useTimeout(() => {
    setTextActive(true);
    hideText();
  }, 100);

  return (
    <FixedToastContext.Provider
      value={{
        isActive,
        onClose,
        textActive,
        hideText,
        showText,
      }}
    >
      {children}
    </FixedToastContext.Provider>
  );
};

export const useFixedToastContext = () => useContext(FixedToastContext);
