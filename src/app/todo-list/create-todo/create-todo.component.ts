import { Router } from '@angular/router';
import { TodoListService } from './../todo-list.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent implements OnInit {
  titulo: string = '';
  data?: string;

  constructor(
    private todoListService: TodoListService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  create() {
    if (this.titulo && this.data) {
      const todo = {
        date: this.data,
        finish: false,
        id: '0',
        title: this.titulo,
      } as Todo;
      this.todoListService.createTodo(todo).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  back() {
    this.router.navigate(['/']);
  }
}
