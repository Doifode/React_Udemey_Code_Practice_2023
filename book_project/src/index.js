import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
import {Provider} from "./Context/BookContext";
// import provider  is the context function that returns the  context function  and component it self
// in the  app.js file we have  wrapped the app component with  that context  
// provider is the naming export that we have imported here 

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

root.render( //falfaf
  <Provider >
    <App />
  </Provider>
);
