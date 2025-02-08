import img from "../assets/banner.webp"
import img2 from "../assets/bannner.webp"
import img3 from "../assets/src/assets/Instruction_banner.webp"
import pro1 from "../assets/products/1.webp"
import pro2 from "../assets/products/2.webp"
import pro3 from "../assets/products/3.webp"
import pro4 from "../assets/products/5.webp"
import pro5 from "../assets/products/6.webp"
import img4 from "../assets/Luxe_Perfumes.webp"

import ocean from "../assets/ocean.avif"
import blu from "../assets/blu.avif"


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  return (
    <div>
      <img src={img} alt="" className=" mb-2" />

      <img src={img3} alt="" />
      <div className=" bg-zinc-100 p-10 ">
        <h1 className=" flex items-center justify-center text-5xl font-bold">
          BestSellers
        </h1>
        <div className=" h-full flex justify-between items-center overflow-hidden  ">
          <img src={pro1} alt="" className="h-96" />

          <img src={pro2} alt="" className="h-96" />

          <img src={pro3} alt="" className="h-96" />

          <img src={pro4} alt="" className="h-96" />
        </div>
      </div>
      <div>
        <img src={img2} alt="" />
      </div>
      <div className=" flex p-10 px-24 justify-between ">
        <img src={img4} alt="" />
                <Carousel className=" w-[30vw] ">
                  <div className="flex flex-col gap-4 items-center justify-center">
                    <img src={pro5} alt="" className=" w-[20vw]" />
                    <h1>HOT Mess Women Perfume - 100ml </h1>
                   
                      <span> 4.8 | (5.6 Reviews)</span>
                      <span> 1,099.00</span>
                
                    <div className=" flex gap-5">
                      <button className=" bg-black p-3 text-white text-sm w-[12vw] ">
                        ADD TO CART
                      </button>
                      <button className=" bg-black p-3 text-white text-sm w-[12vw] ">
                        BUY NOW{" "}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-center">
                    <img src={ocean} alt="" className=" w-[20vw]" />
                    <h1>HOT Mess Women Perfume - 100ml </h1>
                    
                      <span> 4.8 | (5.6 Reviews)</span>
                      <span> 1,099.00</span>
                   
                    <div className=" flex gap-5">
                      <button className=" bg-black p-3 text-white text-sm w-[12vw] ">
                        ADD TO CART
                      </button>
                      <button className=" bg-black p-3 text-white text-sm w-[12vw] ">
                        BUY NOW{" "}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-center">
                    <img src={blu} alt="" className=" w-[20vw]" />
                    <h1>HOT Mess Women Perfume - 100ml </h1>
                   
                      <span> 4.8 | (5.6 Reviews)</span>
                      <span> 1,099.00</span>
                  
                    <div className=" flex gap-5">
                      <button className=" bg-black p-3 text-white text-sm w-[12vw] ">
                        ADD TO CART
                      </button>
                      <button className=" bg-black p-3 text-white text-sm w-[12vw] ">
                        BUY NOW{" "}
                      </button>
                    </div>
                  </div>
                </Carousel>
              </div>
      </div>
  );
};

export default Hero;
