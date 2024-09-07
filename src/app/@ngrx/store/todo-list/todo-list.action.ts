import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Todo } from '../../../todo';
import { todoListFeatureName } from './todo-list';

export const TodoListActions = createActionGroup({
  source: todoListFeatureName,
  events: {
    add: props<{ title: string }>(),
    toggleAll: emptyProps(),
  },
});

export const TodoListApiActions = createActionGroup({
  source: todoListFeatureName,
  events: {
    load: props<{ todoList: Todo[] }>(),
  },
});
