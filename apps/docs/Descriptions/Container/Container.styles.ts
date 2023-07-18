import styled from "styled-components";

export type TStyledTbodyProps = {
  layout: "vertical" | "horizontal";
};
export const Container = styled.article``;

export const VerticalBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const HorizontalBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
