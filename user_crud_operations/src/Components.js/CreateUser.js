import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
const CreateUser = () => {
const [users , setUsers]=useState([])
  const {CreateUser} = useContext(UserContext)

const handleSubmit=(e)=>{
e.preventDefault()
CreateUser(users)
console.log(users)


}
const handleChange =(e)=>{
  const { name,value}=e.target

  setUsers((prev)=>{
    return {...prev, [name]:value}
  })
}

  return (
    <div className="container">
      <div className="container">
        <div className="row ">
          <div className="d-flex justify-content-center  align-items-center">
          <form action="" onSubmit={handleSubmit}>
          <div className="col-md-12 ">
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="">First Name :</label>
                  <input onChange={handleChange} type="text" name="firstname"  className="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="">Last Name :</label>
                  <input onChange={handleChange}  type="text" name="lastname" className="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="">Date Of Birth:</label>
                  <input onChange={handleChange} type="date" name="dateofbirth" className="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button className="btn  btn-success btn-sm">save</button>
                </div>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
