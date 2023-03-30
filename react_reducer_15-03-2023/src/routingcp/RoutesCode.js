import React from 'react'
import { Route ,BrowserRouter,Routes } from 'react-router-dom'
import Home from './Home'
import Reducer from '../Reducer'
export default function RoutesCode() {
  return (
    <div>
        <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/">
          <Route  element={<Reducer/>} path="/reducer" />
        </Route>

      </Routes>
      
      </BrowserRouter>
    </div>
  )
}
