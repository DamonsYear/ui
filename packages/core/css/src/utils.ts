import { AdvancedPseudoSet, BasePseudoSet } from "./set";

export const getPrefixDash = (s: string) => `-${s.toLowerCase()}`;

const OneDashPrefixList = ["moz", "khtml", "webkit", "ms"];

export const toSnakeCase = (char: string) => {
  if (OneDashPrefixList.some((testCase) => char.startsWith(testCase))) {
    return getPrefixDash(char).replace(/[A-Z]/g, getPrefixDash);
  }

  return char.replace(/[A-Z]/g, getPrefixDash);
};

export const transformStyleProp = (char: string) => {
  if (BasePseudoSet.has(char) || AdvancedPseudoSet.has(char)) {
    return toSnakeCase(char.replace(/_/g, (s) => `:${s}`));
  }

  return toSnakeCase(char);
};

export const union = (...args: Set<string>[]) => {
  return new Set(args.map((arg) => [...arg]).flat());
};
