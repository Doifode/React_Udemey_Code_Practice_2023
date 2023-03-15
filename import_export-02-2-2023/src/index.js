import App, { message } from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
function Myapp() {
  return <h1> <App/> {message} </h1>;
}
root.render(<Myapp/>);
