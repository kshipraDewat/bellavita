import React from 'react'

const Contact = () => {
  return (
    <div  className=" p-10 flex flex-col gap-10  ">
      <div className='flex flex-col items-center justify-center gap-3'>
      <h1 className=' text-3xl '>DROP US A LINE</h1>
      <p className=' '>Have a question or comment? Use the form below to send us a message and our team will get back to you ASAP.</p>
      </div>

      <div className='flex flex-col lg:flex-row gap-20 items-center justify-center '>
      <form action="" className=' flex flex-col gap-5 w-full lg:w-[30vw] text-sm '>
        <h1 className='text-2xl font-semibold'> Get in touch</h1>

        <input type="text" placeholder='Name' className='outline-nome border p-2 border-zinc-400'  />

        <input type="text" placeholder='Email' className='outline-nome border p-2  border-zinc-400'  />

        <input type="text" placeholder='Phone number' className='outline-nome border p-2  border-zinc-400'  />

        <textarea type="text" placeholder='Comment' className='outline-nome border p-2  border-zinc-400'  />
        
        <button className='bg-black text-white p-2 w-60'>SEND MESSAGE</button>
      </form>
      <div className='flex flex-col gap-5 lg:w-[30vw] '>
        <div>
        <h1 className='font-semibold'>Marketed By:</h1>
        <p className=''>BellaVita First Floor, Plot 417, Udyog Vihar III Rd, Phase III, Udyog Vihar, Sector 20, Gurugram, 122008, Haryana</p>
        </div>
        <div>
        <h1 className='font-semibold'>Manufactured By:</h1>
        <p className=''>Idam Natural Wellness Pvt. Ltd Ground Floor, Plot 417, Udyog Vihar III Rd, Phase III, Udyog Vihar, Sector 20, Gurugram, 122008, Haryana</p>
        </div>
        <div>
        <h1 className='font-semibold'>Email:</h1>
        <p className=''>shop@bellavitaorganic.com</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
