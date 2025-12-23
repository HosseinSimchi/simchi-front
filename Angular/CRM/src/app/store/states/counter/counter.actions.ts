// src/app/counter/counter.actions.ts
import { createActionGroup, props } from '@ngrx/store';

export const CounterActions = createActionGroup({
  source: 'Counter',
  events: {
    Increment: props<{ amount?: number }>(), // optional payload
    Decrement: props<{ amount?: number }>(), // optional payload
    Reset: props<{ value?: number }>(), // optional reset value
  },
});
