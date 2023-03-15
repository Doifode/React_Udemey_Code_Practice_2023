import React, { useState } from "react";
const CreateUSer = ({setUserarrayData }) => {
  const [user, setUser] = useState({});
  
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmi = (e) => {
    e.preventDefault();
    setUserarrayData(user);
    console.log(user);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-md-12 d-flex justify-content-between">
                    <h3>Create User</h3>
                    <button>Back User</button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form action="" onSubmit={handleSubmi}>
                  <div className="row">
                    <div className="col-md-12">
                      <label>Name:</label>
                      <input
                        onChange={onHandleChange}
                        name="firstname"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label>Name:</label>
                      <input
                        onChange={onHandleChange}
                        name="lastname"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label>Name:</label>
                      <input
                        onChange={onHandleChange}
                        name="dateofbirth"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <button className="btn btn-success btn-sm"> Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>create user ;</div>
    </>
  );
};

export default CreateUSer;
