import React from "react";
import AddTodoForm from "../../components/todos/addTodo/AddTodoForm";
import { useLoaderData } from "react-router-dom";
import { useTodoContext } from "../../contexts/todoContext";
import { addTodo } from "../../requests/todosRequests";

function AddPpage() {
  const { todos } = useLoaderData();
  const { setTodos } = useTodoContext();

  const handleNewTodo = async (todo) => {
    const copy = JSON.parse(JSON.stringify(todos));
    todo.id = Date.now();
    copy.push(todo);    
    setTodos([...copy]);
    await addTodo(todo);
  };

  return (
    <div className="container">
      <AddTodoForm onNewTodo={handleNewTodo} />
    </div>
  );
}

export default AddPpage;
