import Todo from "../todo/Todo";
import todolistStyle from "./todolist.module.css";

function TodoList({ todos }) {
  if (!todos || todos.length === 0) return <h2>No todos</h2>;

  const todoCards = todos.map((todo) => <Todo key={todo.id} todo={todo} />);

  return <div className={todolistStyle.todolist}>{todoCards}</div>;
}

export default TodoList;
