import { TodoListActions, TodoListApiActions } from './todo-list.action';
import { todoListReducer } from './todo-list.reducer';

describe('TodoListReducer', () => {
  it('should return the default state', () => {
    const action = {} as any;
    const state = todoListReducer(undefined, action);
    expect(state).toEqual([]);
  });

  it('should add a todo', () => {
    const action = TodoListActions.add({ title: 'new todo' });
    const state = todoListReducer([], action);
    expect(state).toEqual([
      {
        id: 1,
        title: 'new todo',
        completed: false,
      },
    ]);
  });

  it('should complete all todos', () => {
    const action = TodoListActions.toggleAll();
    const state = todoListReducer(
      [
        {
          id: 1,
          title: 'new todo',
          completed: false,
        },
      ],
      action,
    );
    expect(state).toEqual([
      {
        id: 1,
        title: 'new todo',
        completed: true,
      },
    ]);
  });

  it('should load a list of todo', () => {
    const action = TodoListApiActions.load({
      todoList: [
        {
          id: 1,
          title: 'new todo',
          completed: false,
        },
      ],
    });
    const state = todoListReducer([], action);
    expect(state).toEqual([
      {
        id: 1,
        title: 'new todo',
        completed: false,
      },
    ]);
  });
});
