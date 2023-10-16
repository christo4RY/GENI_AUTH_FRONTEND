import React from 'react'

const GuestLayout = ({label,title,children}) => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
    <div className="w-full md:w-[50%] h-full bg-[#053B50]">
      <img src="/login.jpg" className="w-full h-full object-cover" alt="" />
    </div>
    <div className="w-full md:w-[50%] flex items-center">
      <div className="w-full">
        <div className="w-full md:w-[70%] mx-auto p-8 md:p-10">
          <div className="mb-10 w-full space-y-5">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <h5 className=" text-slate-400 text-sm">
              {label}
            </h5>
          </div>
         {children}
        </div>
      </div>
    </div>
  </div>
  )
}

export default GuestLayout
