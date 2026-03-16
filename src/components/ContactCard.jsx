import { Link } from "react-router-dom"

export default function ContactCard({ icon, text, link }) {
  return(
    <div className="flex flex-col items-center gap-6">
      <div className="bg-(--primary-color) inline-flex p-2 rounded-md">{icon}</div>
      <Link to={link}>
        <p className="text-xl font-bold">{text}</p>
      </Link>
      
    </div>
  )
}