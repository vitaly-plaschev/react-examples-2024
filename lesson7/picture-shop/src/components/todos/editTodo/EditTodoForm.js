import { useState } from "react";
import editTodoStyle from "../commonTodoForm.module.css";
import { priorities, statuses } from "../../../todos";

function EditTodoForm({ todo, onEditTodo, onEditChange }) {
  const [newTodo, setNewTodo] = useState(todo);
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

    onEditTodo(newTodo);

    onEditChange();

    setErrors({ title: "" });

    setDisable(true);

    event.target.reset();
  };

  return (
    <div className={editTodoStyle.create}>
      <h2>Edit Todo</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          name="title"
          type="text"
          required
          onChange={handleInput}
          defaultValue={todo.title}
        ></input>
        <span>{errors.title}</span>
        <label>Priority:</label>
        <select name="priority" onChange={handleInput} defaultValue={todo.priority}>
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
          defaultValue={todo.date}
        ></input>
        <label>Status:</label>
        <select name="status" onChange={handleInput} defaultValue={todo.status}>
          {statuses.map((status) => (
            <option key={status.id} value={status.value}>
              {status.name}
            </option>
          ))}
        </select>
        <div className={editTodoStyle.buttons_container}>
          <button
            disabled={disable}
            className={
              disable ? editTodoStyle.button_grey : editTodoStyle.button_pink
            }
          >
            Edit Todo
          </button>
          <button className={editTodoStyle.button_cancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditTodoForm;
