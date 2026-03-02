import { ArrowDown } from "lucide-react"

export default function Problem() {
  return(
    <div>
      <div className="w-full bg-(--primary-color) mb-12">
        <div className="max-w-[600px] px-8 py-16 gap-8 flex flex-col items-center"> 
          <h3 className="text-[30px] text-center font-normal text-white leading-10">Anticipated <span className="font-bold">Growth Without Structure</span> Creates Friction and unalignment.</h3>
          <p className="text-center text-white font-body text-[16px] font-light bg-white/20 p-8 rounded-lg">As companies start to scale, brand clarity may weaken. Messaging becomes inconsistent, What worked at the early stage may begin to break under growth pressure.</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <h3>That’s where we come in</h3>
        <ArrowDown className="animate-bounce" height={34} color="#0059AA"/>
      </div>
    </div>
  );
}