

export default function ContactCard({ icon, text, href }) {
  return(
    // <div className="flex flex-col items-center gap-6 group cursor-pointer">
      <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-lg flex flex-col hover:shadow-lg items-center bg-white p-8 rounded-lg"
        >
        <div className="bg-(--primary-color) flex p-2 rounded-md mb-4">{icon}</div>
          {text}
        </a>
    
       
    
      
    // </div>
  )
}