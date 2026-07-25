// import React from "react";
// import { FaShareAlt, FaHeart } from "react-icons/fa";
// import { MdCompareArrows } from "react-icons/md";

// // ===== Images =====
// import Productimg1 from "../../assets/Productimg1.png";
// import Productimg2 from "../../assets/Productimg2.png";
// import Productimg3 from "../../assets/Productimg3.png";
// import Productimg4 from "../../assets/Productimg4.png";
// import Productimg1 from "../../assets/Productimg5.png";
// import Productimg2 from "../../assets/Productimg6.png";
// import Productimg3 from "../../assets/Productimg7.png";
// import Productimg4 from "../../assets/Productimg8.png";
// import Productimg1 from "../../assets/Productimg9.png";
// import Productimg2 from "../../assets/Productimg10.png";
// import Productimg3 from "../../assets/Productimg11.png";
// import Productimg4 from "../../assets/Productimg12.png";
// import Productimg1 from "../../assets/Productimg13.png";
// import Productimg2 from "../../assets/Productimg14.png";
// import Productimg3 from "../../assets/Productimg15.png";
// import Productimg4 from "../../assets/Productimg16.png";

// const products = [
//   {
//     id: 1,
//     image: Productimg1,
//     name: "Syltherine",
//     desc: "Stylish cafe chair",
//     price: "Rp 2.500.000",
//     oldPrice: "Rp 3.500.000",
//     badge: "-30%",
//     badgeColor: "bg-[#E97171]",
//   },
//   {
//     id: 2,
//     image: Productimg2,
//     name: "Leviosa",
//     desc: "Stylish cafe chair",
//     price: "Rp 2.500.000",
//     active: true,
//   },
//   {
//     id: 3,
//     image: Productimg3,
//     name: "Lolito",
//     desc: "Luxury big sofa",
//     price: "Rp 7.000.000",
//     oldPrice: "Rp 14.000.000",
//     badge: "-50%",
//     badgeColor: "bg-[#E97171]",
//   },
//   {
//     id: 4,
//     image: Productimg4,
//     name: "Respira",
//     desc: "Outdoor bar table",
//     price: "Rp 500.000",
//     badge: "New",
//     badgeColor: "bg-[#2EC1AC]",
//   },
//   {
//     id: 5,
//     image: Productimg1,
//     name: "Grifo",
//     desc: "Night lamp",
//     price: "Rp 1.500.000",
//   },
//   {
//     id: 6,
//     image: Productimg2,
//     name: "Muggo",
//     desc: "Small mug",
//     price: "Rp 150.000",
//     badge: "New",
//     badgeColor: "bg-[#2EC1AC]",
//   },
//   {
//     id: 7,
//     image: Productimg3,
//     name: "Pingky",
//     desc: "Cute bed set",
//     price: "Rp 7.000.000",
//     oldPrice: "Rp 14.000.000",
//     badge: "-50%",
//     badgeColor: "bg-[#E97171]",
//   },
//   {
//     id: 8,
//     image: Productimg4,
//     name: "Potty",
//     desc: "Minimalist flower pot",
//     price: "Rp 500.000",
//     badge: "New",
//     badgeColor: "bg-[#2EC1AC]",
//   },
//   {
//     id: 9,
//     image: Productimg1,
//     name: "Syltherine",
//     desc: "Stylish cafe chair",
//     price: "Rp 2.500.000",
//     oldPrice: "Rp 3.500.000",
//     badge: "-30%",
//     badgeColor: "bg-[#E97171]",
//   },
//   {
//     id: 10,
//     image: Productimg2,
//     name: "Leviosa",
//     desc: "Stylish cafe chair",
//     price: "Rp 2.500.000",
//   },
//   {
//     id: 11,
//     image: Productimg3,
//     name: "Lolito",
//     desc: "Luxury big sofa",
//     price: "Rp 7.000.000",
//     oldPrice: "Rp 14.000.000",
//     badge: "-50%",
//     badgeColor: "bg-[#E97171]",
//   },
//   {
//     id: 12,
//     image: Productimg4,
//     name: "Respira",
//     desc: "Outdoor bar table",
//     price: "Rp 500.000",
//     badge: "New",
//     badgeColor: "bg-[#2EC1AC]",
//   },
//   {
//     id: 13,
//     image: Productimg1,
//     name: "Grifo",
//     desc: "Night lamp",
//     price: "Rp 1.500.000",
//   },
//   {
//     id: 14,
//     image: Productimg2,
//     name: "Muggo",
//     desc: "Small mug",
//     price: "Rp 150.000",
//     badge: "New",
//     badgeColor: "bg-[#2EC1AC]",
//   },
//   {
//     id: 15,
//     image: Productimg3,
//     name: "Pingky",
//     desc: "Cute bed set",
//     price: "Rp 7.000.000",
//     oldPrice: "Rp 14.000.000",
//     badge: "-50%",
//     badgeColor: "bg-[#E97171]",
//   },
//   {
//     id: 16,
//     image: Productimg4,
//     name: "Potty",
//     desc: "Minimalist flower pot",
//     price: "Rp 500.000",
//     badge: "New",
//     badgeColor: "bg-[#2EC1AC]",
//   },
// ];

// const ShopimgSec = () => {
//   return (
//     <section className="max-w-[1440px] mx-auto px-5 lg:px-12 py-14">

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

//         {products.map((item) => (
//                       <div
//             key={item.id}
//             className="group bg-[#F4F5F7] overflow-hidden relative"
//           >
//             {/* Image */}
//             <div className="relative overflow-hidden">

//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-[301px] object-cover transition duration-500 group-hover:scale-105"
//               />

//               {/* Badge */}
//               {item.badge && (
//                 <div
//                   className={`absolute top-5 right-5 w-12 h-12 rounded-full ${item.badgeColor} flex items-center justify-center text-white text-sm font-medium`}
//                 >
//                   {item.badge}
//                 </div>
//               )}

//               {/* Overlay */}
//               <div
//                 className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center transition-all duration-300
//                 ${
//                   item.active
//                     ? "opacity-100"
//                     : "opacity-0 group-hover:opacity-100"
//                 }`}
//               >

//                 <button className="bg-white text-[#B88E2F] font-semibold px-8 py-3 hover:bg-[#B88E2F] hover:text-white duration-300">
//                   Add to cart
//                 </button>

//                 <div className="flex gap-6 mt-6 text-white text-sm font-medium">

//                   <button className="hover:text-[#B88E2F] duration-300">
//                     Share
//                   </button>

//                   <button className="hover:text-[#B88E2F] duration-300">
//                     Compare
//                   </button>

//                   <button className="hover:text-[#B88E2F] duration-300">
//                     Like
//                   </button>

//                 </div>

//               </div>

//             </div>

//             {/* Content */}
//             <div className="p-4">

//               <h3 className="text-2xl font-semibold text-[#3A3A3A]">
//                 {item.name}
//               </h3>

//               <p className="text-[#898989] text-sm mt-2">
//                 {item.desc}
//               </p>

//               <div className="flex items-center gap-4 mt-3">

//                 <span className="text-xl font-semibold text-[#3A3A3A]">
//                   {item.price}
//                 </span>

//                 {item.oldPrice && (
//                   <span className="text-[#B0B0B0] line-through text-sm">
//                     {item.oldPrice}
//                   </span>
//                 )}

//               </div>

//             </div>

//           </div>
//         ))}
//       </div>
//             {/* Pagination */}
//       <div className="flex flex-wrap justify-center items-center gap-4 mt-16">

//         <button className="w-14 h-14 rounded-[10px] bg-[#B88E2F] text-white text-lg font-medium">
//           1
//         </button>

//         <button className="w-14 h-14 rounded-[10px] bg-[#F9F1E7] text-black text-lg font-medium hover:bg-[#B88E2F] hover:text-white duration-300">
//           2
//         </button>

//         <button className="w-14 h-14 rounded-[10px] bg-[#F9F1E7] text-black text-lg font-medium hover:bg-[#B88E2F] hover:text-white duration-300">
//           3
//         </button>

//         <button className="px-8 h-14 rounded-[10px] bg-[#F9F1E7] text-black text-lg font-medium hover:bg-[#B88E2F] hover:text-white duration-300">
//           Next
//         </button>

//       </div>

//     </section>
//   );
// };

// export default ShopimgSec;





import React from "react";

import Productimg1 from "../../assets/Productimg1.png";
import Productimg2 from "../../assets/Productimg2.png";
import Productimg3 from "../../assets/Productimg3.png";
import Productimg4 from "../../assets/Productimg4.png";

const products = [
  {
    image: Productimg1,
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    badge: "-30%",
    badgeColor: "bg-[#E97171]",
  },
  {
    image: Productimg2,
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    badge: "New",
    badgeColor: "bg-[#2EC1AC]",
    active: true,
  },
  {
    image: Productimg3,
    name: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: "-50%",
    badgeColor: "bg-[#E97171]",
  },
  {
    image: Productimg4,
    name: "Respira",
    desc: "Outdoor bar table",
    price: "Rp 500.000",
    badge: "New",
    badgeColor: "bg-[#2EC1AC]",
  },
];


const productList = [...products, ...products, ...products, ...products];

const ShopimgSec = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-5 lg:px-10 py-14">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {productList.map((item, index) => (

          <div
            key={index}
            className="group bg-[#F4F5F7] overflow-hidden"
          >

            <div className="relative overflow-hidden">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[301px] object-cover duration-500 group-hover:scale-105"
              />

              {item.badge && (
                <div
                  className={`absolute top-5 right-5 w-12 h-12 rounded-full ${item.badgeColor} text-white flex items-center justify-center text-sm`}
                >
                  {item.badge}
                </div>
              )}

             
                          
              <div
                className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center transition-all duration-300 ${
                  index === 1
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <button className="bg-white text-[#B88E2F] px-8 py-3 font-semibold hover:bg-[#B88E2F] hover:text-white duration-300">
                  Add to cart
                </button>

                <div className="flex gap-6 mt-6 text-white text-sm font-medium">

                  <button className="hover:text-[#B88E2F] duration-300">
                    Share
                  </button>

                  <button className="hover:text-[#B88E2F] duration-300">
                    Compare
                  </button>

                  <button className="hover:text-[#B88E2F] duration-300">
                    Like
                  </button>

                </div>

              </div>

            </div>

            
            <div className="p-4">

              <h3 className="text-2xl font-bold text-[#3A3A3A]">
                {item.name}
              </h3>

              <p className="text-[#898989] text-sm mt-2">
                {item.desc}
              </p>

              <div className="flex items-center gap-4 mt-3">

                <span className="text-xl font-semibold text-[#3A3A3A]">
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
           
      <div className="flex flex-wrap justify-center items-center gap-4 mt-14">

        <button className="w-14 h-14 rounded-[10px] bg-[#B88E2F] text-white font-semibold">
          1
        </button>

        <button className="w-14 h-14 rounded-[10px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white duration-300">
          2
        </button>

        <button className="w-14 h-14 rounded-[10px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white duration-300">
          3
        </button>

        <button className="px-8 h-14 rounded-[10px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white duration-300">
          Next
        </button>

      </div>

    </section>
  );
};

export default ShopimgSec;