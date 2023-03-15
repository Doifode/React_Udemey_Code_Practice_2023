import React, { useEffect, useState } from "react";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
// geting value from  local storage
const getLocalStorageVal = () => {
  let UserLocaldata = localStorage.getItem("UserDetailsLocal");
  if (UserLocaldata) {
    return JSON.parse(localStorage.getItem("UserDetailsLocal"));
  } else {
    return [];
  }
};

const Userpage = () => {
  const [showform, setShowForm] = useState(false);
  const [editform, setEditForm] = useState(false);
  const [userArray, setUserArray] = useState(getLocalStorageVal());

  const GetArrayValue = (userDetails) => {
    const updateduser = [
      ...userArray,
      {
        firstname: userDetails.firstname,
        lastname: userDetails.lastname,
        dateofbirth: userDetails.dateofbirth,
        id: Math.round(Math.random() * 999),
      },
    ];
    setUserArray(updateduser);
  };
  const DeleteUserrById = (id) => {
    const updateuser = userArray.filter((user) => {
      return user.id !== id;
    });
    setUserArray(updateuser);
  };
  const handleEditform = () => {
    setEditForm(!editform);
    setShowForm(false);
  };

  const editUserById = (id, userarraydet) => {
    const updatedUser = userArray.map((user) => {
      if (user.id === id) {
        return {
          ...userArray,
          firstname: userarraydet.firstname,
          lastname: userarraydet.lastname,
          dateofbirth: userarraydet.dateofbirth,
        };
      }
      else{
      return user}
      
    });
    setUserArray(updatedUser)
  };

  useEffect(() => {
    localStorage.setItem("UserDetailsLocal", JSON.stringify(userArray));
  }, [userArray]);

  const renderTable = userArray.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.firstname}</td>
        <td>{user.lastname}</td>
        <td>{user.dateofbirth}</td>
        <td>
          <button onClick={() => DeleteUserrById(user.id)}> Delete</button>

          <button onClick={handleEditform} > Edit</button>
        </td>
      </tr>
    );
  });
  return (
    <div className="row">
      <div className={showform ? "col-md-8" : "col-md-12"}>
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-between">
                <h3>User Form</h3>
                <button
                  className="btn border"
                  onClick={() => {
                    setShowForm(!showform);
                    setEditForm(false);
                  }}
                >
                  Form
                </button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <table className="table table-bordered table-striped">
              <tbody>
                <tr >
                  <th>Sr.No</th>
                  <th>User Name</th>
                  <th>Last Name</th>
                  <th>Date Of Birth</th>
                  <th>Actions</th>
                </tr>
                {renderTable}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showform ? <CreateUser GetArrayValue={GetArrayValue} /> : null}

      <div>
        {editform ? (
          <EditUser editUser={editUserById} userArray={userArray} />
        ) : null}
      </div>
    </div>
  );
};

export default Userpage;
