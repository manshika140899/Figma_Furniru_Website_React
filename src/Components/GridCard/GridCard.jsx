import React from "react";
import Productimg1 from "../../assets/Productimg1.png";
import Productimg2 from "../../assets/Productimg2.png";
import Productimg3 from "../../assets/Productimg3.png";
import Productimg4 from "../../assets/Productimg4.png"
import Productimg5 from "../../assets/Productimg5.png";
import Productimg6 from "../../assets/Productimg6.png";
import Productimg7 from "../../assets/Productimg7.png";
import Productimg8 from "../../assets/Productimg8.png";

const products = [
  {
    id: 1,
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    image: Productimg1,
    badge: "-30%",
    color: "bg-red-400",
  },
  {
    id: 2,
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: Productimg2,
    badge: "New",
    color: "bg-green-500",
  },
  {
    id: 3,
    name: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    image: Productimg3,
    badge: "-50%",
    color: "bg-red-400",
  },
  {
    id: 4,
    name: "Respira",
    desc: "Outdoor bar table",
    price: "Rp 500.000",
    image: Productimg4,
    badge: "New",
    color: "bg-green-500",
  },
  {
    id: 5,
    name: "Grifo",
    desc: "Night lamp",
    price: "Rp 1.500.000",
    image: Productimg5,
  },
  {
    id: 6,
    name: "Muggo",
    desc: "Small mug",
    price: "Rp 150.000",
    image: Productimg6,
    badge: "New",
    color: "bg-green-500",
  },
  {
    id: 7,
    name: "Pingky",
    desc: "Cute bed set",
    price: "Rp 7.000.000",
    image: Productimg7,
    badge: "-50%",
    color: "bg-red-400",
  },
  {
    id: 8,
    name: "Potty",
    desc: "Minimalist flower pot",
    price: "Rp 500.000",
    image: Productimg8,
    badge: "New",
    color: "bg-green-500",
  },
];

const GridCard = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16">
      <h2 className="lg:text-4xl text-2xl font-bold text-center mb-12">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item, index) => (
          <div
            key={item.id} className="group bg-[#F4F5F7] rounded overflow-hidden shadow hover:shadow-xl duration-300" >
            <div className="relative overflow-hidden">
             <img src={item.image} alt={item.name} className="w-full h-72 object-cover group-hover:scale-110 duration-500"/>

              {item.badge && (
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-full ${item.color} text-white flex justify-center items-center text-sm font-semibold`}>
                  {item.badge}
                </div>
              )}

             
              <div className={`absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-center items-center gap-4 duration-300 ${
              index === 1
      ? "opacity-100"
      : "opacity-0 group-hover:opacity-100"
  }`}>
                <button className="bg-white text-[#B88E2F] px-8 py-2 font-semibold rounded"> Add to Cart </button>

                <div className="flex gap-5 text-white text-sm">
                  <span>Share</span>
                  <span>Compare</span>
                  <span>Like</span>
                </div>
              </div>

            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold">{item.name}</h3>

              <p className="text-gray-500 text-sm my-2"> {item.desc} </p>

              <div className="flex items-center gap-3">
                <span className="font-bold text-lg">
                  {item.price}
                </span>

                {item.oldPrice && (
                  <span className="line-through text-gray-400 text-sm">
                    {item.oldPrice}
                  </span>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="border-2 border-[#B88E2F] text-[#B88E2F] px-10 py-3 font-semibold hover:bg-[#B88E2F] hover:text-white duration-300">
          Show More
        </button>
      </div>
    </section>
  );
};

export default GridCard;