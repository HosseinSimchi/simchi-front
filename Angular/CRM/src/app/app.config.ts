import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { AppReducers } from './store/app.reducer';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { PostEffects } from './store/effect/app/app.effects';
import { ThemeEffects } from './store/effect/theme/theme.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(AppReducers),
    provideEffects([PostEffects, ThemeEffects]),
    provideHttpClient(),
    provideRouter(routes),
    provideStoreDevtools({ maxAge: 25 }),
  ],
};
