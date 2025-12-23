// src/app/counter/counter.actions.ts
import { createActionGroup, props } from '@ngrx/store';

export const NotificationActions = createActionGroup({
  source: 'Notification',
  events: {},
});
