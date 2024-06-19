import { useState } from "react";
import addTodoStyle from "../commonTodoForm.module.css";
import { priorities, statuses } from "../../../requests/todosRequests";

const DEFAULT_STATE = {
  title: "",
  priority: "Low",
  status: "In progress",
  date: "2024/03/08",
};

function AddTodoForm({ onNewTodo }) {
  const [newTodo, setNewTodo] = useState(DEFAULT_STATE);
  const [errors, setErrors] = useState({ title: "" });
  const [disable, setDisable] = useState(true);

  const handleInput = (event) => {
    const { name, value } = event.target;

    setNewTodo((oldTodo) => ({
      ...oldTodo,
      [name]: value,
    }));

    if (name === "title" && (value.length < 2 || value.length > 15)) {
      setErrors((oldError) => ({
        ...oldError,
        title: `The title length should be from 2 to 15 characters. You entered ${value.length} chars.`,
      }));
      setDisable(true);
    } else {
      setErrors({ title: "" });
      setDisable(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onNewTodo(newTodo);

    setNewTodo(DEFAULT_STATE);

    setErrors({ title: "" });

    setDisable(true);

    event.target.reset();
  };

  return (
    <div className={addTodoStyle.create}>
      <h2>Add a New Todo</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input name="title" type="text" required onChange={handleInput}></input>
        <span>{errors.title}</span>
        <label>Priority:</label>
        <select name="priority" onChange={handleInput}>
          {priorities.map((priority) => (
            <option key={priority.id} value={priority.value}>
              {priority.name}
            </option>
          ))}
        </select>
        <label>Date:</label>
        <input
          name="date"
          type="text"
          required
          onChange={handleInput}
          value={DEFAULT_STATE.date}
        ></input>
        <label>Status:</label>
        <select name="status" onChange={handleInput}>
          {statuses.map((status) => (
            <option key={status.id} value={status.value}>
              {status.name}
            </option>
          ))}
        </select>
        <label>Price:</label>
        <input name="price" type="number"  min="10" max="100" required onChange={handleInput}></input>
        <label>Amount:</label>
        <input name="amount" type="number"  min="10" max="100" required onChange={handleInput}></input>
        <button
          disabled={disable}
          className={
            disable ? addTodoStyle.button_grey : addTodoStyle.button_pink
          }
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;
