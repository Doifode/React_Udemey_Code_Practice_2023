import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import CreateUser from '../Components.js/CreateUser'
import UserTable from '../Components.js/UserTable'
import Home from './Home'
const RoutesPath = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
    <Route path="/" element={<Home/>}>
        <Route path='usertable' element={<UserTable/>}/>
        <Route path='createuser' element={<CreateUser/>}/>
    </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutesPath
