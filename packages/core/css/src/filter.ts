import { CSSProps } from "./types";

export type FilterCSSProps = Partial<
  Pick<CSSProps, "filter" | "backdropFilter">
>;

export const FilterCSSPropSet = new Set<string>(["filter", "backdropFilter"]);
