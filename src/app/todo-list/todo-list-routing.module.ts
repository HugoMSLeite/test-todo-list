import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoListComponent } from './todo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
  },
  {
    path: 'create',
    component: CreateTodoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoListRoutingModule {}
