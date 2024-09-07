import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectActiveTodoList,
  selectCompletedTodoList,
  selectTodoList,
} from './todo-list.selector';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { TodoListActions, TodoListApiActions } from './todo-list.action';
import { TodoListService } from '../../../todo-list.service';
import { take } from 'rxjs';

@Component({
  selector: 'ngrx-store-todo-list',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {
  private todoListService = inject(TodoListService);
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  private store = inject(Store);
  todoList$ = this.store.select(selectTodoList);
  activeTodoList$ = this.store.select(selectActiveTodoList);
  completedTodoList$ = this.store.select(selectCompletedTodoList);
  // -------------------------------------------------------------
  // -------------------------------------------------------------

  ngOnInit(): void {
    this.todoListService
      .getTodoList()
      .pipe(take(1))
      .subscribe((todoList) => {
        // --------------------------------------------------------
        // --------------------------------------------------------
        this.store.dispatch(TodoListApiActions.load({ todoList }));
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
    this.store.dispatch(TodoListActions.add({ title: input.value }));
    // --------------------------------------------------------------
    // --------------------------------------------------------------
    input.value = '';
  }

  onToggleAll() {
    // ----------------------------------------------
    // ----------------------------------------------
    this.store.dispatch(TodoListActions.toggleAll());
    // ----------------------------------------------
    // ----------------------------------------------
  }
}
