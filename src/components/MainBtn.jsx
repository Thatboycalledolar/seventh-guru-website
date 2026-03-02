import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function MainBtn( { text, link } ) {
  return(
      <Link to={link}>
        <button className="bg-(--text-color) flex items-center text-white text-[14px] font-semibold px-4 py-2 rounded-md gap-2 hover:bg-(--primary-color) cursor-pointer w-full">{text}<span className=" transition-transform duration-300 group-hover:translate-x-2"><ArrowRight size={16} color="blue" /></span> </button>
      </Link>
  )
} 