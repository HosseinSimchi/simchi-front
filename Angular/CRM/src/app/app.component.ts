import { Component } from '@angular/core';
import { TranslationService } from './translation.service';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PostActions } from './store/effect/app/app.actions';
import { CommonModule } from '@angular/common';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { PostEffects } from './store/effect/app/app.effects';
import { postFeature } from './store/effect/app/app.reducer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  selectedLanguage = { code: 'en', name: 'English' };
  title = '';
  languages = [
    {
      code: 'en',
      name: 'English',
    },
    {
      code: 'fr',
      name: 'France',
    },
    {
      code: 'hi',
      name: 'Hindi',
    },
  ];

  constructor(public translationService: TranslationService) {
    this.translationService.loadTranslations('en');
  }

  selectLanguage(language: any) {
    this.selectedLanguage = language;
    this.translationService.loadTranslations(language.code);
  }

  getState: any;

  ngOnInit(): void {}

  // posts$: Observable<any[]>;

  // constructor(private store: Store) {
  //   this.posts$ = store.select(postFeature.selectPosts);
  // }

  // loadPosts() {
  //   this.store.dispatch(PostActions.loadPosts());
  // }

  // addRandomPost() {
  //   const post = { title: 'New Post', body: 'Some content', userId: 1 };
  //   this.store.dispatch(PostActions.addPost({ post }));
  // }

  // deletePost(id: number) {
  //   this.store.dispatch(PostActions.deletePost({ id }));
  // }
}
