import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todos/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter()
  @Output() todoStrike: EventEmitter<Todo> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  strikeThrough(todo: Todo){
    this.todoDelete.emit(todo)    
  }

}
