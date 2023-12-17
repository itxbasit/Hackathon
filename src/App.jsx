import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import AllStudentLayout from './components/AllStudentLayout'
import Table from './components/Table'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Attendence from './components/Attendence'
import AdminLogin from './components/user/User Sign/AdminLogin'
import StudentLogin from './components/user/User Sign/StudentLogin'
import StudentDetails from './components/user/userDetails/studentDetails'

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<AdminLogin/>} />
      
      <Route path='/AttendanceApp/StudentDetails' element={<StudentDetails/>} />
    <Route path='/AttendanceApp/StudentLogin' element={<StudentLogin/>} />
    <Route element={<Layout/>}>
    <Route index path='/attendence' element={<Attendence/>} />
    <Route path='/student' element={<AllStudentLayout/>} />
    </Route>
    </>
    ))

  return (
    <RouterProvider router={router}/>
   
      )
}

export default App
