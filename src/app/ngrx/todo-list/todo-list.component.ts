import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectActiveTodoList,
  selectCompletedTodoList,
  selectTodoList,
} from '../state/todo-list.selector';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { TodoListActions, TodoListApiActions } from '../state/todo-list.action';
import { TodoListService } from '../../todo-list.service';
import { take } from 'rxjs';

@Component({
  selector: 'ngrx-todo-list',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {
  private store = inject(Store);

  private todoListService = inject(TodoListService);

  todoList$ = this.store.select(selectTodoList);

  activeTodoList$ = this.store.select(selectActiveTodoList);

  completedTodoList$ = this.store.select(selectCompletedTodoList);

  ngOnInit(): void {
    this.todoListService
      .getTodoList()
      .pipe(take(1))
      .subscribe((todoList) => {
        this.store.dispatch(TodoListApiActions.load({ todoList }));
      });
  }

  onAddTodo($event: Event) {
    const input = $event.target as HTMLInputElement;
    this.store.dispatch(TodoListActions.add({ title: input.value }));
    input.value = '';
  }

  onToggleTodo(todoId: number) {
    this.store.dispatch(TodoListActions.toggle({ id: todoId }));
  }
}
