import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-zinc-800 text-white text-xs p-10  px-20'>
        <div className='flex flex-col gap-5  lg:flex-row justify-center lg:justify-between '>
        <ul className='p-2 flex flex-col gap-3 text-center '>
           <h1 className=' font-bold '>BESTSELLERS</h1>
           <li>Crazy Deals</li>
           <li>Shop All</li>
           <li>Fragrances</li>
           <li>Bath & Body</li>
           <li>Little Luxuries</li>
           <li>New Arrivals</li>
         </ul>

         <ul className='p-2 flex flex-col gap-3 text-center'>
           <h1 className=' font-bold '>INFORMATION</h1>
           <li>Blogs</li>
           <li>About Us</li>
           <li>Contact Us</li>
         </ul>

         <ul className='p-2 flex flex-col gap-3 text-center'>
           <h1 className=' font-bold '>SUPPORT</h1>
           <li>Privacy Policy</li>
           <li>Shipping Policy</li>
           <li>Refund & Return Policy</li>
           <li>Terms & Conditions</li>
         </ul>

         <ul className='p-2 flex flex-col gap-3 lg:w-[10vw] text-center'>
           <h1 className=' font-bold '>CONTACT US</h1>
           <li>Office Location: Plot no. 417, Udyog Vihar Phase III, Gurgaon, Haryana, India</li>
         </ul>

         <ul className='p-2 flex flex-col gap-3  lg:w-[10vw] text-center'>
           <h1 className=' font-bold '>Exclusive</h1>
           <input type="text" className=' border p-2' placeholder=' Email here' />
           <label htmlFor="">Sign up here to get the latest news, updates and special offers delivered to your inbox.</label>
         </ul>
        </div>
         <div className='text-center text-base font-semibold pt-5'>© 2025, Bella Vita Luxury.</div>
      </footer>

  )
}

export default Footer
