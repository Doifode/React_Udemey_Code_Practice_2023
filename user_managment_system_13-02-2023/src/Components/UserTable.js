import React, { useEffect, useState } from "react";
import CreateUSer from "./CreateUSer";

function GetUserArrayFromLocalData(){
   const localStorageUSerarray = localStorage.getItem('userDetails')
    if(localStorageUSerarray){
return JSON.parse(localStorage.getItem('userDetails'))
    }
    else{
        return[]
    }
}
const UserTable = () => {
  const [userArray, setUserArray] = useState(GetUserArrayFromLocalData());
  const [showTable, setShowTable] = useState(false);
  const showNhide = () => {
    setShowTable(!showTable);
  };
  function setUserarrayData(usedata) {
    const updatedUser = [
      ...userArray,
      {
        firstname: usedata.firstname,
        lastname: usedata.lastname,
        dateofbirth: usedata.dateofbirth,
        id: Math.round(Math.random() * 1000),
      },
    ];
    setUserArray(updatedUser);
  }

// Delete user by id function 
 const deleteUserById =(userid)=>{ 
const deletedUser = userArray.filter((user)=>{
  return user.id !== userid
})
setUserArray(deletedUser)
 }

  useEffect(()=>{
    localStorage.setItem('userDetails',JSON.stringify(userArray))
  },[userArray])
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-md-12 d-flex justify-content-between">
                    <h3> User Details</h3>
                    <button
                      onClick={showNhide}
                      className="btn btn-success btn-sm"
                    >
                      {" "}
                      Form
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <table className="table table-bordered table-striped">
                      <tbody>
                        <tr>
                          <th>First Name </th>
                          <th>Last Name</th>
                          <th>Date Of Birth </th>
                          <th>Action </th>
                        </tr>
                        {userArray && userArray.length >0
                          ? userArray.map((item) => {
                              return (
                                <tr key={item.id}>
                                  <td>{item.firstname}</td>
                                  <td>{item.lastname}</td>
                                  <td>{item.dateofbirth}</td>
                                  <td>
                                    <button
                                      className="btn btn-success btn-sm"
                                      onClick={() => {
                                        console.log(item.id);
                                      }}
                                    >
                                      Edit
                                    </button>
                                    <button onClick={deleteUserById(item.id)} className="btn btn-danger btn-sm">
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              );
                            })
                          : ""}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {showTable ? <CreateUSer setUserarrayData={setUserarrayData} /> : null}
      </div>
    </>
  );
};

export default UserTable;
