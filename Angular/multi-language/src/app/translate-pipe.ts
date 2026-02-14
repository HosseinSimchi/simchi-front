import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from './translation';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false, // Set to false to update when language changes
})
export class TranslatePipe implements PipeTransform {
  private translationService = inject(TranslationService);

  transform(key: string, params?: Record<string, any>): string {
    return this.translationService.translate(key, params);
  }
}
