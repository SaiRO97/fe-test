export const myParseInt = (value: string): number => {
  const parseValue = Number(value.trim());
  return !isNaN(parseValue) && isFinite(parseValue) ? parseValue : 0;
};
