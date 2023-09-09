import { basePropsCSS } from "@damons-ui/react-core";
import { AnimationDirection, StyledToastItemProps } from "./types";
import styled, { css } from "css-in-js";
import { StyledToastsContainerProps } from "./types";
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

export const getStackVarient = ({
  direction,
  height,
  toastHeight,
}: {
  direction: AnimationDirection;
  toastHeight: number;
  height?: number;
}): Variants => {
  const nextHeight = (() => {
    if (!height)
      return {
        initial: {},
        animate: {},
      };

    return ["topToBottom", "leftToRight", "rightToLeft"].includes(direction)
      ? {
          initial: { y: height - toastHeight },
          animate: { y: height },
        }
      : {
          initial: { y: -1 * (height - toastHeight) },
          animate: { y: -1 * height },
        };
  })();

  switch (direction) {
    case "bottomToTop": {
      return {
        initial: {
          ...toastBaseAnimation.initial,
          ...bottomAnimation.from,
          ...nextHeight.initial,
        },
        animate: {
          ...toastBaseAnimation.animate,
          ...topAnimation.to,
          ...nextHeight.animate,
        },
        exit: {
          ...toastBaseAnimation.exit,
          ...bottomAnimation.from,
        },
      };
    }

    case "leftToRight": {
      return {
        initial: {
          ...toastBaseAnimation.initial,
          ...leftAnimation.from,
          ...(nextHeight.initial.y ? nextHeight.initial : { y: 0 }),
        },
        animate: {
          ...toastBaseAnimation.animate,
          ...rightAnimation.to,
          ...nextHeight.animate,
        },
        exit: {
          ...toastBaseAnimation.exit,
          ...leftAnimation.from,
          ...(nextHeight.initial.y ? nextHeight.initial : { y: 0 }),
        },
      };
    }
    case "topToBottom": {
      return {
        initial: {
          ...toastBaseAnimation.initial,
          ...topAnimation.from,
          ...nextHeight.initial,
        },
        animate: {
          ...toastBaseAnimation.animate,
          ...bottomAnimation.to,
          ...nextHeight.animate,
        },
        exit: {
          ...toastBaseAnimation.exit,
          ...topAnimation.from,
        },
      };
    }
    case "rightToLeft": {
      return {
        initial: {
          ...toastBaseAnimation.initial,
          ...rightAnimation.from,
          ...(nextHeight.initial.y ? nextHeight.initial : { y: 0 }),
        },
        animate: {
          ...toastBaseAnimation.animate,
          ...leftAnimation.to,
          ...nextHeight.animate,
        },
        exit: {
          ...toastBaseAnimation.exit,
          ...rightAnimation.from,
          ...(nextHeight.initial.y ? nextHeight.initial : { y: 0 }),
        },
      };
    }

    default: {
      throw new Error("invalid direction");
    }
  }
};

export const getOverlapVarient = ({
  direction,
}: {
  direction: AnimationDirection;
}): Variants => {
  switch (direction) {
    case "bottomToTop": {
      return {
        initial: {
          ...toastBaseAnimation.initial,
          ...bottomAnimation.from,
        },
        animate: {
          ...toastBaseAnimation.animate,
          ...topAnimation.to,
        },
        exit: {
          ...toastBaseAnimation.exit,
          ...bottomAnimation.from,
        },
      };
    }

    case "leftToRight": {
      return {
        initial: {
          ...toastBaseAnimation.initial,
          ...leftAnimation.from,
        },
        animate: {
          ...toastBaseAnimation.animate,
          ...rightAnimation.to,
        },
        exit: {
          ...toastBaseAnimation.exit,
          ...leftAnimation.from,
        },
      };
    }
    case "topToBottom": {
      return {
        initial: {
          ...toastBaseAnimation.initial,
          ...topAnimation.from,
        },
        animate: {
          ...toastBaseAnimation.animate,
          ...bottomAnimation.to,
        },
        exit: {
          ...toastBaseAnimation.exit,
          ...topAnimation.from,
        },
      };
    }
    case "rightToLeft": {
      return {
        initial: {
          ...toastBaseAnimation.initial,
          ...rightAnimation.from,
        },
        animate: {
          ...toastBaseAnimation.animate,
          ...leftAnimation.to,
        },
        exit: {
          ...toastBaseAnimation.exit,
          ...rightAnimation.from,
        },
      };
    }

    default: {
      throw new Error("invalid direction");
    }
  }
};

export const Container = styled.div<StyledToastsContainerProps>`
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

export const Item = styled.div<StyledToastItemProps>`
  position: absolute;

  &:first-of-type {
    position: relative;
  }

  box-sizing: border-box;

  display: flex;
  align-items: center;

  width: 300px;
  height: 64px;

  padding: 16px;

  box-shadow: 0px 3px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  background-color: #fff;

  img {
    margin-right: 8px;
  }

  color: #333;
  font-size: 14px;

  ${basePropsCSS}

  ${(props) => {
    if (!props.direction) return;

    switch (props.direction) {
      case "top": {
        return css`
          top: 0;
          left: 0;
          margin-top: ${props.gutter};
        `;
      }
      case "topLeft": {
        return css`
          top: 0;
          left: 0;
          margin-top: ${props.gutter};
          margin-left: ${props.gutter};
        `;
      }
      case "topRight": {
        return css`
          top: 0;
          right: 0;
          margin-top: ${props.gutter};
          margin-right: ${props.gutter};
        `;
      }
      case "left": {
        return css`
          left: 0;
          margin-left: ${props.gutter};
        `;
      }

      case "right": {
        return css`
          right: 0;
          margin-right: ${props.gutter};
        `;
      }

      case "bottom": {
        return css`
          bottom: 0;
          margin-bottom: ${props.gutter};
        `;
      }
      case "bottomLeft": {
        return css`
          bottom: 0;
          left: 0;
          margin-bottom: ${props.gutter};
          margin-left: ${props.gutter};
        `;
      }
      case "bottomRight": {
        return css`
          bottom: 0;
          right: 0;
          margin-bottom: ${props.gutter};
          margin-right: ${props.gutter};
        `;
      }

      default: {
        return;
      }
    }
  }}
`;
