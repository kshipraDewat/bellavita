import React, { useContext } from 'react'
import tick from "../assets/checklist.png"



const Card = () => {
  
  return (
    <>

    {data.map((product) => (
    <div className=' w-[40vw] lg:w-[20vw] h-[50vh] lg:h-[60vh] flex flex-col gap-2 '>
      <img src={product.image} alt="" className=' h-[38vh]' />
      <div>
      <p className='text-xs text-zinc-600'>{ product.subtitle}</p>
      <h1 className='font-semibold'> {product.title} </h1>
      <div className='flex gap-2 items-center'>
      <span className='text-sm'> ⭐{product.rating} </span> | 
      <img src={tick} alt="" className='size-4' />
      <span className='text-sm'>({product.reviews} Reviews) </span>
      </div>
      <p className='font-semibold'>₹ {product.price}</p>
      </div>

      <div>
        <button className='bg-black text-white p-3 w-full mt-5'  onClick={()=>addCart(product)}> ADD TO CART</button>
      </div>
    </div>
    ))}
    </>
  )
}

export default Card
