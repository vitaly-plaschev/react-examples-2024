import useTodos from "../../hooks/useTodos";
import Todo from "../todo/Todo";
import todolistStyle from "./todolist.module.css";

function TodoList() {
  const { todos, isLoading, error } = useTodos();
  if (error) return <h2>Error at todos loading</h2>;
  if (isLoading) return <h2>Loading...</h2>;  
  if (!todos || todos.length === 0) return <h2>No data to display</h2>;
  const todoCards = todos
    .filter((todo) => todo.status === "In progress")
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((todo) => <Todo key={todo.id} todo={todo} />);
  return <div className={todolistStyle.todolist}>{todoCards}</div>;
}

export default TodoList;
