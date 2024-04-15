import { createContext, useContext, useState } from "react";
import todoData from "../todos.js";

const TodoContext = createContext(null);

export default function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState(todoData);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
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
