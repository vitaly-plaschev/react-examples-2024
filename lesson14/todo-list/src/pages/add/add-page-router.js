import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { addTodo } from "../../requests/todosRequests";
import addTodoStyle from "../../components/todos/commonTodoForm.module.css";
import { priorities, statuses } from "../../requests/todosRequests";
import store from "../../store/store";
import { createTodo, allTodos } from "../../store/todoSlice";
import { useSelector } from "react-redux";

const DEFAULT_STATE = {
  title: "",
  priority: "Low",
  status: "In progress",
  date: "2024/03/08",
};

export async function createAction({ request }) {  
  const data = await request.formData();    
  const todo = {};

  todo.id = Date.now();
  todo.title = data.getAll('title')[0] || "";
  todo.priority = data.getAll('priority')[0] || "";
  todo.date = data.getAll('date')[0] || "";
  todo.status = data.getAll('status')[0] || "";  
  
  store.dispatch(createTodo(todo));
  await addTodo(todo);  

  return redirect(`/`);
}

export default function AddPageRouter() {
  const [newTodo, setNewTodo] = useState(DEFAULT_STATE);
  const [errors, setErrors] = useState({ title: "" });
  const [disable, setDisable] = useState(true);  
  const todos = useSelector(allTodos);

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

  const handleSubmit = () => {
    const copy = JSON.parse(JSON.stringify(todos));
    newTodo.id = Date.now();
    copy.push(newTodo);    
    // setTodos([...copy]);
  };

  return (    
    <div className={addTodoStyle.create}>
      <h2>Add a New Todo</h2>
      <Form method="PUT">
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
        <button
          disabled={disable}
          className={
            disable ? addTodoStyle.button_grey : addTodoStyle.button_pink
          }
          type="submit"
          onClick={handleSubmit}
        >
          Add Todo
        </button>
      </Form>
    </div>
  );
}
