import React from "react";
import {
  getTodos,
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
  selectTodoById,
} from "../../store/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import store from "../../store/store";

export async function todosLoader() {
  const todos = await getTodos();
  store.dispatch(assignTodos(todos));
  return { todos };
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

function CommonPage() {
  const todos = useSelector(allTodos);
  const dispatch = useDispatch();

  // Sample of fetching todo by ID
  // const todoSample = useSelector(state => selectTodoById(state, 1));

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

  return (
    <div className="container">
      {/* // Sample of fetching todo by ID */}
      {/* <h2>{todoSample.title}</h2> */}
      <TodoList
        todos={todos}
        onEditTodo={handleEditTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default CommonPage;
