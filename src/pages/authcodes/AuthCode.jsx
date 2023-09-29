import React, { useEffect, useState } from 'react'
import { IconClock } from '@tabler/icons-react'
import moment from 'moment'

const AuthCode = () => {
  const [clock, setClock] = useState('30s')


  return (
    <div className='w-full'>
      <h1 className='text-2xl font-bold'>Auth Code</h1>
      <div className='mt-5'>
        <div className='w-[70%] space-y-7 mx-auto bg-white rounded p-5'>
          <div className='flex justify-between mt-3'>
            <div>
              <h1>akl@gmail.com</h1>
            </div>
            <h1 className='text-xl text-center font-semibold'>One Time Password (OTP)</h1>
            <div className='flex items-center gap-2'>
              <IconClock />
              {
                clock
              }
            </div>
          </div>
          <div className=''>
            <h1 className='text-xl font-semibold text-center'>244324</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthCode
