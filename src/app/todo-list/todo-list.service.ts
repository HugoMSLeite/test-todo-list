import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  todoList$ = new BehaviorSubject<any[]>([]);

  constructor() {
    const list = JSON.parse(sessionStorage.getItem('todoList') || '[]');
    this.todoList$.next(list);
  }

  get todoList(): Observable<any[]> {
    return this.todoList$.asObservable();
  }

  createTodo(todo: any) {
    const todoList = this.todoList$.value;
    todoList.push(todo);
    sessionStorage.setItem('todoList', JSON.stringify(todoList));
    this.todoList$.next(todoList);
    return of({});
  }
}
