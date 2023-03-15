import Admin from "./Admin";
import About from "./About";
import Client from "./Client";
import Users from "./Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";

function RoutCp() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={ <Home />}>
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/client" element={<Client />} />
                  <Route path="/sidebar" element={<About />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
   
    </>
  );
}
export default RoutCp;
