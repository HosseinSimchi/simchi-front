import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { MARKED_OPTIONS, provideMarkdown } from 'ngx-markdown';

import { routes } from './root.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from '../shared/interceptors/auth/auth.interceptor';
import { MarkedOptions } from 'marked';

export const rootConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes, withHashLocation()),
    provideMarkdown({
      // Optional: configure marked options
      markedOptions: {
        provide: MARKED_OPTIONS,
        useValue: {
          gfm: true, // GitHub Flavored Markdown
          breaks: true, // Convert line breaks to <br>
        },
      },
    }),
  ],
};
