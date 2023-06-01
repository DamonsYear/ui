enum Directions {
  "top" = "top",
  "right" = "right",
  "bottom" = "bottom",
  "left" = "left",
}

declare type CSSPositions = {
  [k in Directions]: string | number;
};

export type BoxSizing = "content-box" | "border-box" | "inherit";
export type ZIndex = number;
export type Display = "flex" | "inline-flex" | "block" | "inline" | "none";
export type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";

declare type CSSProps = {
  boxSizing?: BoxSizing;

  zIndex?: ZIndex;

  display?: Display;
  flexDirection?: FlexDirection;
  justifyContent?: string;
  alignItems?: string;

  alignSelf?: string;
  justifySelf?: string;

  postion?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;

  width?: string;
  maxWidth?: string;
  minWidth?: string;

  height?: string;
  maxHeight?: string;
  minHeight?: string;

  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;

  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;

  background?: string;
  backgroundColor?: string;

  border?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderRadius?: string;

  lineHeight?: string;
  color?: string;
  fontSize?: string;

  transform?: string;
  transtion?: string;
};

declare type StyledComponentCSSProps = {
  $boxSizing?: BoxSizing;

  $zIndex?: ZIndex;

  $display?: Display;
  $flexDirection?: FlexDirection;
  $justifyContent?: string;
  $alignItems?: string;

  $alignSelf?: string;
  $justifySelf?: string;

  $postion?: string;
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;

  $width?: string;
  $maxWidth?: string;
  $minWidth?: string;

  $height?: string;
  $maxHeight?: string;
  $minHeight?: string;

  $margin?: string;
  $marginTop?: string;
  $marginRight?: string;
  $marginBottom?: string;
  $marginLeft?: string;

  $padding?: string;
  $paddingTop?: string;
  $paddingRight?: string;
  $paddingBottom?: string;
  $paddingLeft?: string;

  $background?: string;
  $backgroundColor?: string;

  $border?: string;
  $borderWidth?: string;
  $borderStyle?: string;
  $borderRadius?: string;

  $lineHeight?: string;
  $color?: string;
  $fontSize?: string;

  $transform?: string;
  $transtion?: string;
};
