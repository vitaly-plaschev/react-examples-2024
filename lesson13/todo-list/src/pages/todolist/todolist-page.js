import React from "react";
import { useLoaderData } from "react-router-dom";
import TodoList from "../../components/todos/todoList/TodoList";

function TodolistPage() {
  const { todos } = useLoaderData();

  return (
    <div className="container">
      <TodoList todos={todos} />
    </div>
  );
}

export default TodolistPage;
