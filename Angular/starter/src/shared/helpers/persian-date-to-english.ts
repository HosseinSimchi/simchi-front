import { toGregorian } from 'jalaali-js';

export const jalaliToDate = (jy: number, jm: number, jd: number): Date => {
  const g = toGregorian(jy, jm, jd);
  return new Date(g.gy, g.gm - 1, g.gd);
};
