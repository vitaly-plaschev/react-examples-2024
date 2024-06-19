import React from "react";
import {
  getTodosByStatus,
  getTodosByPriority,
  editTodo,
  deleteTodo,
  getTodosByTitle,
} from "../../requests/todosRequests";
import TodoList from "../../components/todos/todoList/TodoList";
import {
  assignTodos,
  allTodos,
  deleteTodoById,
  editTodoById,
  selectTodoByTitle,
  fetchTodos,
  moveTodoToCart,
  removeTodoFromCart,
} from "../../store/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import store from "../../store/store";
import { addProductToCart, removeProductFromCart, fetchCart } from "../../store/cartSlice";

export async function todosLoader() {
  store.dispatch(fetchTodos());
  store.dispatch(fetchCart());
  return { todos: [] };
}

export async function openTodosLoader() {
  const todos = await getTodosByStatus("In progress");
  store.dispatch(assignTodos(todos));
  return { todos };
}

export async function doneTodosLoader() {
  const todos = await getTodosByStatus("Done");
  store.dispatch(assignTodos(todos));
  return { todos };
}

export async function highTodosLoader() {
  const todos = await getTodosByPriority("High");
  store.dispatch(assignTodos(todos));
  return { todos };
}

export async function getTodosByTitleLoader({ request }) {
  const url = new URL(request.url);
  const todosFilter = url.searchParams.get("todos_filter");
  const todos = await getTodosByTitle(todosFilter);
  store.dispatch(assignTodos(todos));
  return { todos };
}

export async function getTodosByTitleLoaderWithSelectors({ request }) {
  const url = new URL(request.url);
  const todosFilter = url.searchParams.get("todos_filter");
  const state = store.getState();
  const allTodos = await getTodosByTitle(todosFilter);
  store.dispatch(assignTodos(allTodos));

  const todos = selectTodoByTitle(state, todosFilter);
  return { todos };
}

function CommonPage() {
  const todos = useSelector(allTodos);
  const dispatch = useDispatch();

  const handleEditTodo = async (todo) => {
    await editTodo(todo);

    dispatch(editTodoById(todo));
  };

  const handleDeleteTodo = async (todo) => {
    const copy = JSON.parse(JSON.stringify(todos));
    const index = copy.findIndex((item) => item.id === todo.id);
    copy.splice(index, 1);
    await deleteTodo(todo);

    dispatch(deleteTodoById(todo.id));
  };

  const handleAddToCart = async (todo) => {
    // todo store operation
    dispatch(moveTodoToCart(todo));

    // cart store operation
    dispatch(addProductToCart(todo));
  };

  const handleRemoveFromCart = async (todo) => {
    // todo store operation
    dispatch(removeTodoFromCart(todo));

    // cart store operation
    dispatch(removeProductFromCart(todo));
  };

  return (
    <div className="container">
      <TodoList
        todos={todos}
        onEditTodo={handleEditTodo}
        onDeleteTodo={handleDeleteTodo}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
}

export default CommonPage;
