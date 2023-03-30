import React from "react";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValues from "./components/CarValues";

export default function App() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-center">
            <CarForm />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 py-3">
          <CarSearch />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 py-3">
          <CarList />
        </div>
      </div>
      <footer>
        <div className="row">
          <div className="col-md-12  ">
            <CarValues />{" "}
          </div>
        </div>
      </footer>
    </div>
  );
}
