import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from '../../../todo';
import { todoListFeatureName } from './todo-list';

export const selectTodoList =
  createFeatureSelector<ReadonlyArray<Todo>>(todoListFeatureName);

export const selectActiveTodoList = createSelector(selectTodoList, (todoList) =>
  todoList.filter((todo) => !todo.completed),
);

export const selectCompletedTodoList = createSelector(
  selectTodoList,
  (todoList) => todoList.filter((todo) => todo.completed),
);
