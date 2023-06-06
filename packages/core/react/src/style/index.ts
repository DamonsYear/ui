import type * as CSS from "csstype";

export type ComponentBaseCSSProps = CSS.Properties<string | number>;
export type ComponentHoverProps = {
  _hover?: ComponentBaseCSSProps;
};

export type ComponentActiveProps = {
  _active?: ComponentBaseCSSProps;
};

export type ComponentDisabledProps = {
  _disabled?: ComponentBaseCSSProps;
};

export type ComponentCheckedProps = {
  _checked?: ComponentBaseCSSProps;
};

export type ComponentPseudoBeforeProps = {
  _before?: ComponentBaseCSSProps;
};

export type ComponentPseudoAfterProps = {
  _after?: ComponentBaseCSSProps;
};

export type CSSProps = ComponentBaseCSSProps &
  ComponentHoverProps &
  ComponentActiveProps &
  ComponentDisabledProps &
  ComponentCheckedProps &
  ComponentPseudoBeforeProps &
  ComponentPseudoAfterProps;
