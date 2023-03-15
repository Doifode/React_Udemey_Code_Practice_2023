import NaviGationBar from './NaviGationBar' 
import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
     <NaviGationBar/>
     <Outlet/>
      
    </div>
  )
}

export default Home
