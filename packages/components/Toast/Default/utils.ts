export const getNumber = (str: string): number =>
  Number(str.replace(/[^\d]/g, ""));
