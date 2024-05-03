import React from "react";
import {
  getTodos,
  getTodosByStatus,
  getTodosByPriority,
  editTodo,
  deleteTodo,
  getTodosByTitle,
} from "../../requests/todosRequests";
import { useLoaderData, useParams } from "react-router-dom";
import TodoList from "../../components/todos/todoList/TodoList";
import { useTodoContext } from "../../contexts/todoContext";

export async function todosLoader() {
  const todos = await getTodos();
  return { todos };
}

export async function openTodosLoader() {
  const todos = await getTodosByStatus("In progress");
  return { todos };
}

export async function doneTodosLoader() {
  const todos = await getTodosByStatus("Done");
  return { todos };
}

export async function highTodosLoader() {
  const todos = await getTodosByPriority("High");
  return { todos };
}

export async function getTodosByTitleLoader({ request }) {
  const url = new URL(request.url);
  const todosFilter = url.searchParams.get("todos_filter");
  const todos = await getTodosByTitle(todosFilter);
  return { todos };
}

function CommonPage() {
  const { todos } = useLoaderData();
  const { setTodos } = useTodoContext();

  const handleEditTodo = async (todo) => {
    const copy = JSON.parse(JSON.stringify(todos));
    const index = copy.findIndex((item) => item.id === todo.id);
    copy.splice(index, 1, todo);
    setTodos([...copy]);
    await editTodo(todo);
  };

  const handleDeleteTodo = async (todo) => {
    const copy = JSON.parse(JSON.stringify(todos));
    const index = copy.findIndex((item) => item.id === todo.id);
    copy.splice(index, 1);
    setTodos([...copy]);
    await deleteTodo(todo);
  };

  return (
    <div className="container">
      <TodoList
        todos={todos}
        onEditTodo={handleEditTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default CommonPage;
