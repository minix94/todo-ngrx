import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

export const selectFeature = (state: AppState) => state.todo;

export const getTodos = createSelector(selectFeature, (state) => state.todo);

export const getTodosLength = createSelector(getTodos, (state) => state.length);
export const getTodoNotCompleted = createSelector(getTodos, (state) =>
  state.filter((res) => res.completed === false)
);
export const getTodosLengthLeft = createSelector(
  getTodoNotCompleted,
  (state) => state.length
);
export const getTodoStatus = createSelector(
  selectFeature,

  (state) => state.statusActive
);
export const getTodoCurrentStatus = createSelector(
  getTodoStatus,

  (state) => state.status === true
);

export const getTodoCompleted = createSelector(getTodos, (state) =>
  state.filter((res) => res.completed === true)
);

export const getTodoSelected = createSelector(getTodos, (state) =>
  state.filter((res) => res.selected === true)
);
