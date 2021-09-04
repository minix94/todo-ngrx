import { getTodoSelected } from './../../store/todo.selectors';
import { select, Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import * as fromApp from '../../../../store/app.reducer';
import { deleteTodo, updateTodo } from '../../store/todo.actions';
import { Observable, of, Subscription } from 'rxjs';
import { todo } from 'src/app/model/todo.model';
import { map, tap } from 'rxjs/operators';
import { getTodos } from '../../store/todo.selectors';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() title: string;
  @Input() id: number;
  @Input() selected: boolean;
  @Input() completed: boolean;
  status: boolean = false;
  todo: todo[];

  todo$: Subscription = this.store.pipe(select(getTodos)).subscribe((res) => {
    this.todo = res;
  });

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {}
  active() {
    if (this.status === false) {
      this.status = true;
    } else {
      this.status = false;
    }
  }
  deleteTodo(index: number) {
    this.store.dispatch(deleteTodo({ index }));
  }
  updateTodo(index: number) {
    this.todo.map((res) => {
      if (res.id === index) {
        const todos = [...this.todo];

        todos[index] = {
          ...res,
          selected: !res.selected,
          completed: !res.completed,
        };

        this.store.dispatch(
          updateTodo({
            todos: todos,
          })
        );
      } else {
        res;
      }
    });
  }
}
