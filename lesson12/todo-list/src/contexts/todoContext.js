import { createContext, useContext, useEffect, useState } from "react";
import { getTodos } from "../requests/todosRequests";

const TodoContext = createContext(null);

export default function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [openTodos, setOpenTodos] = useState(0);
  const [highTodos, setHighTodos] = useState(0);
  const [doneTodos, setDoneTodos] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const todoData = await getTodos();
      setTodos(todoData);
      setOpenTodos(todos.filter((todo) => todo.status === "In progress").length);
      setHighTodos(todos.filter((todo) => todo.priority === "High").length);
      setDoneTodos(todos.filter((todo) => todo.status === "Done").length);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setOpenTodos(todos.filter((todo) => todo.status === "In progress").length);
    setHighTodos(todos.filter((todo) => todo.priority === "High").length);
    setDoneTodos(todos.filter((todo) => todo.status === "Done").length);
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        openTodos,
        highTodos,
        doneTodos,
        setTodos,
        setOpenTodos,
        setHighTodos,
        setDoneTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoContextProvider");
  }
  return context;
}
