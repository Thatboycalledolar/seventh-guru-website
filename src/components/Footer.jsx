import MainBtn from "./MainBtn"
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return(
    <div className="bg-(--primary-color) flex flex-col items-center gap-4 py-8 px-8 w-full">
      <div className="bg-white/20 py-14 px-6 flex flex-col items-center rounded-lg gap-8 w-full">
        <div className="text-white text-center gap-2 flex flex-col items-center">
          <h3 className="text-3xl font-bold leading-1.2 tracking-tighter">The Growth you envision for your brand needs structure</h3>
          <p className="text-sm font-body">Work with us, fill up our short application and get on that call today</p>
        </div>
        <MainBtn text="Apply to work with us" link="/Apply" />
      </div>

      <div className="mt-12 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <img src="/logo-full-white.svg" alt="seventh guru logo" className="h-10 w-auto"/>
          <p className="text-white text-[12px] font-body font-light text-center">Copyright © 2024 Seventh Guru. All rights reserved.</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-white text-2xl font-bold tracking-tighter">Quick Links</h3>
          <div className="flex gap-4 items-center justify-center font-light">
            <Link to="/" className="text-white hover:underline underline-offset-4 text-sm">Home</Link>
            <Link to="/Services" className="text-white hover:underline underline-offset-4 text-sm">Services</Link>
            <Link to="/CaseStudy" className="text-white hover:underline underline-offset-4 text-sm">CaseStudy</Link>
            <Link to="/About" className="text-white hover:underline underline-offset-4 text-sm">About</Link>
            <Link to="/Apply" className="text-white hover:underline underline-offset-4 text-sm">Apply</Link>
          </div>
        </div>


        <div className="flex flex-col items-center gap-4">
          <h3 className="text-white text-2xl font-bold tracking-tighter">Socials</h3>
          <div className="flex gap-4 items-center justify-center font-light">
            <a href="https://www.instagram.com/seventh_guru/" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-white w-6 h-6 hover:text-(--secondary-color)" />
            </a>
            <a href="https://www.facebook.com/share/17iCCxi8Pw/" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-white w-6 h-6 hover:text-(--secondary-color)" />
            </a>
            <a href="https://www.linkedin.com/in/abdulbasit-kaffo-4937581a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-white w-6 h-6 hover:text-(--secondary-color)" />
            </a>
          </div>
        </div>
       
      </div>
      
    </div>
  )
}