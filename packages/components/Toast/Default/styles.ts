import { basePropsCSS } from "@damons-ui/react-core";
import { Directions } from "./types";
import styled, { css } from "css-in-js";
import { ToastsContainerStyledProps } from "./Toasts";
import { Variants } from "framer-motion";

const bottomAnimation = {
  from: {
    y: 20,
  },
  to: {
    y: 0,
  },
};

const topAnimation = {
  from: {
    y: -20,
  },
  to: {
    y: 0,
  },
};

const leftAnimation = {
  from: {
    x: -20,
  },
  to: {
    x: 0,
  },
};

const rightAnimation = {
  from: {
    x: 20,
  },
  to: {
    x: 0,
  },
};

const toastBaseAnimation = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const getVarient = (direction: Directions): Variants => {
  switch (direction) {
    case "top": {
      return {
        initial: {
          ...toastBaseAnimation.initial,
          ...topAnimation.from,
        },
        animate: {
          ...toastBaseAnimation.animate,
          ...topAnimation.to,
        },
        exit: {
          ...toastBaseAnimation.exit,
          ...topAnimation.from,
        },
      };
    }

    case "right": {
      return {
        initial: {
          ...toastBaseAnimation.initial,
          ...rightAnimation.from,
        },
        animate: {
          ...toastBaseAnimation.animate,
          ...rightAnimation.to,
        },
        exit: {
          ...toastBaseAnimation.exit,
          ...rightAnimation.from,
        },
      };
    }
    case "bottom": {
      return {
        initial: {
          ...toastBaseAnimation.initial,
          ...bottomAnimation.from,
        },
        animate: {
          ...toastBaseAnimation.animate,
          ...bottomAnimation.to,
        },
        exit: {
          ...toastBaseAnimation.exit,
          ...bottomAnimation.from,
        },
      };
    }
    case "left": {
      return {
        initial: {
          ...toastBaseAnimation.initial,
          ...leftAnimation.from,
        },
        animate: {
          ...toastBaseAnimation.animate,
          ...leftAnimation.to,
        },
        exit: {
          ...toastBaseAnimation.exit,
          ...leftAnimation.from,
        },
      };
    }

    default: {
      throw new Error("invalid direction");
    }
  }
};

export const Container = styled.div<ToastsContainerStyledProps>`
  position: fixed;
  z-index: 10000;

  transition: all 0.2s;

  ${basePropsCSS}

  ${(props) => {
    if (!props.direction) return;

    switch (props.direction) {
      case "left": {
        return css`
          display: flex;
          flex-direction: column-reverse;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        `;
      }
      case "topLeft": {
        return css`
          display: flex;
          flex-direction: column-reverse;
          top: 0;
          left: 0;
        `;
      }
      case "topRight": {
        return css`
          display: flex;
          flex-direction: column-reverse;
          top: 0;
          right: 0;
        `;
      }
      case "right": {
        return css`
          display: flex;
          flex-direction: column-reverse;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        `;
      }
      case "top": {
        return css`
          display: flex;
          flex-direction: column-reverse;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        `;
      }

      case "bottomLeft": {
        return css`
          display: flex;
          flex-direction: column;
          bottom: 0;
          left: 0;
        `;
      }
      case "bottom": {
        return css`
          display: flex;
          flex-direction: column;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        `;
      }
      case "bottomRight": {
        return css`
          display: flex;
          flex-direction: column;
          bottom: 0;
          right: 0;
        `;
      }

      default: {
        return;
      }
    }
  }}
`;

export const Item = styled.div<ToastsContainerStyledProps>`
  box-sizing: border-box;

  display: flex;
  align-items: center;

  width: 300px;
  height: 64px;

  padding: 16px;

  box-shadow: 0px 3px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  ${basePropsCSS}

  img {
    margin-right: 8px;
  }

  color: #333;
  font-size: 14px;

  ${(props) => {
    if (!props.direction) return;

    switch (props.direction) {
      case "top":
      case "topLeft":
      case "topRight":
      case "left":
      case "right": {
        return css`
          margin-top: 12px;
        `;
      }

      case "bottom":
      case "bottomLeft":
      case "bottomRight": {
        return css`
          margin-bottom: 12px;
        `;
      }

      default: {
        return;
      }
    }
  }}
`;
