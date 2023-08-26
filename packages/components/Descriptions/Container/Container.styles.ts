import { CSSProps, basePropsCSS } from "@damons-ui/react-core";
import styled from "css-in-js";

export const Container = styled.article<CSSProps>`
  border-top: 1px solid ${(props) => props.borderColor};

  ${basePropsCSS}
`;

export const VerticalBody = styled.div<CSSProps>`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;

  ${basePropsCSS}
`;

export const HorizontalBody = styled.div<CSSProps>`
  display: flex;
  flex-wrap: wrap;

  ${basePropsCSS}
`;
