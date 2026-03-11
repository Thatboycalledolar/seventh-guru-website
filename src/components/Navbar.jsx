import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="/"><img src="/logo-full-blue.svg" alt="Feed the Heart Logo" className="h-10
         w-auto" /></a>

        {/* Desktop Links */}
        <div className="flex justify-center items-center gap-6">
          <div className="hidden md:flex text-[14px] gap-6 font-medium">
          <Link to="/" className="hover:text-(--primary-color) hover:underline hover:underline-offset-4 ">Home</Link>
          <Link to="/Services" className="hover:text-(--primary-color) hover:underline hover:underline-offset-4 ">Services</Link>
          <Link to="/CaseStudy" className="hover:text-(--primary-color) hover:underline hover:underline-offset-4 ">CaseStudy</Link>
          <Link to="/About" className="hover:text-(--primary-color) hover:underline hover:underline-offset-4">About</Link>
        </div>
        <div className="hidden md:flex">
          <Link to="/Apply">
            <button className="bg-(--text-color) flex items-center text-white text-[14px] font-semibold px-4 py-2 rounded-md gap-2 hover:bg-(--primary-color) cursor-pointer"> Work with Us</button>
          </Link>
        </div>
        </div>
        
        

        {/* Hamburger */}
       <button
          onClick= {() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative cursor-pointer"
          aria-label="Toggle Menu"
        >
          <span
            className={`absolute h-0.5 w-6 bg-black transform transition duration-300 ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-black transition duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-black transform transition duration-300 ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div  className={`md:hidden flex flex-col items-center gap-6 pb-10 bg-white shadow-md transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 py-4" : "max-h-0"}`}>
          <Link to="/" onClick={() => setOpen(false)} className="text-[#333333] font-medium text-sm">Home</Link>
          <Link to="/Services" onClick={() => setOpen(false)} className="text-[#333333] font-medium text-sm">Services</Link>
          <Link to="/CaseStudy" onClick={() => setOpen(false)} className="text-[#333333] font-medium text-sm">CaseStudy</Link>
          <Link to="/About" onClick={() => setOpen(false)} className="text-[#333333] font-medium text-sm mb-4">About</Link>
          <Link to="/Apply" onClick={() => setOpen(false)}><button className="bg-(--text-color) flex text-white text-sm items-center font-semibold px-4 py-2 rounded-md gap-2 hover:bg-(--primary-color) cursor-pointer"> Work with Us </button></Link>
           
        </div>
      )} 
    </nav>
  );
}
