// src/app/counter/counter.actions.ts
import { createActionGroup, props } from '@ngrx/store';

export const HeaderActions = createActionGroup({
  source: 'Header',
  events: {},
});
