import React from "react";
import { useState } from "react";

const CreateUser = ({ GetArrayValue, EditUser }) => {
  const [UserDetail, setUserDetail] = useState({
    firstname: "",
    lastname: "",
    dateofbirth: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    GetArrayValue(UserDetail);
    console.log(UserDetail);
  };
  return (
    <div className="col-md-4">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>User Form</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <label htmlFor="">First Name</label>
                    <input
                      name="firstname"
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="">Last Name</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="lastname"
                    className="form-control"
                  />
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label htmlFor="">Date</label>
                    <input
                      onChange={handleChange}
                      name="dateofbirth"
                      type="date"
                      className="form-control"
                    />
                  </div>
                </div>
                <button className="btn btn-success btn-sm my-3" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
