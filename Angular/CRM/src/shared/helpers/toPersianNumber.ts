export const persianDigits = (num: number | string) => {
  return num.toString().replace(/\d/g, (d: any) => '۰۱۲۳۴۵۶۷۸۹'[d]);
};
