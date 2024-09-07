import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Todo } from '../../../todo';
import { computed } from '@angular/core';

export const TodoListStore = signalStore(
  withState({ todoList: [] as Todo[] }),
  withComputed((state) => ({
    todoList: computed(() => state.todoList()),
    completedTodoList: computed(() =>
      state.todoList().filter((todo) => todo.completed),
    ),
    activeTodoList: computed(() =>
      state.todoList().filter((todo) => !todo.completed),
    ),
  })),
  withMethods((store) => ({
    add: (title: string) => {
      patchState(store, (state) => ({
        todoList: [
          ...state.todoList,
          {
            id: Math.max(...state.todoList.map((todo) => todo.id), 0) + 1,
            title,
            completed: false,
          },
        ],
      }));
    },
    toggleAll: () => {
      patchState(store, (state) => ({
        todoList: state.todoList.map((todo) => ({
          ...todo,
          completed: !todo.completed,
        })),
      }));
    },
    load: (todoList: Todo[]) => {
      patchState(store, { todoList });
    },
  })),
);
