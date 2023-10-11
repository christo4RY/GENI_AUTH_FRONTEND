import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='w-full'>
      <Outlet />
      <ToastContainer />
    </div>
  )
}

export default App
