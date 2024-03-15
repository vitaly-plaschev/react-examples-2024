import { useState } from "react";
import todoStyle from "./todo.module.css";

const priorityColors = {
  High: "red",
  Medium: "blue",
  Low: "green",
};

function Details({ todo }) {
  const priority = (
    <p style={{ color: priorityColors[todo.priority] }}>{todo.priority}</p>
  );

  return (
    <>
      {priority}
      <p>{todo.date}</p>
      <p>
        <b>{todo.status}</b>
      </p>
    </>
  );
}

function Todo({ todo }) {
  const [details, setDetails] = useState(false);

  const handleClick = () => {
    setDetails(!details);
  };

  return (
    <div className={todoStyle.todo} onClick={handleClick}>
      <h2>{todo.title}</h2>
      {details && <Details todo={todo} />}
    </div>
  );
}

export default Todo;
