import { Link } from 'react-router';
import logo from '../assets/logo1.png'
import { IoIosSearch } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div>

    <nav className="   text-white bg-black flex gap-10 w-full relative shadow justify-between items-center text-center py-2 lg:px-30 px-10 ">
              <div className='flex items-center p-1 '>
                <IoIosSearch className='size-5 '/>
                <input type="text" name="" id="" className=' w-[10vw] outline-none border-b  text-white' placeholder=' Search Here...'/>
              </div>
              <div className=' font-bold '>
               <Link to={"/"}>
                 <img src={logo} alt="" className='h-6 me-30' />
               </Link>
              </div>
    
              <div className='flex gap-4 item-center justify-center '>
               <Link to={"/cart"}> <IoBagHandleOutline className='size-6'/></Link>
               <Link to={"/login"}><HiOutlineUser className='size-6'/></Link>
              </div>
    
              
    </nav>
    <nav className='flex items-center justify-center  p-2 text-black shadow'>
    <div className='flex gap-5 lg:gap-10 list-none uppercase text-sm'>
              <Link to={"/home"}>Home</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/collection"}>Collection</Link>
              <Link to={"/contact"}>Contact</Link>
              <Link to={"/luxury"}>Luxury</Link>
              </div>
    </nav>
    </div>
              
  )
}

export default Navbar
