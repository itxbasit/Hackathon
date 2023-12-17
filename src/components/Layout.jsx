import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import AllStudentLayout from './AllStudentLayout'

const Layout = () => {
  return (
        <div className="flex">
            <Sidebar/>
            <Outlet/>
        </div>
    )
}

export default Layout