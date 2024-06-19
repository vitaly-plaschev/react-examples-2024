import React from "react";
import TodoList from "../../components/todos/todoList/TodoList";
import { useSelector, useDispatch } from "react-redux";
import store from "../../store/store";
import {
  allProducts,
  fetchCart,
  removeProductFromCart,
  getTotalPrice,
} from "../../store/cartSlice";
import { removeTodoFromCart } from "../../store/todoSlice";

export async function cartLoader() {
  store.dispatch(fetchCart());
  return { cart: [] };
}

function CartPage() {
  const cart = useSelector(allProducts);
  const totalPrice = useSelector(getTotalPrice);
  const dispatch = useDispatch();

  const handleRemoveFromCart = async (todo) => {
    // todo store operation
    dispatch(removeTodoFromCart(todo));

    // cart store operation
    dispatch(removeProductFromCart(todo));
  };

  return (
    <div className="container">
      <TodoList
        type="cart"
        todos={cart}
        onRemoveFromCart={handleRemoveFromCart}
      />
      <h2>Total price: {totalPrice}</h2>
    </div>
  );
}

export default CartPage;
