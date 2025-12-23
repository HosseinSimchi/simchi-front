import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private translations: any = {};
  private currentLang = 'en';
  constructor(private http: HttpClient) {}

  loadTranslations(lang: string) {
    return this.http.get(`assets/i18n/${lang}.json`).subscribe((res: any) => {
      this.translations = res;
    });
  }

  translate(key: string) {
    return this.translations[key] || key;
  }

  get currentLanguage() {
    return this.currentLang;
  }
}
