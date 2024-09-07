import {
  selectTodoList,
  selectActiveTodoList,
  selectCompletedTodoList,
} from './todo-list.selector';

describe('TodoListSelectors', () => {
  it('should select the todo list', () => {
    const todoList = [{ id: 1, title: 'new todo', completed: false }];
    const result = selectTodoList.projector(todoList);
    expect(result).toEqual(todoList);
  });

  it('should select the active todo list', () => {
    const todoList = [
      { id: 1, title: 'new todo', completed: false },
      { id: 2, title: 'completed todo', completed: true },
    ];
    const result = selectActiveTodoList.projector(todoList);
    expect(result).toEqual([{ id: 1, title: 'new todo', completed: false }]);
  });

  it('should select the completed todo list', () => {
    const todoList = [
      { id: 1, title: 'new todo', completed: false },
      { id: 2, title: 'completed todo', completed: true },
    ];
    const result = selectCompletedTodoList.projector(todoList);
    expect(result).toEqual([
      { id: 2, title: 'completed todo', completed: true },
    ]);
  });
});
