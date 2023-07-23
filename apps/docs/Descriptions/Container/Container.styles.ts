import { CSSProps } from "@damons-ui/react-core";
import styled from "styled-components";

export const Container = styled.article<CSSProps>`
  border-left: 1px solid ${(props) => props.borderColor};
`;

export const VerticalBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const HorizontalBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
