import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { AppReducers } from './store/app.reducer';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { PostEffects } from './store/effect/app/app.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(AppReducers),
    provideEffects([PostEffects]),
    provideHttpClient(),
    provideRouter(routes),
    provideStoreDevtools({ maxAge: 25 }),
  ],
};
