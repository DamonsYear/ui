import styled from "css-in-js";
import { TInitialDescriptionsState } from "../Container/Container.context";
import { CSSProps, basePropsCSS } from "@damons-ui/react-core";

export type TItemContainerProps = {
  layout: TInitialDescriptionsState["layout"];
} & CSSProps;

export const ItemContainer = styled.section<TItemContainerProps>`
  box-sizing: border-box;

  display: ${(props) => (props.layout === "horizontal" ? "flex" : "block")};
  width: ${(props) => props.width};

  border-left: 1px solid ${(props) => props.borderColor};

  ${basePropsCSS}
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

  width: 100%;

  height: ${(props) => props.height};
  background-color: lightgray;

  border-right: 1px solid ${(props) => props.borderColor};
  border-bottom: 1px solid ${(props) => props.borderColor};

  ${basePropsCSS}
`;

export type TItemContentProps = {
  height: string;
} & CSSProps;
export const Content = styled.div<TItemContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;

  width: 100%;
  height: ${(props) => props.height};

  border-right: 1px solid ${(props) => props.borderColor};
  border-bottom: 1px solid ${(props) => props.borderColor};

  ${basePropsCSS}
`;
