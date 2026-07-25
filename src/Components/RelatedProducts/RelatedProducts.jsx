import React from "react";

import Productimg1 from "../../assets/Productimg1.png";
import Productimg2 from "../../assets/Productimg2.png";
import Productimg3 from "../../assets/Productimg3.png";
import Productimg4 from "../../assets/Productimg4.png";

const products = [
  {
    id: 1,
    image: Productimg1,
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    badge: "-30%",
    color: "bg-[#E97171]",
  },
  {
    id: 2,
    image: Productimg2,
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
  },
  {
    id: 3,
    image: Productimg3,
    name: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: "-50%",
    color: "bg-[#E97171]",
  },
  {
    id: 4,
    image: Productimg4,
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    badge: "New",
    color: "bg-[#2EC1AC]",
  },
];

const RelatedProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16">

      <h2 className="text-4xl font-bold text-center text-[#3A3A3A] mb-14">
        Related Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((item) => (
          <div
            key={item.id}
            className="bg-[#F4F5F7] overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl"
          >
            
            <div className="relative overflow-hidden">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              
              {item.badge && (
                <div
                  className={`absolute top-5 right-5 w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center text-sm font-medium`}
                >
                  {item.badge}
                </div>
              )}

            </div>

          
            <div className="p-4">

              <h3 className="text-2xl font-semibold text-[#3A3A3A]">
                {item.name}
              </h3>

              <p className="text-[#898989] mt-2">
                {item.desc}
              </p>

              <div className="flex items-center gap-3 mt-3 flex-wrap">

                <span className="text-xl font-bold text-[#3A3A3A]">
                  {item.price}
                </span>

                {item.oldPrice && (
                  <span className="text-[#B0B0B0] line-through text-sm">
                    {item.oldPrice}
                  </span>
                )}

              </div>

            </div>

          </div>
        ))}

      </div>
            
      <div className="flex justify-center mt-14">

        <button className="w-[245px] h-[48px] border border-[#B88E2F] text-[#B88E2F] font-semibold text-[16px] hover:bg-[#B88E2F] hover:text-white duration-300 transition-all">
          Show More
        </button>

      </div>

    </section>
  );
};

export default RelatedProducts;