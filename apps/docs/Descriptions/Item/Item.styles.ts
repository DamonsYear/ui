import { styled } from "styled-components";
import { TInitialDescriptionsState } from "../Container/Container.context";

export type TItemContainerProps = {
  layout: TInitialDescriptionsState["layout"];
  gridWidth: TInitialDescriptionsState["gridWidth"];
};

export const ItemContainer = styled.section<TItemContainerProps>`
  box-sizing: border-box;
  display: ${(props) => (props.layout === "horizontal" ? "flex" : "block")};
  width: calc(100% * ${(props) => props.gridWidth});
  /* border-right: 1px solid lightgray; */
  border-bottom: 1px solid lightgray;
`;

export type TItemLabelProps = {
  height: string;
};
export const Label = styled.header<TItemLabelProps>`
  height: ${(props) => props.height};
  background-color: lightgray;
  border-left: 1px solid lightgray;
`;

export type TItemContentProps = {
  height: string;
};
export const Content = styled.div<TItemContentProps>`
  box-sizing: border-box;
  height: ${(props) => props.height};
  border-right: 1px solid lightgray;
`;
