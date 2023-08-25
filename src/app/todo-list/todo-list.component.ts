import { TodoListService } from './todo-list.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList: any[] = [];

  constructor(
    private todoListService: TodoListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.todoListService.todoList.subscribe((ret) => {
      this.todoList = ret;
    });
  }

  createTodo() {
    this.router.navigate(['create']);
  }
}
