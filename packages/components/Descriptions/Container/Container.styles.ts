import { CSSProps } from "@damons-ui/react-core";
import styled from "css-in-js";

export const Container = styled.article<CSSProps>`
  border-top: 1px solid ${(props) => props.borderColor};
`;

export const VerticalBody = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

export const HorizontalBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
