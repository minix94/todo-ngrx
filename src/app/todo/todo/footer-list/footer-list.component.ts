import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getTodosLengthLeft } from '../store/todo.selectors';
import { status }   from 'src/app/model/status.model';
import * as fromApp from '../../../store/app.reducer';


@Component({
  selector: 'footer-list',
  templateUrl: './footer-list.component.html',
  styleUrls: ['./footer-list.component.scss']
})
export class FooterListComponent implements OnInit {
  todolength$: Observable<number> = this.store
  .pipe(select((getTodosLengthLeft)));
  status:string[] = status;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }

}
