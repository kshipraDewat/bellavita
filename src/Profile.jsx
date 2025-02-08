import React from 'react'
import { RxRadiobutton } from 'react-icons/rx'

const Profile = () => {
  return (
    <div className=' h-[50vh] flex flex-col items-center justify-center gap-5 '>
      <h1 className='font-bold text-2xl'>Enter Mobile Number</h1>
      <p>We will send an OTP to verify your number</p>
      <input type="text" placeholder='+91 | Mobile Number' className='outline-none border p-2 border-zinc-400 w-[20vw]'  />
      <div className='flex items-center gap-2 justify-center'>
        <RxRadiobutton/>
        <p>Send me order updates and offers</p>
      </div>
      <button className='bg-black text-white p-2 w-[20vw]'>SEND OTP</button>
    </div>
  )
}

export default Profile
