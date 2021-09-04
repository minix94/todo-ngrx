import { status, statusModel } from 'src/app/model/status.model';
import { Observable, Subscription } from 'rxjs';
import { getTodoStatus } from './../../store/todo.selectors';
import { clearTodoCompleted, setStatus } from './../../store/todo.actions';
import { select, Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import * as fromApp from '../../../../store/app.reducer';

@Component({
  selector: 'footer-item',
  templateUrl: './footer-item.component.html',
  styleUrls: ['./footer-item.component.scss'],
})
export class FooterItemComponent implements OnInit {
  @Input() status: string;
  @Input() title: string;
  todoStatustype$: Observable<statusModel> = this.store.pipe(
    select(getTodoStatus)
  );

  constructor(private store: Store<fromApp.AppState>) {}

  select(status: string) {
    if (status === 'Clear Completed') {
      this.store.dispatch(clearTodoCompleted());
    } else {
      this.store.dispatch(
        setStatus({ status: { type: status, status: true } })
      );
    }
  }
  ngOnInit(): void {}
}
