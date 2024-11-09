import React from 'react'
import AppSelector from './components/AppSelector'
import { Outlet } from 'react-router-dom'
import Navbar from './pages/Ecommerce/components/Navbar'

const Home = () => {
  return (
    <>
    <AppSelector/>
    <Outlet/>
    </>
  )
}

export default Home