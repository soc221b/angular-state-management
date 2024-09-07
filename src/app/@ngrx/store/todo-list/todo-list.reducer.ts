import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../../todo';
import { TodoListActions, TodoListApiActions } from './todo-list.action';

const initialState: Todo[] = [];

export const todoListReducer = createReducer(
  initialState,
  on(TodoListApiActions.load, (state, { todoList }) => todoList),
  on(TodoListActions.add, (state, { title }) => [
    ...state,
    {
      id: Math.max(...state.map((todo) => todo.id), 0) + 1,
      title,
      completed: false,
    },
  ]),
  on(TodoListActions.toggleAll, (state) =>
    state.map((todo) => ({ ...todo, completed: !todo.completed })),
  ),
);
