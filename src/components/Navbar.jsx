import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`bg-(--primary-color) fixed w-[95%] z-30 rounded-full left-1/2 -translate-x-1/2 mt-1 max-w-300 p-0.5 shadow-lg bg-linear-to-br from-(--secondary-color) via-white/40 to-(--secondary-color) ${open ? "p-0 w-full" : "p-0.5 w-[95%]"}`}>
      <div className={`bg-(--primary-color) shadow-lg px-8 py-4 flex justify-between items-center ${open ? "rounded-none" : "rounded-full"}`}>
        
        {/* Logo */}
        <a href="/"><img src="/logo-full-white.svg" alt="Seventh guru logo" className="h-10
         w-auto" /></a>

        {/* Desktop Links */}
        <div className="flex justify-center items-center text-white gap-6">
          <div className="hidden md:flex text-md gap-6 font-medium">
          <Link to="/" className="hover:text-(--secondary-color) hover:underline hover:underline-offset-4 ">Home</Link>
          <Link to="/Services" className="hover:text-(--secondary-color) hover:underline hover:underline-offset-4 ">Services</Link>
          <Link to="/CaseStudy" className="hover:text-(--secondary-color) hover:underline hover:underline-offset-4 ">CaseStudy</Link>
          <Link to="/About" className="hover:text-(--secondary-color) hover:underline hover:underline-offset-4">About</Link>
        </div>
        <div className="hidden md:flex">
          <Link to="/Apply">
            <button className="bg-white flex items-center text-(--primary-color) text-[14px] font-semibold px-4 py-2 rounded-full gap-2 border-2 border-(--secondary-color) hover:bg-(--secondary-color) cursor-pointer"> Work with Us</button>
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
            className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-white transition duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div  className={`md:hidden flex items-end flex-col gap-4 px-8 pt-8 pb-24 bg-(--primary-color) shadow-2xl transition-all duration-300 overflow-hidden relative ${
          open ? "max-h-102 rounded-none" : "max-h-0 rounded-full"} `}> 

          <div className="flex flex-col items-end gap-4">
            <Link to="/" onClick={() => setOpen(false)} className="text-white font-bold text-lg">Home</Link>
            <Link to="/Services" onClick={() => setOpen(false)} className="text-white font-bold text-lg">Services</Link>
            <Link to="/CaseStudy" onClick={() => setOpen(false)} className="text-white  font-bold text-lg">CaseStudy</Link>
            <Link to="/About" onClick={() => setOpen(false)} className="text-white  font-bold text-lg mb-4">About</Link>
            <Link to="/Apply" onClick={() => setOpen(false)}><button className="bg-white flex text-(--primary-color) text-lg border-2 border-(--secondary-color) items-center font-bold px-4 py-2 rounded-md gap-2 cursor-pointer"> Work with Us </button></Link>
          </div>

           <h1 className="font-bold text-9xl bg-clip-text text-transparent bg-linear-to-r from-white to-(--primary-color)">menu</h1>
          
          
           
        </div>
      )} 
    </nav>
  );
}
