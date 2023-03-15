

import { NavLink } from 'react-router-dom'

export default function NavigationBar() {
  return  <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink to="/UserTable"  className="nav-link active" aria-current="page">User</NavLink>
        <NavLink to="/createuser"  className="nav-link">CreateUser</NavLink>
      </div>
    </div>
  </div>
</nav></>

}