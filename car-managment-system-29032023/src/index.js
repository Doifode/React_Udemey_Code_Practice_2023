import App from "./App";
import React from "react";
import ReactDom from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
