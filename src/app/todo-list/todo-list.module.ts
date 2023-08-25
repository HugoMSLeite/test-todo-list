import { BrowserModule } from '@angular/platform-browser';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TodoListComponent, CreateTodoComponent],
  imports: [TodoListRoutingModule, SharedModule],
})
export class TodoListModule {}
