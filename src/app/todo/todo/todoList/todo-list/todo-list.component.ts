import { getTodoCurrentStatus } from './../../store/todo.selectors';
import { statusModel } from 'src/app/model/status.model';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { todo } from 'src/app/model/todo.model';
import * as fromApp from '../../../../store/app.reducer';
import { getTodoCompleted, getTodoNotCompleted, getTodos, getTodoStatus } from '../../store/todo.selectors';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todo$:Observable<todo[]> = this.store.pipe(select(getTodos));
  todoFiltered$:Observable<todo[]>  = this.store.pipe(select(getTodoCompleted));
  todoActive$:Observable<todo[]>  = this.store.pipe(select(getTodoNotCompleted));

  todoCurrentState$:Observable<statusModel> = this.store.pipe(select(getTodoStatus))


  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {

  }

}
