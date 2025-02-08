import React, { useContext } from "react";
import { ProductContext } from "./context/ProductContext";
import { Link, useNavigate } from "react-router";
import { X } from "lucide-react";

const Cart = () => {
  const {cart,invoice,removeCart,setCart,setInvoice} = useContext(ProductContext);
  const navigate = useNavigate();

  const placeOrder = ()=>{
    setCart([])
    setInvoice({count:0,subTotal:0});
    navigate('/success');
  }
  return (
    <div className=" w-full flex flex-col items-center justify-center p-5 gap-10 ">
      {cart.length > 0 ? (
        <div className=" flex flex-col gap-2">
          {cart.map((product) => {
            return (
              <div key={product.id} className=" flex justify-between gap-20 shadow-lg p-5  ">
                <img src={product.image} alt="" className="h-[12vh]" />
                <div>
                  <h1 className="font-semibold text-lg">{product.title}</h1>
                  <p className="text-xs text-zinc-400">{product.subtitle}</p>
                  <span className="font-semibold">₹ {product.price}</span>
                  <span className="text-sm"> x ({product.quantity})</span>
                </div>
                  <X className=' text-2xl cursor-pointer pt-2' onClick={()=>removeCart(product)}/>
              </div>
            );
          })}
          <div className='flex flex-col items-end gap-3 py-4'>
            <p className='font-bold'>Subtotal({invoice.count} {invoice.count > 1 ? 'items':'item'}): ₹{invoice.subTotal.toFixed(2)}</p>
            <button className='bg-black text-white p-3 w-full mt-5' onClick={placeOrder}>Place Order</button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 h-[100vh] items-center pt-60">
          <h1 className="text-3xl text-center">Cart is Empty</h1>
          
          <Link to={"/collection"} className="text-blue underline">
            <p className="text-base text-center ">Add Products</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
