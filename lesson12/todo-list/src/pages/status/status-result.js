import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodoList from "../../components/todos/todoList/TodoList";
import { getTodosByStatus } from "../../requests/todosRequests";

function StatusResultPage() {
  const { status } = useParams();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getTodosByStatus(status);
      setTodos(data);
    }

    fetchData();
  }, [todos]);

  return (
    <div className="container">
      <p>{status}</p>
      <TodoList todos={todos} />
    </div>
  );
}

export default StatusResultPage;
