import styled from "styled-components";

export type TStyledTbodyProps = {
  layout: "vertical" | "horizontal";
};
export const Container = styled.article`
  border-top: 1px solid lightgray;
  border-left: 1px solid lightgray;
`;

export const VerticalBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const HorizontalBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
