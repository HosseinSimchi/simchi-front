import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideMarkdown } from 'ngx-markdown';

import { routes } from './root.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from '../shared/interceptors/auth/auth.interceptor';
export const rootConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes, withHashLocation()),
    provideMarkdown(),
  ],
};
