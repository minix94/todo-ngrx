import { todo } from './../../../../model/todo.model';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addTodo } from '../../store/todo.actions';
import * as fromApp from './../../../../store/app.reducer';
import { getTodosLength } from '../../store/todo.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent implements OnInit {
  @Input() title: string;
  @ViewChild('input') input: ElementRef;

  lunghezza: number;
  lengthTodo$: Subscription = this.store
    .pipe(select(getTodosLength))
    .subscribe((res) => (this.lunghezza = res));
  constructor(private store: Store<fromApp.AppState>) {}
  toggle(todo: string) {
    const newTodo: todo = {
      id: this.lunghezza,
      title: todo,
      completed: false,
      selected: false,
    };

    this.store.dispatch(addTodo({ todo: newTodo }));

    this.input.nativeElement.value = '';
  }
  ngOnInit(): void {}
}
