import { NgModule } from '@angular/core';
import * as fromTodo from './todo/todo/store/todo.reducer';

import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo/todo.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StoreModule } from '@ngrx/store';
import { TodoItemComponent } from './todo/todo/todoItem/todo-item/todo-item.component';
import { FooterItemComponent } from './todo/todo/footerItem/footer-item/footer-item.component';
import { TodoInputComponent } from './todo/todo/todoInput/todo-input/todo-input.component';
import { TodoListComponent } from './todo/todo/todoList/todo-list/todo-list.component';
import { FooterListComponent } from './todo/todo/footer-list/footer-list.component';

@NgModule({
  declarations: [AppComponent, TodoComponent, TodoItemComponent, FooterItemComponent, TodoInputComponent, TodoListComponent, FooterListComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ todo: fromTodo.todoReducer }),
    AngularSvgIconModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
