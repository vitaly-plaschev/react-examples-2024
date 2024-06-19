import {
  createSlice,
  nanoid,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { getTodos, moveToCart, removeFromCart } from "../requests/todosRequests";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")),
};

const selectTodos = (state) => state.todos;
const selectTodoId = (state, itemId) => itemId;

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, thunkAPI) => {
    const todos = await getTodos();
    return todos;
  }
);

export const moveTodoToCart = createAsyncThunk(
  "todos/moveToCart",
  async (todo, thunkAPI) => {
    const todos = await moveToCart(todo);
    return todos;
  }
);

export const removeTodoFromCart = createAsyncThunk(
  "todos/removeFromCart",
  async (todo, thunkAPI) => {
    const todos = await removeFromCart(todo);
    return todos;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = JSON.parse(JSON.stringify(action.payload));
    });
    builder.addCase(moveTodoToCart.fulfilled, (state, action) => {
      state.todos = JSON.parse(JSON.stringify(action.payload));
    });
    builder.addCase(removeTodoFromCart.fulfilled, (state, action) => {
      state.todos = JSON.parse(JSON.stringify(action.payload));
    });
  },
  selectors: {
    allTodos: (state) => state.todos,
    selectTodoById: createSelector(
      [selectTodos, selectTodoId],
      (todos, itemId) => todos.find((t) => t.id === itemId)
    ),
    selectTodoByTitle: createSelector(
      [selectTodos, selectTodoId],
      (todos, itemId) => {
        if (!itemId) return todos;
        return todos.filter((todo) =>
          todo.title.toLowerCase().includes(itemId.toLowerCase())
        );
      }
    ),
  },
});

export const {
  createTodo,
  deleteTodoById,
  assignTodos,
  editTodoById,
  getAllTodosByTitle,
} = todosSlice.actions;
export const { allTodos, selectTodoById, selectTodoByTitle } =
  todosSlice.selectors;
export default todosSlice.reducer;
