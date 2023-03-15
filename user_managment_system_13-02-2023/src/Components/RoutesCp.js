import React from 'react'
import { BrowserRouter ,Route,Routes } from 'react-router-dom'
import UserTable from './UserTable'
import Home from './Home'
import CreateUSer from './CreateUSer'
const RoutesCp = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} >
                <Route path='/UserTable' element={<UserTable/>}/>
                <Route path='/createuser' element={<CreateUSer/>}/>
                </Route>           
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default RoutesCp
