import React, { useCallback, useContext } from "react";
import UserContext from "../Context/UserContext";
const UserTable = () => {
  const { userArray  ,deleteUserById} = useContext(UserContext);
  
  const deletUsers=(id)=>{
    deleteUserById(id)
  }
  // const editUser =(id)=>{
  //   EditUser(id)

  // }
const renderTable =  useCallback( userArray.map((item , index)=>{
  return <tr key={index} className="text-center" >
    <td  >{index+1}</td>
    <td  >{item.firstname}</td>
    <td >{item.lastname}</td>
    <td >{item.dateofbirth}</td>
    <td ><button onClick={()=>deletUsers(item.id)}>Delete</button></td>
    <td ><button >Edit</button></td>
  </tr>
}),[userArray])
useCallback(
()=>{
  console.log(userArray)
},[userArray]
  
)


  return (
    <>
      <div className="container">
        <table className="table table-bordered table-striped">
          <tbody>
            <tr className="text-center">
              <th>Sr.No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Birth Date</th>
              <th>Actions</th>
            </tr>
           
               { userArray.length >0 ? renderTable :null }
         
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
