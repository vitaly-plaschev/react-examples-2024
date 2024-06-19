import { useState } from "react";
import { Form, redirect, useLoaderData } from "react-router-dom";
import editTodoStyle from "../../components/todos/commonTodoForm.module.css";
import {
  priorities,
  statuses,
  getTodoById,
  editTodo,
} from "../../requests/todosRequests";
import store from "../../store/store";
import { editTodoById } from "../../store/todoSlice";

export async function todoByIdLoader({ params }) {
  const todo = await getTodoById(params.todoId);
  return { todo };
}

export async function updateAction({ request, params }) {
  const data = await request.formData();
  const todoId = params.todoId;
  const todo = {};

  todo.id = parseInt(todoId);
  todo.title = data.getAll("title")[0] || "";
  todo.priority = data.getAll("priority")[0] || "";
  todo.date = data.getAll("date")[0] || "";
  todo.status = data.getAll("status")[0] || "";

  await editTodo(todo);
  store.dispatch(editTodoById(todo));

  return redirect(`/`);
}

function EditTodoFormRouter() {
  const { todo } = useLoaderData();
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
    setErrors({ title: "" });

    setDisable(true);

    event.target.reset();
  };

  return (
    <div className={editTodoStyle.create}>
      <h2>Edit Todo Router</h2>
      <Form method="POST" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          name="title"
          type="text"
          required
          onChange={handleInput}
          defaultValue={newTodo.title}
        ></input>
        <span>{errors.title}</span>
        <label>Priority:</label>
        <select
          name="priority"
          onChange={handleInput}
          defaultValue={newTodo.priority}
        >
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
          defaultValue={newTodo.date}
        ></input>
        <label>Status:</label>
        <select
          name="status"
          onChange={handleInput}
          defaultValue={newTodo.status}
        >
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
            type="submit"
          >
            Edit Todo
          </button>
          <button className={editTodoStyle.button_cancel}>Cancel</button>
        </div>
      </Form>
    </div>
  );
}

export default EditTodoFormRouter;
