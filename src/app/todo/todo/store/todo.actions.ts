import { status, statusModel } from 'src/app/model/status.model';
import { todo } from './../../../model/todo.model';
import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todo] Add todo',
  props<{
    todo: todo;
  }>()
);

export const setStatus = createAction(
  '[Todo] Set Status todos',
  props<{
    status:statusModel
  }>()


);
export const resetInput = createAction(
  '[Todo] Reset Input',
  props<{
    input:string
  }>()


);
export const updateTodo = createAction(
  '[Todo] Update todo',
  props<{
    todos:todo[]
  }>()

);
export const clearTodoCompleted = createAction(
  '[Todo] Clear todo completed',
);

export const deleteTodo = createAction(
  '[Todo] Delete todo',
  props<{
    index: number;
  }>()
);
