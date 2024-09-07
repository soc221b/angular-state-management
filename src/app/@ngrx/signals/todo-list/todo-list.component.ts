import { Component, inject, OnInit } from '@angular/core';
import { TodoListStore } from './todo-list.store';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { TodoListService } from '../../../todo-list.service';
import { take } from 'rxjs';

@Component({
  selector: 'ngrx-signals-todo-list',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './todo-list.component.html',
  providers: [TodoListStore],
})
export class TodoListComponent implements OnInit {
  private todoListService = inject(TodoListService);
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  private store = inject(TodoListStore);
  todoList = this.store.todoList;
  activeTodoList = this.store.activeTodoList;
  completedTodoList = this.store.completedTodoList;
  // -------------------------------------------------------------
  // -------------------------------------------------------------

  ngOnInit(): void {
    this.todoListService
      .getTodoList()
      .pipe(take(1))
      .subscribe((todoList) => {
        // --------------------------------------------------------
        // --------------------------------------------------------
        this.store.load(todoList);
        // --------------------------------------------------------
        // --------------------------------------------------------
      });
  }

  onAddTodo($event: Event) {
    $event.preventDefault();
    const form = $event.target as HTMLFormElement;
    const input = form.querySelector('input')!;
    // --------------------------------------------------------------
    // --------------------------------------------------------------
    this.store.add(input.value);
    // --------------------------------------------------------------
    // --------------------------------------------------------------
    input.value = '';
  }

  onToggleAll() {
    // ----------------------------------------------
    // ----------------------------------------------
    this.store.toggleAll();
    // ----------------------------------------------
    // ----------------------------------------------
  }
}
