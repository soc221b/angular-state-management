import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Todo } from '../../todo';

export const TodoListActions = createActionGroup({
  source: 'TodoList',
  events: {
    add: props<{ title: string }>(),
    toggle: props<{ id: number }>(),
  },
});

export const TodoListApiActions = createActionGroup({
  source: 'TodoList',
  events: {
    load: props<{ todoList: Todo[] }>(),
  },
});
