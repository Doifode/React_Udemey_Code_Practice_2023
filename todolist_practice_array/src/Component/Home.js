import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../NavigationBar'

const Home = () => {
  return (
    <div>
      <NavigationBar/> 
    <Outlet/>
    </div>
  )
}

export default Home
