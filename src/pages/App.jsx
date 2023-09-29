import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  )
}

export default App
