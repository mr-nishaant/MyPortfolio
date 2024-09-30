import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Routes() {
  return (
    <>
      <Navbar/>
          <Outlet />
      <Footer/>
    </>
  )
}

export default Routes