import { CSSProps, basePropsCSS } from "@damons-ui/react-core";
import styled from "css-in-js";

export const Container = styled.section<CSSProps>`
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  ${basePropsCSS}
`;

export const Text = styled.p`
  margin: 0;

  ${basePropsCSS}
`;
