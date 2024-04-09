import { useState } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import TodoList from "../components/todos/todoList/TodoList";
import useTodos from "../hooks/useTodos";
import AddTodoForm from "../components/todos/addTodo/AddTodoForm";
import SortTodo from "../components/todos/sortTodo/SortTodo";

function Todos() {
  const { todos } = useTodos();
  const [filteredItems, setFilteredItems] = useState(todos);

  const handleNewTodo = (newTodo) => {
    const dataCopy = JSON.parse(JSON.stringify(filteredItems));

    newTodo.id = Date.now();
    dataCopy.push(newTodo);
    setFilteredItems(dataCopy);
  };

  const handleEditTodo = (todo) => {
    const dataCopy = JSON.parse(JSON.stringify(filteredItems));
    const index = dataCopy.findIndex((item) => item.id === todo.id);
    dataCopy.splice(index, 1, todo);
    setFilteredItems(dataCopy);
  };

  const handleDeleteTodo = (todo) => {
    const dataCopy = JSON.parse(JSON.stringify(filteredItems));
    const index = dataCopy.findIndex((item) => item.id === todo.id);
    dataCopy.splice(index, 1);
    setFilteredItems(dataCopy);
  };

  return (
    <div className="container">
      <h2>This is Todo task list</h2>
      <SearchBar todos={todos} setFilteredItems={setFilteredItems} />
      <AddTodoForm onNewTodo={handleNewTodo} />
      <SortTodo data={filteredItems} onUpdateItems={setFilteredItems} />
      <TodoList
        todos={filteredItems}
        onEditTodo={handleEditTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default Todos;
