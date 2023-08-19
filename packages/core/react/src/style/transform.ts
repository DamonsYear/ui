export const toSnakeCase = (char: string) => {
  return char.replace(/[A-Z]/g, (s) => `-${s.toLowerCase()}`);
};
