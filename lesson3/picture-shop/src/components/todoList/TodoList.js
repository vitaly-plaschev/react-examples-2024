import Todo from "../todo/Todo";
import todolistStyle from "./todolist.module.css";

const priorityValues = {
  High: 3,
  Medium: 2,
  Low: 1,
};

function TodoList({ todos }) {
  const todoCards = todos
    .sort((a, b) => priorityValues[b.priority] - priorityValues[a.priority])
    .map((todo, index) => <Todo key={index} todo={todo} />);
  return <div className={todolistStyle.todolist}>{todoCards}</div>;
}

export default TodoList;
