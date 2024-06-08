import React from "react";
import AddTodoForm from "../../components/todos/addTodo/AddTodoForm";
import { addTodo } from "../../requests/todosRequests";
import { allTodos, createTodo } from "../../store/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddPpage() {  
  const todos = useSelector(allTodos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNewTodo = async (todo) => {
    const copy = JSON.parse(JSON.stringify(todos));
    todo.id = Date.now();
    copy.push(todo);        

    await addTodo(todo);

    dispatch(createTodo(todo))
    navigate(`/`);
  };

  return (
    <div className="container">
      <AddTodoForm onNewTodo={handleNewTodo} />
    </div>
  );
}

export default AddPpage;
