import React from "react";
import { useParams } from "react-router-dom";
import TodoList from "../../components/todos/todoList/TodoList";

import { allTodos } from "../../store/todoSlice";
import { useSelector } from "react-redux";

function StatusResultPage() {
  const { status } = useParams();
  const todos = useSelector(allTodos);

  return (
    <div className="container">
      <p>{status}</p>
      <TodoList todos={todos.filter((t) => t.status === status)} />
    </div>
  );
}

export default StatusResultPage;
