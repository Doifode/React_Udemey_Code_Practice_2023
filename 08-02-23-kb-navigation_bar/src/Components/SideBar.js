import { NavLink } from "react-router-dom";
import React from "react";

function sideBar() {
  return (
    <>
      <div className="row">
        <NavLink className="nav-link" to="/users">
          <div
            onClick={() => {
              document.title = "Users-Page";
            }}
            className="pt-5 pe-2 pb-5 border col-12 bg-primary shadow-lg fs-1 text-white"
          >
            Users
          </div>
        </NavLink>
      </div>
      <div className="row">
        <NavLink className="nav-link" to="/client">
          <div
            onClick={() => {
              document.title = "Client-Page";
            }}
            className="pt-5 pe-2 pb-5 border bg-danger col-12 shadow-lg fs-1 text-white"
          >
            Client
          </div>
        </NavLink>
      </div>
      <div className="row">
        <NavLink className="nav-link" to="/admin">
          <div
            onClick={() => {
              document.title = "Admin-Page";
            }}
            className="pt-5 pe-2 pb-5 border bg-secondary col-12 shadow-lg fs-1 text-white"
          >
            Admin
          </div>
        </NavLink>
      </div>
      <div className="row">
        <NavLink className="nav-link" to="/sidebar">
          <div
            onClick={() => {
              document.title = "About-Page";
            }}
            className="pt-5 pe-2 pb-5 border bg-success col-12 shadow-lg fs-1 text-white"
          >
            About
          </div>
        </NavLink>
      </div>
    </>
  );
}
export default sideBar;
