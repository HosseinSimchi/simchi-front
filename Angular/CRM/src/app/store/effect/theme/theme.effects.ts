import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map } from 'rxjs/operators';
import { ThemeActions } from '../../states/theme/theme.actions';

@Injectable()
export class ThemeEffects {
  private actions$ = inject(Actions);

  // Load theme from localStorage
  loadThemeFromStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ThemeActions.loadFromStorage),
      map(() => {
        const stored =
          (localStorage.getItem('bd_theme_scheme') as 'light' | 'dark') ??
          'light';
        return ThemeActions.setTheme({ mode: stored });
      })
    )
  );

  // Apply theme to document and save to localStorage
  applyTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ThemeActions.setTheme),
        tap(({ mode }) => {
          document.documentElement.setAttribute('data-theme-mode', mode);
          localStorage.setItem('bd_theme_scheme', mode);
        })
      ),
    { dispatch: false }
  );
}
