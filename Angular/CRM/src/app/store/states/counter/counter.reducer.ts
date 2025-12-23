// src/app/counter/counter.reducer.ts
import { createFeature, createReducer, on } from '@ngrx/store';
import { CounterActions } from './counter.actions';

export interface CounterState {
  value: number;
}

export const initialState: CounterState = {
  value: 0,
};

// Modern createFeature approach
export const counterFeature = createFeature({
  name: 'counter',
  reducer: createReducer(
    initialState,
    on(CounterActions.increment, (state, { amount }) => ({
      ...state,
      value: state.value + (amount ?? 1), // default to 1
    })),
    on(CounterActions.decrement, (state, { amount }) => ({
      ...state,
      value: state.value - (amount ?? 1), // default to 1
    })),
    on(CounterActions.reset, (state, { value }) => ({
      ...state,
      value: value ?? 0, // default reset to 0
    }))
  ),
});
