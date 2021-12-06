export const parseItem = (item: any, defaultValue: any = false) =>
  item ? JSON.parse(item) : defaultValue;

export const getLocalItem = (key: string, defaultValue: any = false) =>
  parseItem(localStorage.getItem(key), defaultValue);

export const setLocalItem = (key: string, value: any) =>
  localStorage.setItem(key, JSON.stringify(value));
