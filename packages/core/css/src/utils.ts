import { AdvancedPseudoSet, BasePseudoSet } from "./pseudo";
import { AdvancedPseudosPropKeys, BasePseudosPropKeys } from "./types";

export const getPrefixDash = (s: string) => `-${s.toLowerCase()}`;

const OneDashPrefixList = ["moz", "khtml", "webkit", "ms"];

export const transformPseudoSelector = (char: string) => {
  if (OneDashPrefixList.some((testCase) => char.startsWith(testCase))) {
    return getPrefixDash(char).replace(/[A-Z]/g, getPrefixDash);
  }

  return char.replace(/[A-Z]/g, getPrefixDash);
};

export const union = <SetKey extends string>(...args: Set<SetKey>[]) => {
  return new Set(args.map((arg) => [...arg]).flat());
};

export const transformStyleProp = (
  char: string | BasePseudosPropKeys | AdvancedPseudosPropKeys
) => {
  if (
    union(BasePseudoSet, AdvancedPseudoSet).has(
      char as BasePseudosPropKeys | AdvancedPseudosPropKeys
    )
  ) {
    return transformPseudoSelector(char.replace(/_/g, ":"));
  }

  return transformPseudoSelector(char);
};
