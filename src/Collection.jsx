import React, { useContext } from 'react'
import Card from './components/Card'
import tick from "./assets/checklist.png"
import { ProductContext } from './context/ProductContext.jsx'
import { useNavigate } from 'react-router'

const Collection = () => {
  const {products, addCart} = useContext(ProductContext)
  const navigate = useNavigate()
  return (
    <div  className=" p-10  ">
       <div className='pb-5 flex flex-col gap-2'>
       <h1 className='text-3xl text-center'>Collection</h1>
       <p className='text-base text-center '>Find your luxuries here...</p>
       </div>
      
      <div className=' grid grid-cols-1 lg:grid-cols-4 gap-16 items-center justify-between p-5'>        
            {products && products.map((product) => (
            <div className=' lg:w-[20vw] lg:h-[60vh] flex flex-col gap-2 '>
              <img src={product.image} alt="" className=' h-[38vh]' />
              <div>
              <p className='text-xs text-zinc-600'>{ product.subtitle}</p>
              <h1 className='font-semibold'> {product.title} </h1>
              <div className='flex gap-2 items-center'>
              <span className='text-sm'> ⭐{product.rating} </span> | 
              <img src={tick} alt="" className='size-4' />
              <span className='text-sm'> ({product.reviews} Reviews) </span>
              </div>
              <p className='font-semibold'>₹ {product.price}</p>
              </div>
        
              <div>
                <button className='bg-black text-white p-3 w-full mt-5'  onClick={()=>{addCart(product); navigate('/cart') }}> ADD TO CART</button>
              </div>
            </div>
            ))}
            
      </div>
    </div>
  )
}

export default Collection
