import React from 'react'
import AppSelector from './components/AppSelector'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <AppSelector/>
    <Outlet/>
    </>
  )
}

export default Home