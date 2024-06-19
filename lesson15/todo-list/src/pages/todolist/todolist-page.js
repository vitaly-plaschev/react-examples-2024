import React from "react";
import TodoList from "../../components/todos/todoList/TodoList";
import { allTodos } from "../../store/todoSlice";
import { useSelector } from "react-redux";

function TodolistPage() {
  const todos = useSelector(allTodos);

  return (
    <div className="container">
      <TodoList todos={todos} />
    </div>
  );
}

export default TodolistPage;
