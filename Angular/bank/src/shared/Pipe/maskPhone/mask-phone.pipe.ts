import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPhone',
})
export class MaskPhonePipe implements PipeTransform {
  transform(phone: string | null | undefined): string {
    if (!phone || phone.length < 7) {
      return phone ?? '';
    }

    return phone.slice(0, 4) + '****' + phone.slice(-3);
  }
}
