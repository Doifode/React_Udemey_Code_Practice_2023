import { NavLink, Outlet } from 'react-router-dom'
import React from 'react'
export default function NavigationBar() {
  return (
  <>
    <div>
      <div className="row">
        <div className="col-md-12">
            <ul>
                <li>
<NavLink className='nav-link' to="/todolist">ToDoList </NavLink>
                </li>
            </ul>
        </div>
      </div>
    </div>
  
   
    </>

    
  )
}
