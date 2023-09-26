import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/main.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Provider } from "react-redux";
import { store } from "./features/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <RouterProvider router={routes} />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
