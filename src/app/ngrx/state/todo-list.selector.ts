import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from '../../todo';

export const selectTodoList =
  createFeatureSelector<ReadonlyArray<Todo>>('TodoList');

export const selectActiveTodoList = createSelector(selectTodoList, (todoList) =>
  todoList.filter((todo) => !todo.completed),
);

export const selectCompletedTodoList = createSelector(
  selectTodoList,
  (todoList) => todoList.filter((todo) => todo.completed),
);
