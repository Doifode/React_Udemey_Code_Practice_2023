import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import TodoList from "./Component/TodoList";
import NavigationBar from "./NavigationBar";
export default function App() {
  return (
   <>
   <h1>App!</h1>
   <BrowserRouter>
   <Routes>
    <Route path="/"  element={<NavigationBar/>} />
   </Routes>
   
   </BrowserRouter>
   <Outlet/>
   </>
  )
}

