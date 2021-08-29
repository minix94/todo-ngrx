import * as fromTodo from './../todo/todo/store/todo.reducer';

export interface AppState {
  todo: fromTodo.State;
}
