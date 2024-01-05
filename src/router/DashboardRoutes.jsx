import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

export const DashboardRoutes = () => {
  return (    
    <div className="container-dashboard">
        <NavBar/>
        <Outlet/>
    </div>
  )
}
