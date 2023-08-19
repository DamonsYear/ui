export const getPrefixDash = (s: string) => `-${s.toLowerCase()}`;

const OneDashPrefixList = ["moz", "khtml", "webkit", "ms"];

export const toSnakeCase = (char: string) => {
  if (OneDashPrefixList.some((testCase) => char.startsWith(testCase))) {
    return getPrefixDash(char).replace(/[A-Z]/g, getPrefixDash);
  }

  return char.replace(/[A-Z]/g, getPrefixDash);
};
