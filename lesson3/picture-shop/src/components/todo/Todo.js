import todoStyle from "./todo.module.css";

const priorityColors = {
  High: "red",
  Medium: "blue",
  Low: "green",
};

function Todo({ todo }) {
  const priority = (
    <p style={{ color: priorityColors[todo.priority] }}>{todo.priority}</p>
  );
  return (
    <div className={todoStyle.todo}>
      <h2>{todo.title}</h2>
      {priority}
      <p>{todo.date}</p>
      <p>
        <b>{todo.status}</b>
      </p>
    </div>
  );
}

export default Todo;
