import img from "../src/assets/offer.webp";
import bella from "../src/assets/bellamood.webp";

import pro from "../src/assets/5.webp";
import pro2 from "../src/assets/mag.webp";
import pro3 from "../src/assets/fantasy.webp"
import tick from "./assets/checklist.png"
import ban from "./assets/newban.webp"
import vid from "./assets/video.mp4";
import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <div className="flex flex-col justify-center ">
        <img src={ban} alt="" className=""/>

      <div className="  flex  flex-col lg:flex-row items-center justify-center gap-16 px-10 py-8">
        <img src={bella} alt="" className="lg:h-[85vh]"/>
        <Carousel className=" w-[70vw] lg:w-[25vw]  ">
          <div className="flex flex-col gap-4 items-center justify-center ">
            <img src={pro} alt="" className=" p-5 " />
            <h1>Alpha (Him) - 100ml</h1>
            <div className="flex  gap-5">
              <span className=""> ⭐5 | (9 Reviews)</span>
              <span> ₹ 1,299.00</span>
            </div>
            <div className=" flex gap-5">
              <button className=" bg-black p-3 text-white text-sm w-[25vw] lg:w-[12vw] ">
                ADD TO CART
              </button>
              <button className=" bg-black p-3 text-white text-sm  w-[25vw]  lg:w-[12vw] ">
                BUY NOW{" "}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <img src={pro2} alt="" className=" w-[20vw]" />
            <h1>Magnetic (Her) - 100ml</h1>
            <div className="flex gap-5">
              <span> ⭐5 | (5 Reviews)</span>
              <span> ₹ 1,299.00</span>
            </div>
            <div className=" flex gap-5">
              <button className=" bg-black p-3 text-white text-sm w-[25vw] lg:w-[12vw] ">
                ADD TO CART
              </button>
              <button className=" bg-black p-3 text-white text-sm w-[25vw] lg:w-[12vw] ">
                BUY NOW{" "}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <img src={pro3} alt="" className=" w-[20vw]" />
            <h1>Fantasy (Him) - 100ml</h1>
            <div className="flex gap-5">
              <span> ⭐5 | (9 Reviews)</span>
              <span> ₹ 1,299.00</span>
            </div>
            <div className=" flex gap-5">
              <button className=" bg-black p-3 text-white text-sm w-[25vw] lg:w-[12vw] ">
                ADD TO CART
              </button>
              <button className=" bg-black p-3 text-white text-sm w-[25vw] lg:w-[12vw] ">
                BUY NOW{" "}
              </button>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="   text-white absolute  flex flex-col gap-5 p-2  items-center ">
          <h1 className=" text-2xl lg:text-5xl font-bold ">DISCOVER THE ART OF PERFUMERY</h1>
          <p className="lg:text-2xl">
            Our formulations have proven efficacy, contain certified ingredients
            only and are 100% cruelty free
          </p>

          <button className="bg-white p-3 w-50 text-black">FRAGRANCE</button>
        </div>
        <video autoPlay muted loop src={vid} className="w-full   " />
      </div>
      <img src={img} alt="" />

    </div>
  );
};

export default Home;
