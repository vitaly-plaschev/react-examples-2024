import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./plugins/router";
import TodoContextProvider from "./contexts/todoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoContextProvider>
    <RouterProvider router={router} />
  </TodoContextProvider>
);
