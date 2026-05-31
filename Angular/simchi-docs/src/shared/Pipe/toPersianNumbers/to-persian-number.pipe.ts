import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toPersianNumber',
})
export class ToPersianNumberPipe implements PipeTransform {
  transform(value: any, args?: any): string {
    if (value === null || value === undefined || value === '') {
      return '';
    }

    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    // Convert to string and replace English digits with Persian digits
    return String(value).replace(
      /\d/g,
      (digit) => persianDigits[Number.parseInt(digit)],
    );
  }
}
