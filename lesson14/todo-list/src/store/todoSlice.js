import { createSlice, nanoid, createSelector } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")),
};

const selectTodos = (state) => state.todos;
const selectTodoId = (state, itemId) => itemId;

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: {
      reducer: (state, action) => {
        state.todos.push(action.payload);
      },
      prepare: (todo) => {
        const id = nanoid();
        const newTodo = Object.keys(todo).reduce((acc, prop) => {
          acc[prop] = Array.isArray(todo[prop]) ? todo[prop][0] : todo[prop];
          return acc;
        }, {});
        return { payload: { id, ...newTodo } };
      },
    },
    assignTodos(state, action) {
      state.todos = JSON.parse(JSON.stringify(action.payload));
    },
    editTodoById(state, action) {      
      const copy = JSON.parse(JSON.stringify(state.todos));
      const index = copy.findIndex((item) => item.id === action.payload.id);
      copy.splice(index, 1, action.payload);
      state.todos = [...copy];
    },
    deleteTodoById: {
      reducer: (state, action) => {
        state.todos = state.todos.filter((item) => item.id !== action.payload);
      },
      prepare: (id) => {
        return { payload: id };
      },
    },
  },
  selectors: {
    allTodos: (state) => state.todos,
    selectTodoById: createSelector(
      [selectTodos, selectTodoId],
      (todos, itemId) => todos.find(t => t.id === itemId)
    ),
  },
});

export const { createTodo, deleteTodoById, assignTodos, editTodoById } =
  todosSlice.actions;
export const { allTodos, selectTodoById } = todosSlice.selectors;
export default todosSlice.reducer;
