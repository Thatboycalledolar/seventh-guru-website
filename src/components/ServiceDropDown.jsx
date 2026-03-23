import { useState } from "react"
import { useEffect, useRef } from "react"
import { ChevronRight } from "lucide-react";

export default function ServiceDropDown( service, drop1, drop2, drop3, drop4 ) {

  const [open, setOpen] = useState(false);

  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current &&!ref.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick) 
      return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  return(
    <div ref={ref} className="relative inline-block">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-black text-white px-4 py-2 rounded-md"
      >
        <span className={`${open? "rotate-90" : "rotate-0"}`}><ChevronRight /></span>{service}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">{drop1}</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">{drop2}</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">{drop3}</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">{drop4}</a>
        </div>
      )}

    </div>
  )
}