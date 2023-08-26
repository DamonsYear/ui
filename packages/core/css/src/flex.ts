import { CSSProps } from "./types";

export type FlexCSSProps = Pick<
  CSSProps,
  | "justifyContent"
  | "justifyItems"
  | "justifySelf"
  | "justifyTracks"
  | "alignContent"
  | "alignItems"
  | "alignSelf"
  | "alignTracks"
  | "flexDirection"
  | "flex"
  | "flexBasis"
  | "flexFlow"
  | "flexGrow"
  | "flexShrink"
  | "flexWrap"
  | "gap"
>;

export const FlexCSSPropSet = new Set<string>([
  "justifyContent",
  "justifyItems",
  "justifySelf",
  "justifyTracks",
  "alignContent",
  "alignItems",
  "alignSelf",
  "alignTracks",
  "flexDirection",
  "flex",
  "flexBasis",
  "flexFlow",
  "flexGrow",
  "flexShrink",
  "flexWrap",
  "gap",
]);
