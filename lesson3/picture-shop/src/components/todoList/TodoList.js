import Todo from "../todo/Todo";
import todolistStyle from "./todolist.module.css";

function TodoList({ todos }) {
  const todoCards = todos
    .filter((todo) => todo.status === "In progress")
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((todo) => <Todo key={todo.id} todo={todo} />);
  return <div className={todolistStyle.todolist}>{todoCards}</div>;
}

export default TodoList;
