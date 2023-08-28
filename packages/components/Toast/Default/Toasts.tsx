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
  const { toasts, remove, updateDirection } = useToast();

  useEffect(() => {
    updateDirection(direction);
  }, [direction]);

  return (
    <Toasts.Container direction={direction} {...props}>
      {[...toasts].map(([id, toast]) => (
        <Toasts.Item key={id} direction={direction}>
          {toast.icon}
          {toast.message}
          <button onClick={() => remove(id)}>❌</button>
        </Toasts.Item>
      ))}
    </Toasts.Container>
  );
};

Toasts.Container = styled.div<ToastsContainerStyledProps>`
  position: fixed;
  z-index: 10000;

  ${basePropsCSS}

  ${(props) => {
    if (!props.direction) return;

    switch (props.direction) {
      case "left": {
        return css`
          display: flex;
          flex-direction: column;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        `;
      }
      case "topLeft": {
        return css`
          display: flex;
          flex-direction: column;
          top: 0;
          left: 0;
        `;
      }
      case "topRight": {
        return css`
          display: flex;
          flex-direction: column;
          top: 0;
          right: 0;
        `;
      }
      case "right": {
        return css`
          display: flex;
          flex-direction: column;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        `;
      }
      case "top": {
        return css`
          display: flex;
          flex-direction: column;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        `;
      }

      case "bottomLeft": {
        return css`
          display: flex;
          flex-direction: column-reverse;
          bottom: 0;
          left: 0;
        `;
      }
      case "bottom": {
        return css`
          display: flex;
          flex-direction: column-reverse;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        `;
      }
      case "bottomRight": {
        return css`
          display: flex;
          flex-direction: column-reverse;
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

Toasts.Item = styled.div<ToastsContainerStyledProps>`
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
