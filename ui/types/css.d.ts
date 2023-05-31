enum Directions {
  "top" = "top",
  "right" = "right",
  "bottom" = "bottom",
  "left" = "left",
}

declare type CSSPositions = {
  [k in Directions]: string | number;
};
