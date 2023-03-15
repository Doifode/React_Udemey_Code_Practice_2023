import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
function App() {
  let inputType = "text";
  let inputPass = "password";
  return (
    <>
      <p>User name :</p>
      <input autoFocus type={inputType} />
      <p> Password :</p>
      <input type={inputPass} />
      <br />
      <br />
      <button style={{ border: "1px solid red", padding: "3px" }}>
        {" "}
        Login
      </button>
    </>
  );
}
root.render(<App />);
