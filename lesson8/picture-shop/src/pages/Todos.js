import { useReducer, useState } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import TodoList from "../components/todos/todoList/TodoList";
import AddTodoForm from "../components/todos/addTodo/AddTodoForm";
import SortTodo from "../components/todos/sortTodo/SortTodo";
import { useTodoContext } from "../contexts/todoContext";

function Todos() {
  const { todos: data, setTodos } = useTodoContext();
  const [filteredItems, setFilteredItems] = useState(data);
  const [todos, dispatch] = useReducer(handleTodo, data);

  function handleTodo(todos, action) {
    switch (action.type) {
      case "newTodo": {
        const copy = JSON.parse(JSON.stringify(todos));
        action.todo.id = Date.now();
        copy.push(action.todo);
        setFilteredItems(copy);
        return [...copy];
      }
      case "editTodo": {
        const copy = JSON.parse(JSON.stringify(todos));
        const index = copy.findIndex((item) => item.id === action.todo.id);
        copy.splice(index, 1, action.todo);
        setFilteredItems(copy);
        return [...copy];
      }
      case "deleteTodo": {
        const copy = JSON.parse(JSON.stringify(todos));
        const index = copy.findIndex((item) => item.id === action.todo.id);
        copy.splice(index, 1);
        setFilteredItems(copy);
        return [...copy];
      }
    }
  }

  const handleNewTodo = (todo) => dispatch({ type: "newTodo", todo });
  const handleEditTodo = (todo) => dispatch({ type: "editTodo", todo });
  const handleDeleteTodo = (todo) => dispatch({ type: "deleteTodo", todo });

  return (
    <div className="container">
      <h2>This is Todo task list</h2>
      <SearchBar todos={todos} setFilteredItems={setFilteredItems} />
      <AddTodoForm onNewTodo={handleNewTodo} />
      <SortTodo data={todos} onUpdateItems={setFilteredItems} />
      <TodoList
        todos={filteredItems}
        onEditTodo={handleEditTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default Todos;
