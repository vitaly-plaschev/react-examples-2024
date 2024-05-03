import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import ErrorPage from "../pages/error-page";
import CommonPage, {
  todosLoader,
  openTodosLoader,
  doneTodosLoader,
  highTodosLoader,
  getTodosByTitleLoader,
} from "../pages/common/common-page";
import AddPpage from "../pages/add/add-page";
import SearchPage from "../pages/search/search-page";
import TodolistPage from "../pages/todolist/todolist-page";
import StatusPage from "../pages/status/status-page";
import StatusResultPage from "../pages/status/status-result";

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
    ],
  },
];

export const router = createBrowserRouter(routes);
