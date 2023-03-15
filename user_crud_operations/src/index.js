import React from "react";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { ProvideUser } from "./Context/UserContext";

import ReactDOM  from "react-dom/client";
const el= document.getElementById('root');
const root = ReactDOM.createRoot(el)
root.render(
<ProvideUser>
<App/>
</ProvideUser>
)