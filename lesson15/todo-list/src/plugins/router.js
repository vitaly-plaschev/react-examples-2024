import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import ErrorPage from "../pages/error-page";
import CommonPage, {
  todosLoader,
  openTodosLoader,
  doneTodosLoader,
  highTodosLoader,
  getTodosByTitleLoader,
  getTodosByTitleLoaderWithSelectors,
} from "../pages/common/common-page";
import CartPage, { cartLoader } from "../pages/cart/cart-page";
import AddPpage from "../pages/add/add-page";
import AddPageRouter, { createAction } from "../pages/add/add-page-router";
import SearchPage from "../pages/search/search-page";
import TodolistPage from "../pages/todolist/todolist-page";
import StatusPage from "../pages/status/status-page";
import StatusResultPage from "../pages/status/status-result";
import EditTodoFormRouter, {
  updateAction,
  todoByIdLoader,
} from "../pages/edit/EditTodoFormRouter";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CommonPage />,
        loader: todosLoader,
      },
      {
        path: "/statuses",
        element: <StatusPage />,
        children: [
          {
            index: true,
            element: <TodolistPage />,
            loader: todosLoader,
          },
          {
            path: ":status",
            element: <StatusResultPage />,
            loader: todosLoader,
          },
        ],
      },
      {
        path: "/open",
        element: <CommonPage />,
        loader: openTodosLoader,
      },
      {
        path: "/search",
        element: <SearchPage />,
        children: [
          {
            index: true,
            element: <TodolistPage />,
            loader: getTodosByTitleLoader,
          },
        ],
      },
      {
        path: "/search-selectors",
        element: <SearchPage />,
        children: [
          {
            index: true,
            element: <TodolistPage />,
            loader: getTodosByTitleLoaderWithSelectors,
          },
        ],
      },
      {
        path: "/done",
        element: <CommonPage />,
        loader: doneTodosLoader,
      },
      {
        path: "/high",
        element: <CommonPage />,
        loader: highTodosLoader,
      },
      {
        path: "/add",
        element: <AddPpage />,
        loader: todosLoader,
      },
      {
        path: "/add-router",
        element: <AddPageRouter />,
        action: createAction,
      },
      {
        path: "/edit-router/:todoId/editing",
        element: <EditTodoFormRouter />,
        loader: todoByIdLoader,
        action: updateAction,
      },
      {
        path: "/cart",
        element: <CartPage />,
        loader: cartLoader,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
