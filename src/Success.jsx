import React from 'react'
import { CircleCheckBig } from 'lucide-react';

const Success = () => {
  return (
    <div className='flex justify-center items-center  text-center h-[51vh] '>
       <div className='flex gap-2'>
       <CircleCheckBig className='size-10'/>
       <h1 className='text-3xl text-center pb-10'>Successfully ordered !</h1>
       </div>
    </div>
  )
}

export default Success
