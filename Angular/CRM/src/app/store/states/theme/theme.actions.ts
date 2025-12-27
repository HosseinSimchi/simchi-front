import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { ThemeMode } from './theme.state';

export const ThemeActions = createActionGroup({
  source: 'Theme',
  events: {
    'Set Theme': props<{ mode: ThemeMode }>(),
    'Toggle Theme': emptyProps(),
    'Load From Storage': emptyProps(),
  },
});
