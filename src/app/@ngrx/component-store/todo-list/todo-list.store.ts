import { ComponentStore } from '@ngrx/component-store';
import { Todo } from '../../../todo';

export class TodoListStore extends ComponentStore<Todo[]> {
  constructor() {
    super([]);
  }

  // READ
  readonly todoList$ = this.state$;
  readonly completedTodoList$ = this.select(this.todoList$, (todoList) =>
    todoList.filter((todo) => todo.completed),
  );
  readonly activeTodoList$ = this.select(this.todoList$, (todoList) =>
    todoList.filter((todo) => !todo.completed),
  );

  // WRITE
  readonly add = this.updater((state: Todo[], title: string) => {
    return [
      ...state,
      {
        id: Math.max(...state.map((todo) => todo.id), 0) + 1,
        title,
        completed: false,
      },
    ];
  });
  readonly toggleAll = this.updater((state: Todo[]) => {
    return state.map((todo) => ({ ...todo, completed: !todo.completed }));
  });
  readonly load = this.updater((state: Todo[], todoList: Todo[]) => todoList);
}
