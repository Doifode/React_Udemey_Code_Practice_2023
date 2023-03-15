import React, { useState } from 'react'

const EditUser = ({editUser ,userArray}) => {
const [newUser , setNewUser] = useState()
function handleChange(e){
    const { name ,value}=e.target
setNewUser((prev)=>{
    return{ ...prev , [name]:value}
})
}
const handleSubmit=(e)=>{
    e.preventDefault()
    editUser( userArray.id, newUser)
    console.log(newUser)
}
  return (

        <div className="d-flex justify-content-center align-items-center">
        
            <form action="" onSubmit={handleSubmit}>
          <div className="row">
           <label htmlFor="">First Name</label>
            <input value={newUser} type=" input" onChange={handleChange} name='firstname' className='form-control w-75' />
           </div>
          <div className="row">
           <label htmlFor="">First Name</label>
            <input value={newUser} type=" input" onChange={handleChange} name='lastname' className='form-control w-75' />
           </div>
          <div className="row">
           <label htmlFor="">First Name</label>
            <input value={newUser} type=" input" onChange={handleChange} name='dateofbirth' className='form-control w-75' />
           </div>
           <button className='btn btn-success'> Submit</button>
          </form>
            </div>
        
    
  )
}

export default EditUser
