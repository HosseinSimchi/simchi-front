// src/app/counter/counter.reducer.ts
import { createFeature, createReducer, on } from '@ngrx/store';
import { initialStateNotification } from './notification.state';

// Modern createFeature approach
export const notificationFeature = createFeature({
  name: 'notification',
  reducer: createReducer(
    initialStateNotification
    // on(CounterActions.increment, (state, { amount }) => ({
    //   ...state,
    //   value: state.value + (amount ?? 1), // default to 1
    // })),
    // on(CounterActions.decrement, (state, { amount }) => ({
    //   ...state,
    //   value: state.value - (amount ?? 1), // default to 1
    // })),
    // on(CounterActions.reset, (state, { value }) => ({
    //   ...state,
    //   value: value ?? 0, // default reset to 0
    // }))
  ),
});
