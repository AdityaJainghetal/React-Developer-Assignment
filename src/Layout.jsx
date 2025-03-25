import React from 'react'
import Topmenu from './Topmenu'
import { Outlet } from 'react-router-dom'
import Footer from './Componenet/Footer'

const Layout = () => {
  return (
    <>
    <Topmenu/>
    <Outlet/>
    <Footer/>
    
    
    </>
  )
}

export default Layout