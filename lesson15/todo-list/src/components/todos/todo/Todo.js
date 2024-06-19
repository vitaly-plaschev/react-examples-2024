import { useState } from "react";
import { NavLink } from "react-router-dom";
import todoStyle from "./todo.module.css";
import commonTodoStyle from "../commonTodoForm.module.css";
import EditTodoForm from "../editTodo/EditTodoForm";

const priorityColors = {
  High: "red",
  Medium: "blue",
  Low: "green",
};

function Details({ todo }) {
  return (
    <>
      <p>{todo.date}</p>
    </>
  );
}

function Todo({
  todo,
  onEditTodo,
  onDeleteTodo,
  onAddToCart,
  onRemoveFromCart,
  type,
}) {
  const [details, setDetails] = useState(false);
  const [editState, setEditState] = useState(false);

  const handleClick = () => setDetails(!details);
  const handleEditTodo = () => setEditState(!editState);
  const handleDeleteTodo = () => onDeleteTodo && onDeleteTodo(todo);
  const handleCompleteTodo = () => {
    todo.status = "Done";
    onEditTodo && onEditTodo(todo);
  };
  const handleAddToCart = () => {
    onAddToCart && onAddToCart(todo);
  };

  const handleRemoveFromCart = () => {
    onRemoveFromCart && onRemoveFromCart(todo);
  };

  return (
    <>
      {editState ? (
        <div className={todoStyle.todo}>
          <EditTodoForm
            todo={todo}
            onEditTodo={onEditTodo}
            onEditChange={handleEditTodo}
          />
        </div>
      ) : (
        <div className={todoStyle.todo} onClick={handleClick}>
          <h2>{todo.title}</h2>
          <p style={{ color: priorityColors[todo.priority] }}>
            {todo.priority}
          </p>
          {details && <Details todo={todo} />}
          <p>
            <b>{todo.status}</b>
          </p>
          <p>
            <b>Price: {todo.price}</b>
          </p>
          <p>
            <b>Amount: {todo.amount}</b>
          </p>
          <div className={commonTodoStyle.buttons_container}>
            {type !== "cart" ? (
              <>
                <button
                  className={commonTodoStyle.button_pink}
                  onClick={handleEditTodo}
                >
                  Edit Todo
                </button>
                <NavLink to={`/edit-router/${todo.id}/editing`}>
                  <button className={commonTodoStyle.button_pink}>
                    Edit Todo Router
                  </button>
                </NavLink>
                <button
                  className={commonTodoStyle.button_delete}
                  onClick={handleDeleteTodo}
                >
                  Delete Todo
                </button>
                <button
                  className={commonTodoStyle.button_complete}
                  onClick={handleCompleteTodo}
                >
                  Complete Todo
                </button>
                <button
                  className={commonTodoStyle.button_pink}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <button
                  className={commonTodoStyle.button_delete}
                  onClick={handleRemoveFromCart}
                >
                  Remove from Cart
                </button>
              </>
            ) : (
              <>                
                <button
                  className={commonTodoStyle.button_delete}
                  onClick={handleRemoveFromCart}
                >
                  Remove from Cart
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Todo;
