import { ArrowDown } from "lucide-react"

export default function Solution() {
  return(
    <div className="w-full flex flex-col items-center py-16 gap-8">
      <div className="bg-(--text-color) w-full px-8 py-8">
        <h2 className="text-left text-3xl font-normal leading-1.2 tracking-tighter text-white">We have a Structured Approach to ensure your brand’s Sustainable Growth.</h2>
      </div>
      
      <div className="flex flex-col items-start px-8 py-8 gap-12">
        
        <div className=" gap-3 flex flex-col items-start">
            <h3 className="font-bold tracking-tighter text-3xl text-(--primary-color)">Brand Foundation</h3>
            <p className="font-light text-(--text-color) text-sm font-body leading-tight w-full">For companies that need clarity, positioning, and credibility. We create stunning visuals that effectively depict the brand and it's core values to represent it both online and prints.</p>
        </div>

        <ArrowDown height={34} color="#0059AA"/>


        <div className=" gap-3 flex flex-col items-start">
            <h3 className="font-bold tracking-tighter text-3xl text-(--primary-color)">Digital Infrastructure</h3>
            <p className="font-light text-(--text-color) text-sm font-body leading-tight w-full">
              Your website is your 24/7 salesman and brand representative, Creating a great user experience for your website visitors is important to retain trust and choice of your brand.</p>
        </div>

        <ArrowDown height={34} color="#0059AA"/>

        <div className=" gap-3 flex flex-col items-start">
            <h3 className="font-bold tracking-tighter text-3xl text-(--primary-color)">Retainer Partnership</h3>
            <p className="font-light text-(--text-color) text-sm font-body leading-tight w-full">After creating the brand infrastructure, it’s time to make use of these system to maintain the overall look and performance of your brand. We offer ongoing design leadership and execution for scaling teams.</p>
        </div>
     
        </div>
      </div>
  )
}