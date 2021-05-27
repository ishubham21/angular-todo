import { Component, OnInit } from '@angular/core';
import { Todo } from "../todos/Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!: Todo[]
  localItem!: string | null
  constructor() {
    this.localItem = localStorage.getItem("todos")
    if(!this.localItem){
      this.todos = []
    } 
    else{
      this.todos = JSON.parse(this.localItem)
    }
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    const indx = this.todos.indexOf(todo)
    this.todos.splice(indx, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos))    
  }

  addTodo(todo: Todo){
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}
