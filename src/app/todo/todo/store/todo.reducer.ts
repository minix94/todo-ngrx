import { statusModel } from './../../../model/status.model';
import { todo } from './../../../model/todo.model';
import { createReducer, on } from '@ngrx/store';

import * as todoAction from './todo.actions';

export interface State {
  todo: todo[];
  statusActive: statusModel;

}
const initialState: State = {
  todo: [],
  statusActive: {
    type:'All',
    status:true
  }
};
export const todoReducer = createReducer(
  initialState,
  on(todoAction.addTodo, (state, action) => ({
    ...state,

    todo: [...state.todo, {...action.todo}],
  })),
  on(todoAction.deleteTodo, (state, action) => ({
    ...state,
    todo: state.todo.filter((_, index) => index !== action.index),
  })),

  on(todoAction.updateTodo, (state, action) => (
    {
    ...state,
    todo: [...action.todos]
  })),
  on(todoAction.setStatus, (state, action) => (
    {
    ...state,
    statusActive: action.status
  })),
  on(todoAction.clearTodoCompleted, (state) => (
    {

    statusActive: initialState.statusActive,
    todo:state.todo.filter((res) => res.completed === false),
  })),

);
