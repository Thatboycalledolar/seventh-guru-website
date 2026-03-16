import { ArrowDown } from "lucide-react"

export default function Solution() {
  return(
    <div className="w-full flex flex-col items-center px-8 py-16 md:px-16 max-w-300 gap-8">
      <div className="bg-(--text-color) max-w-300 w-full px-8 py-8 rounded-xl">
        <h2 className="text-center text-3xl font-normal leading-1.2 tracking-tighter text-white">We have a Structured Approach to ensure your brand’s Sustainable Growth.</h2>
      </div>
      
      <div className="flex flex-col items-start py-8 md:items-center gap-12 md:px-20">
        
        <div className=" gap-3 flex flex-col items-start md:items-center">
            <h3 className="font-bold tracking-tighter text-3xl md:text-4xl text-(--primary-color)">Brand Foundation</h3>
            <p className="font-light text-(--text-color) text-sm md:text-lg md:font-normal font-body leading-tight w-full md:text-center">For companies that need clarity, positioning, and credibility. We create stunning visuals that effectively depict the brand and it's core values to represent it both online and prints.</p>
        </div>

        <ArrowDown height={34} color="#0059AA" />


        <div className=" gap-3 flex flex-col items-start md:items-center">
            <h3 className="font-bold tracking-tighter text-3xl md:text-4xl text-(--primary-color)">Digital Infrastructure</h3>
            <p className="font-light text-(--text-color) text-sm md:text-lg md:font-normal font-body leading-tight w-full md:text-center">
              Your website is your 24/7 salesman and brand representative, Creating a great user experience for your website visitors is important to retain trust and choice of your brand.</p>
        </div>

        <ArrowDown height={34} color="#0059AA"/>

        <div className=" gap-3 flex flex-col items-start md:items-center">
            <h3 className="font-bold tracking-tighter text-3xl md:text-4xl text-(--primary-color)">Retainer Partnership</h3>
            <p className="font-light text-(--text-color) text-sm md:text-lg md:font-normal font-body leading-tight w-full md:text-center">After creating the brand infrastructure, it’s time to make use of these system to maintain the overall look and performance of your brand. We offer ongoing design leadership and execution for scaling teams.</p>
        </div>
     
        </div>
      </div>
  )
}