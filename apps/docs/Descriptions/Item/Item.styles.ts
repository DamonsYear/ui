import { css, styled } from "styled-components";
import { TInitialDescriptionsState } from "../Container/Container.context";
import { CSSProps } from "@damons-ui/react-core";

export type TItemContainerProps = {
  layout: TInitialDescriptionsState["layout"];
  gridWidth: TInitialDescriptionsState["gridWidth"];
} & CSSProps;

export const ItemContainer = styled.section<TItemContainerProps>`
  box-sizing: border-box;
  display: ${(props) => (props.layout === "horizontal" ? "flex" : "block")};
  width: calc(100% * ${(props) => props.gridWidth});
  /* border-right: 1px solid lightgray; */
  border-bottom: 1px solid ${(props) => props.borderColor};
`;

export type TItemLabelProps = {
  layout: TInitialDescriptionsState["layout"];
  height: string;
} & CSSProps;
export const Label = styled.header<TItemLabelProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  height: ${(props) => props.height};
  background-color: lightgray;
  border-right: 1px solid ${(props) => props.borderColor};

  ${(props) =>
    props.layout === "vertical" &&
    css`
      border-bottom: 1px solid ${props.borderColor};
    `}
`;

export type TItemContentProps = {
  height: string;
} & CSSProps;
export const Content = styled.div<TItemContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  height: ${(props) => props.height};
  border-right: 1px solid ${(props) => props.borderColor};
`;
