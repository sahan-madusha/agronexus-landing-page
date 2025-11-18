/* eslint-disable */
export const CN = (...className: any[]) => {
  return className.filter(Boolean).join(" ");
};
