import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatePipe } from './translate-pipe';
import { Language, TranslationService } from './translation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  translationService = inject(TranslationService);

  userName = 'John';
  items = ['Milk', 'Bread', 'Eggs'];
  currentDate = new Date();

  ngOnInit() {
    this.translationService.loadSavedLanguage();
  }

  updateName(event: any) {
    this.userName = event.target.value;
  }

  switchLanguage(lang: Language) {
    this.translationService.switchLanguage(lang);
  }
}
