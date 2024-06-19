import { NavLink, Outlet } from "react-router-dom";
import { useLinkClassName } from "../hooks/useLinkClassName";
import { useTodoContext } from "../contexts/todoContext";
import appStyle from "./app.module.css";
import { useSelector } from "react-redux";
import { allProducts } from "../store/cartSlice";

function App() {
  const appNavLinkClassName = useLinkClassName(appStyle);
  const { openTodos, highTodos, doneTodos } = useTodoContext();
  const cart = useSelector(allProducts);

  return (
    <div className={appStyle.grid}>
      <header>
        <nav className={appStyle.sideNav}>
          <NavLink to="/" className={appNavLinkClassName}>
            <div>All tasks</div>
          </NavLink>
          <NavLink to="/cart" className={appNavLinkClassName}>
            <div>Cart {cart.length ? cart.length : ""}</div>
          </NavLink>
          <NavLink to="/search" className={appNavLinkClassName}>
            <div>Search</div>
          </NavLink>
          <NavLink to="/search-selectors" className={appNavLinkClassName}>
            <div>Search with selectors</div>
          </NavLink>
          <NavLink to="/statuses" className={appNavLinkClassName}>
            <div>Todos by status</div>
          </NavLink>
          <NavLink to="/open" className={appNavLinkClassName}>
            <div>Open tasks {openTodos}</div>
          </NavLink>
          <NavLink to="/done" className={appNavLinkClassName}>
            <div>Done tasks {doneTodos}</div>
          </NavLink>
          <NavLink to="/high" className={appNavLinkClassName}>
            <div>High priority tasks {highTodos}</div>
          </NavLink>
          <NavLink to="/add" className={appNavLinkClassName}>
            <div>Add todo</div>
          </NavLink>
          <NavLink to="/add-router" className={appNavLinkClassName}>
            <div>Add todo router</div>
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
