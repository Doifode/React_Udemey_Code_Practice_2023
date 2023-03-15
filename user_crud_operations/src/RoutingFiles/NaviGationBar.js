import React from 'react'
import { NavLink } from 'react-router-dom'
const NaviGationBar = () => {
  return (
    <div>
        <div className="row">
            <div className="col-md-12">
                <NavLink className="px-2 fw-bold fs-3 text-decoration-none" to="/usertable">User</NavLink>
                <NavLink className="px-2 fw-bold fs-3 text-decoration-none" to="/createuser">createuser</NavLink>
          
            </div>
        </div>
    </div>
  )
}

export default NaviGationBar
