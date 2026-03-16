import ContactCard from "./ContactCard"
import { Mail } from "lucide-react"
import { Phone } from "lucide-react"
import { Globe } from "lucide-react"
import { InstagramIcon } from "lucide-react"

export default function Contact() {
  return(
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-16">Reach Out to us for further Enquiries</h2>

      <div className="bg-(--background-color) p-8 flex flex-col gap-16 rounded-lg">
        <ContactCard icon={<Mail color="white"/>} text="Seventhguru@gmail.com" link />
        <ContactCard icon={<Phone color="white" />} text="+23412345678" />
        <ContactCard icon={<Globe color="white" />} text="www.seventhguru.com" />
        <ContactCard icon={<InstagramIcon color="white" />} text="Seventhguru@gmail.com" />
      </div>
    </div>
  )
}