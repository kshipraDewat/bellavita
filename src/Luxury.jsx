import React, { useContext } from 'react';
import bannerlux from './assets/bannerlux.jpg';
import tick from './assets/checklist.png';
import { ProductContext } from './context/ProductContext';
import { useNavigate } from 'react-router';

const Luxury = () => {
  const { products, addCart } = useContext(ProductContext);
  const navigate = useNavigate();

  // Filter products with id greater than 8
  const filteredProducts = products.filter(product => product.id > 8);

  return (
    <div className='flex flex-col items-center'>
      <div>
        <img src={bannerlux} alt='' className='w-full object-contain' />
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 py-10 px-5 gap-10 lg:gap-20'>
        {filteredProducts.map((product, index) => (
          <div key={product.id} className='lg:w-[20vw] lg:h-[60vh] flex flex-col gap-2'>
            <img src={product.image} alt='' className='lg:h-[38vh]' />
            <div>
              <p className='text-xs text-zinc-600'>{product.subtitle}</p>
              <h1 className='font-semibold'>{product.title}</h1>
              <div className='flex gap-2 items-center'>
                <span className='text-sm'>⭐{product.rating}</span> |
                <img src={tick} alt='' className='size-4' />
                <span className='text-sm'>({product.reviews} Reviews)</span>
              </div>
              <p className='font-semibold'>₹ {product.price}</p>
            </div>
            <div>
              <button
                className='bg-black text-white p-3 w-full mt-5'
                onClick={() => {
                  addCart(product);
                  navigate('/cart');
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Luxury;
