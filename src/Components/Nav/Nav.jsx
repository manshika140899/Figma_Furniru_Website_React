import { useState } from "react";
import navicon from "../../assets/navicon.png";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="flex items-center justify-between h-[65px]">
         
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src={navicon}
              alt="Furniro Logo"
              className="w-11 h-11 object-contain"
            />
            <h1 className="text-2xl lg:text-3xl  font-bold text-black tracking-wide">
              Furniro
            </h1>
          </div>

          
          <ul className="hidden md:flex items-center gap-12 font-medium text-[16px]">
            <Link to="/"><li className="cursor-pointer hover:text-[#B88E2F] transition">
              Home
            </li>
            </Link>
            <Link to={"/shop"}><li className="cursor-pointer hover:text-[#B88E2F] transition">
             Shop
            </li>
            </Link>
            <Link to={"/about"}><li className="cursor-pointer hover:text-[#B88E2F] transition">
              About
            </li>
            </Link>
            <Link to={"/contact"}><li className="cursor-pointer hover:text-[#B88E2F] transition">
              Contact
            </li>
            </Link>
          </ul>

         
          <div className="hidden md:flex items-center gap-7 text-2xl">
            <FiUser className="cursor-pointer hover:text-[#B88E2F]" />
            <FiSearch className="cursor-pointer hover:text-[#B88E2F]" />
            <FiHeart className="cursor-pointer hover:text-[#B88E2F]" />
            <FiShoppingCart className="cursor-pointer hover:text-[#B88E2F]" />
          </div>

          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[[500px]]" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col items-center py-6 gap-6 text-lg font-medium">
         <Link> <li className="cursor-pointer hover:text-[#B88E2F]">Home</li></Link>
           <Link> <li className="cursor-pointer hover:text-[#B88E2F]">Shop</li></Link>
           <Link> <li className="cursor-pointer hover:text-[#B88E2F]">About</li></Link>
           <Link> <li className="cursor-pointer hover:text-[#B88E2F]">Contact</li></Link>

          <div className="flex gap-8 text-2xl pt-3">
            <FiUser />
            <FiSearch />
            <FiHeart />
            <FiShoppingCart />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
