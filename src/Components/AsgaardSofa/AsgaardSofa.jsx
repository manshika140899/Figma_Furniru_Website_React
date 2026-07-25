import React from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import Asgaardsofa1 from "../../assets/Asgaardsofa1.png";
import Asgaardsofa4 from "../../assets/Asgaardsofa4.png";
import Asgaardsofa5 from "../../assets/Asgaardsofa5.png";
import Asgaardsofa6 from "../../assets/Asgaardsofa6.png";
import Asgaardsofa7 from "../../assets/Asgaardsofa7.png";

const thumbs = [
  Asgaardsofa4,
  Asgaardsofa5,
  Asgaardsofa6,
  Asgaardsofa7,
];

const AsgaardSofa = () => {
  return (
    <>
      
      <section className="bg-[#F9F1E7]">
        <div className="max-w-7xl mx-auto px-5 h-[100px] flex items-center gap-4 text-sm">

          <span className="text-[#9F9F9F]">Home</span>

          <span className="text-xl">{">"}</span>

          <span className="text-[#9F9F9F]">Shop</span>

          <span className="text-xl">{">"}</span>

          <div className="w-[2px] h-8 bg-[#9F9F9F]"></div>

          <span className="font-medium text-black">
            Asgaard sofa
          </span>

        </div>
      </section>

     
      <section className="max-w-7xl mx-auto px-5 py-12">

        <div className="flex flex-col lg:flex-row gap-10">

          <div className="flex flex-col-reverse lg:flex-row gap-6 w-full lg:w-1/2">

            
            <div className="flex lg:flex-col gap-4">

              {thumbs.map((img, index) => (
                <div
                  key={index}
                  className="bg-[#F9F1E7] rounded-[8px] w-[76px] h-[80px] flex items-center justify-center cursor-pointer hover:scale-105 duration-300"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-[60px] object-contain"
                  />
                </div>
              ))}

            </div>

           
            <div className="flex-1 bg-[#F9F1E7] rounded-[6px] flex justify-center items-center p-8 h-[529px]">
              <img
                src={Asgaardsofa1}
                alt=""
                className="w-full  max-w-[480px] object-contain"
              />
            </div>

          </div>
                    
          <div className="w-full lg:w-1/2">

            <h1 className="text-4xl font-medium text-[#000]">
              Asgaard sofa
            </h1>

            <h2 className="text-[24px] text-[#9F9F9F] font-medium mt-2">
              Rs. 250,000.00
            </h2>

            
            <div className="flex items-center gap-4 mt-4">

              <div className="flex text-[#FFC700] text-lg gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>

              <div className="w-[1px] h-7 bg-[#9F9F9F]"></div>

              <span className="text-[#9F9F9F] text-sm">
                5 Customer Review
              </span>

            </div>

            
            <p className="text-[#000] text-[13px] leading-6 mt-5 max-w-[430px]">
              Setting the bar as one of the loudest speakers in its class,
              the Kilburn is a compact, stout-hearted hero with a
              well-balanced audio which boasts a clear midrange and
              extended highs for a sound.
            </p>

            
            <div className="mt-8">

              <p className="text-[#9F9F9F] mb-3">
                Size
              </p>

              <div className="flex gap-4">

                <button className="w-8 h-8 rounded bg-[#B88E2F] text-white text-sm">
                  L
                </button>

                <button className="w-8 h-8 rounded bg-[#F9F1E7] text-black text-sm">
                  XL
                </button>

                <button className="w-8 h-8 rounded bg-[#F9F1E7] text-black text-sm">
                  XS
                </button>

              </div>

            </div>

           
            <div className="mt-8">

              <p className="text-[#9F9F9F] mb-3">
                Color
              </p>

              <div className="flex gap-5">

                <div className="w-8 h-8 rounded-full bg-[#816DFA] cursor-pointer"></div>

                <div className="w-8 h-8 rounded-full bg-black cursor-pointer"></div>

                <div className="w-8 h-8 rounded-full bg-[#B88E2F] cursor-pointer"></div>

              </div>

            </div>
                        
            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              
              <div className="border border-[#9F9F9F] rounded-[10px] w-[123px] h-[64px] flex items-center justify-around">

                <button className="text-xl">-</button>

                <span className="font-medium">1</span>

                <button className="text-xl">+</button>

              </div>

              
              <button className="border border-black rounded-[15px] h-[64px] px-12 text-xl hover:bg-black hover:text-white duration-300">
                Add To Cart
              </button>

             
              <button className="border border-black rounded-[15px] h-[64px] px-10 text-xl hover:bg-black hover:text-white duration-300">
                + Compare
              </button>

            </div>

           
            <div className="border-t border-[#D9D9D9] mt-14 pt-10">

              <div className="space-y-4 text-[#9F9F9F]">

                <div className="flex">
                  <span className="w-[100px]">SKU</span>
                  <span>: SS001</span>
                </div>

                <div className="flex">
                  <span className="w-[100px]">Category</span>
                  <span>: Sofas</span>
                </div>

                <div className="flex">
                  <span className="w-[100px]">Tags</span>
                  <span>: Sofa, Chair, Home, Shop</span>
                </div>

                <div className="flex items-center">
                  <span className="w-[100px]">Share</span>

                  <span className="mr-3">:</span>

                  <div className="flex gap-5 text-black text-xl">

                    <FaFacebook className="cursor-pointer hover:text-[#B88E2F] duration-300" />

                    <FaLinkedin className="cursor-pointer hover:text-[#B88E2F] duration-300" />

                    <FaTwitter className="cursor-pointer hover:text-[#B88E2F] duration-300" />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
};

export default AsgaardSofa;