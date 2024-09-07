# ngrx

## Actions

### Example

```ts
const actionLoad = { type: "load", payload: Todo[] };
const actionClear = { type: "clear" };

// const actions = createActionGroup({
//   load: props<Todo[]>(),
//   clear: emptyProps(),
// });
```

### APIs

- `createActionGroup`
- `props`
- `emptyProps`

## Reducers

### Example

```ts
const reducer = createReducer(
  initialState,
  on(load, (state, action) => ({ ...state, todoList: action.payload })),
  on(clear, (state) => ({ ...state, todoList: [] })),
);
```

### APIs

- `createReducer`
- `on`

## Selectors

### Example

```ts
const selectTodoList = createFeatureSelector<TodoState>("TodoList");
const selectActiveTodos = createSelector(selectTodoList, (state) => state.todoList.filter((todo) => !todo.completed));
```

### APIs

- `createFeatureSelector`
- `createSelector`
