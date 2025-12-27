import { createFeature, createReducer, on } from '@ngrx/store';
import { initialThemeState } from './theme.state';
import { ThemeActions } from './theme.actions';

export const themeFeature = createFeature({
  name: 'theme',
  reducer: createReducer(
    initialThemeState,

    on(ThemeActions.setTheme, (state, { mode }) => ({
      ...state,
      mode,
    })),
  ),
});
