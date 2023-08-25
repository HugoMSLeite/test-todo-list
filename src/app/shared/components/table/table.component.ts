import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() todoList: any[] = [];
  @Output() finishTodo = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  finish(todo: any) {
    this.finishTodo.emit(todo.id);
  }
}
