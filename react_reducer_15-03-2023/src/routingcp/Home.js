import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigatoin  from '../Navigatoin'
export default function Home() {
  return (
    <div>
      <Navigatoin/>
      <Outlet/>
    </div>
  )
}

