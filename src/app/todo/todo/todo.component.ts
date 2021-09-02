import { todo } from './../../model/todo.model';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import {getTodosLengthLeft } from './store/todo.selectors';
import { status }   from 'src/app/model/status.model';
import { ChangeThemeService } from 'src/services/change-theme.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todolength$: Observable<number> = this.store
    .pipe(select((getTodosLengthLeft)));
  status:string[] = status;
  currentTheme$:Observable<string> = this.theme.presentTheme$;

  constructor(private store: Store<fromApp.AppState>, private theme: ChangeThemeService) {
  }
  ngOnInit(): void {}
  changeTheme(mode:string){
    this.theme.changeTheme(mode);
  }
}
