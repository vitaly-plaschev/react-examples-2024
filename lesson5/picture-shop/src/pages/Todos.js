import { useState } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import TodoList from "../components/todoList/TodoList";
import useTodos from "../hooks/useTodos";

function Todos() {
  const { todos } = useTodos();
  const [filteredItems, setFilteredItems] = useState(todos);

  return (
    <div className="container">
      <h2>This is Todo task list</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        enim reiciendis deserunt assumenda ex accusamus nihil! Ut obcaecati
        ipsum laudantium nesciunt distinctio perferendis, nisi architecto est
        sequi eligendi deserunt aut blanditiis, adipisci recusandae. Odit, rerum
        accusamus! Eaque ut aliquid dolorem voluptatem, perspiciatis adipisci
        odit fugiat totam provident asperiores quam quia maiores odio similique.
      </p>
      <SearchBar todos={todos} setFilteredItems={setFilteredItems} />
      <TodoList todos={filteredItems} />
    </div>
  );
}

export default Todos;
