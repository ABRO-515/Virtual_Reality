import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

const closeMenu = ()=>{
  setIsOpen(false)
}




  return (
    <>
      {/* Navbar */}
      <nav id="navbar" className="w-full text-xl flex items-center fixed text-white lg:justify-between justify-between px-5 border-b border-gray-700 py-3 top-0 left-0 right-0 z-50 ">
        <div className="logo flex items-center gap-2">
          <img className="h-10" src={logo} alt="Logo" />
          <h1>VirtualR</h1>
        </div>
        <ul className="hidden lg:flex gap-5 text-base">

          <li className="cursor-pointer hover:text-gray-300" ><Link to="features" smooth={true} duration={500} >Features</Link></li>
          <li className="cursor-pointer hover:text-gray-300" ><Link to="workflow" smooth={true} duration={500} >Workflow</Link></li>
          <li className="cursor-pointer hover:text-gray-300" ><Link to="pricing" smooth={true} duration={500} >Pricing</Link></li>
          <li className="cursor-pointer hover:text-gray-300" ><Link to="testimonials" smooth={true} duration={500} >Testimonials</Link></li>
        </ul>
        <div className="btns hidden lg:flex gap-2 text-sm">
          <button className="bg-transparent border py-2 px-3 rounded-md">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-2 rounded-md">
            Create an account
          </button>
        </div>

        {/* Toggle Icon (Hamburger or Close) */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoClose className="text-3xl" />
          ) : (
            <RxHamburgerMenu className="text-3xl" />
          )}
        </div>
      </nav>

      {/* Modal (Mobile Menu) */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden bg-[#121212] text-white fixed top-14 left-0 w-full z-40 lg:hidden shadow-md"
      >
        <ul className="flex flex-col gap-5 p-5 text-lg"   >

          <li  className="hover:text-gray-300" ><Link to="features" smooth={true} duration={500}  onClick={()=>(setIsOpen(closeMenu))} >Features</Link></li>
          <li className="hover:text-gray-300" ><Link to="workflow" smooth={true} duration={500} onClick={()=>(setIsOpen(closeMenu))} >Workflow</Link></li>
          <li className="hover:text-gray-300" ><Link to="pricing" smooth={true} duration={500} onClick={()=>(setIsOpen(closeMenu))} >Pricing</Link></li>
          <li className="hover:text-gray-300" ><Link to="testimonials" smooth={true} duration={500} onClick={()=>(setIsOpen(closeMenu))} >Testimonials</Link></li>

        </ul>
        <div className="flex flex-col items-center gap-3 px-5 pt-2 pb-6">
          <button className="bg-transparent border py-2 px-3 rounded-md w-full">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-2 rounded-md w-full">
            Create an account
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
