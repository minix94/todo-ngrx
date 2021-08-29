import { todo } from './../../model/todo.model';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import {getTodosLengthLeft, getTodoStatus } from './store/todo.selectors';
import { status, statusModel }   from 'src/app/model/status.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todolength$: Observable<number> = this.store
    .pipe(select((getTodosLengthLeft)));
  status:string[] = status;

  constructor(private store: Store<fromApp.AppState>) {}
  ngOnInit(): void {}
  changeTheme(){

  }
}
