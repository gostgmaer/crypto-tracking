import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/HomePage/Home'

const Router = () => {
  return (
  
        <Routes>
            <Route path='' element={<Home></Home>} ></Route>
        </Routes>
  
  )
}

export default Router