import styled, { css } from "css-in-js";
import React, { PropsWithChildren, useEffect } from "react";
import { CSSProps, basePropsCSS } from "@damons-ui/react-core";
import { Directions } from "./types";
import { useToast } from "./context";

export type ToastsContainerStyledProps = { direction: Directions } & CSSProps;

export type ToastsProps = { direction: Directions } & PropsWithChildren &
  CSSProps;

export const Toasts = ({
  direction = "top",
  ...props
}: { direction: Directions } & PropsWithChildren) => {
  const { toasts, updateDirection } = useToast();

  useEffect(() => {
    updateDirection(direction);
  }, [direction]);

  return (
    <Toasts.Container direction={direction} {...props}>
      {[...toasts].map(([key, toast]) => (
        <Toasts.Item key={key}>{toast.message}</Toasts.Item>
      ))}
    </Toasts.Container>
  );
};

const directionCSS = (props: { direction: Directions }) => {
  switch (props.direction) {
    case "left":
    case "topLeft":
    case "topRight":
    case "right":
    case "top": {
      return css`
        display: flex;
        flex-direction: column;
      `;
    }

    case "bottomLeft":
    case "bottom":
    case "bottomRight": {
      return css`
        display: flex;
        flex-direction: column-reverse;
      `;
    }

    default: {
      return;
    }
  }
};

Toasts.Container = styled.div<ToastsContainerStyledProps>`
  position: fixed;
  z-index: 10000;

  ${basePropsCSS}

  ${(props) => props.direction && directionCSS(props.direction)}

  ${(props) => {
    if (!props.direction) return;

    switch (props.direction) {
      case "left": {
        return css`
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        `;
      }
      case "topLeft": {
        return css`
          top: 0;
          left: 0;
        `;
      }
      case "topRight": {
        return css`
          top: 0;
          right: 0;
        `;
      }
      case "right": {
        return css`
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        `;
      }
      case "top": {
        return css`
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        `;
      }

      case "bottomLeft": {
        return css`
          bottom: 0;
          left: 0;
        `;
      }
      case "bottom": {
        return css`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        `;
      }
      case "bottomRight": {
        return css`
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

Toasts.Item = styled.div<CSSProps>`
  box-sizing: border-box;

  display: flex;

  width: 200px;
  height: 120px;

  padding: 16px;

  ${basePropsCSS}
`;
