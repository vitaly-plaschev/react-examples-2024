import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./plugins/router";
import TodoContextProvider from "./contexts/todoContext";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoContextProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </TodoContextProvider>
);
