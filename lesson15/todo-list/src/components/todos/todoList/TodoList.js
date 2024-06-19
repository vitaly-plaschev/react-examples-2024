import Todo from "../todo/Todo";
import todolistStyle from "./todolist.module.css";

function TodoList({
  todos,
  onEditTodo,
  onDeleteTodo,
  onAddToCart,
  onRemoveFromCart,
  type,
}) {
  if (!todos || todos.length === 0)
    return type !== "cart" ? <h2>No todos</h2> : <h2>No products</h2>;

  const todoCards = todos.map((todo) => (
    <Todo
      type={type}
      key={todo.id}
      todo={todo}
      onEditTodo={onEditTodo}
      onDeleteTodo={onDeleteTodo}
      onAddToCart={onAddToCart}
      onRemoveFromCart={onRemoveFromCart}
    />
  ));

  return <div className={todolistStyle.todolist}>{todoCards}</div>;
}

export default TodoList;
