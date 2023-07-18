import { styled } from "styled-components";
import { TInitialDescriptionsState } from "../Container/Container.context";

export type TItemContainerProps = {
  layout: TInitialDescriptionsState["layout"];
  gridWidth: TInitialDescriptionsState["gridWidth"];
};

export const ItemContainer = styled.section<TItemContainerProps>`
  display: ${(props) => (props.layout === "horizontal" ? "flex" : "block")};
  width: calc(100% * ${(props) => props.gridWidth});
`;
