import React from 'react'

const About = () => {
  return ( 
    <div  className=" py-10 m-auto lg:w-[65vw] text-base">
      <h1 className='text-3xl text-center pb-10'>About Us</h1>
      <div className='flex flex-col gap-10'>
      <div className='px-20 flex flex-col gap-5 '>
        <h1 className=' font-semibold '>Who We Are </h1>
        <p className=''>Who doesn’t like to smell awesome and get compliments on their perfume? If you’re like us, obsessed with perfumes and always on-the-go, then we have something for you. BELLAVITA is a fragrance-forward brand that creates world-class luxury perfumes, bath and body products and skincare that feel good and smell even better. Our perfumes are perfect to make you the centre of attention, be it day or night. Our best selling perfumes are infused in our bath and body ranges so that you smell awesome straight from the shower. Made with imported perfume oils from France, Spain and Italy, BELLAVITA is single-mindedly and completely obsessed with making you smell fresh as you power through the day. </p>
      </div>

      <div className=' px-20 flex flex-col gap-5 '>
        <h1 className='font-semibold '>What we want to achieve </h1>
        <p className=' '>We want to make luxury perfumes and aromatic bath and body ranges accessible to all at value-driven prices. No one should have to compromise on their right to smell good with BELLAVITA around. Light on the pocket and heavy on the fragrance, we’ve got your back.</p>
      </div>
      </div>

      <div className='py-10 px-20 flex flex-col gap-5 '>
        <h1 className=' text-xl font-semibold '>Our promise to you </h1>
        <div className='px-2'>
            <h1 className=' font-semibold '>IFRA-certified </h1>
            <p className=''>We make perfumes that are safe to use on your skin so that allergies and reactions are not words in your vocabulary.</p>
        </div>
        <div className='px-2'>
            <h1 className=' font-semibold '>Imported Oils</h1>
            <p className=''>We went out around the world for you, bringing you iconic and luxurious perfumes from France, Spain and Italy.</p>
        </div>
        <div className='px-2'>
            <h1 className='  font-semibold '>Long-lasting</h1>
            <p className=''>All good things come to an end but we try our best to stay put for 6-8 hours so that you can smell fresh all day long.</p>
        </div>
        <div className='px-2'>
            <h1 className=' font-semibold '>Cruelty-free</h1>
            <p className=''>Neither were any furry babies harmed nor will they ever be at BELLAVITA. We love animals and do not test our products on them before dispatching them to you, with love.</p>
        </div>
      </div>

    </div>
  )
}

export default About
