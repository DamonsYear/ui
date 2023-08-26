export const toKebabCase = (char: string) => {
  return char.replace(/[A-Z]/g, (s) => `-${s.toLowerCase()}`);
};
