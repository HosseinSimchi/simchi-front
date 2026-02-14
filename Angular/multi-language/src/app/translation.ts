import { Injectable, signal, computed, effect } from '@angular/core';
import { en } from './i18n/en';
import { fa } from './i18n/fa';


export type Language = 'en' | 'fa';
export type TranslationKeys = typeof en;

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private translations: Record<Language, TranslationKeys> = { en, fa };

  // Signal for current language
  private currentLangSignal = signal<Language>('en');

  // Computed signal for current translations
  public currentTranslations = computed(() => this.translations[this.currentLangSignal()]);

  // Computed signal for text direction
  public direction = computed(() => (this.currentLangSignal() === 'fa' ? 'rtl' : 'ltr'));

  constructor() {
    // Apply direction and language to document when language changes
    effect(() => {
      const lang = this.currentLangSignal();
      const dir = this.direction();

      document.documentElement.lang = lang;
      document.documentElement.dir = dir;

      // Apply Persian font for RTL
      if (lang === 'fa') {
        document.body.style.fontFamily = 'Vazir, Tahoma, Arial, sans-serif';
      } else {
        document.body.style.fontFamily = 'system-ui, -apple-system, sans-serif';
      }

      // Save to localStorage
      localStorage.setItem('preferred-language', lang);
    });
  }

  // Get current language
  get currentLang(): Language {
    return this.currentLangSignal();
  }

  // Switch language
  switchLanguage(lang: Language): void {
    this.currentLangSignal.set(lang);
  }

  // Get translation with parameters
  translate(key: string, params?: Record<string, any>): string {
    const keys = key.split('.');
    let value: any = this.currentTranslations();

    // Navigate through nested keys
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }

    // Handle string values
    if (typeof value === 'string') {
      return this.replaceParams(value, params);
    }

    // Handle pluralization or other complex structures
    if (typeof value === 'object' && params?.['count'] !== undefined) {
      const count = params['count'];
      let pluralKey: 'zero' | 'one' | 'other';

      if (count === 0) pluralKey = 'zero';
      else if (count === 1) pluralKey = 'one';
      else pluralKey = 'other';

      const pluralValue = value[pluralKey];
      if (pluralValue) {
        return this.replaceParams(pluralValue, params);
      }
    }

    return String(value || key);
  }

  // Replace parameters in string
  private replaceParams(text: string, params?: Record<string, any>): string {
    if (!params) return text;

    return text.replace(/{{(.*?)}}/g, (_, key) => {
      return params[key.trim()] !== undefined ? String(params[key.trim()]) : `{{${key}}}`;
    });
  }

  // Load saved language preference
  loadSavedLanguage(): void {
    const saved = localStorage.getItem('preferred-language') as Language;
    if (saved && (saved === 'en' || saved === 'fa')) {
      this.currentLangSignal.set(saved);
    }
  }
}
