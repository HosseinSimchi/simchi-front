// src/app/counter/counter.actions.ts
import { createActionGroup, props } from '@ngrx/store';

export const RecentActivityActions = createActionGroup({
  source: 'RecentActivity',
  events: {},
});
