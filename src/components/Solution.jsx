

export default function Solution() {
  return(
    <div className="w-full bg-(--background-color) flex flex-col items-center px-12 py-16 gap-8">
      <h2 className="text-center text-[32px] font-bold leading-10 font-(--text-color)">We have a Structured Approach to ensure your brand’s Sustainable Growth.</h2>
      <div>
        <div className="flex flex-col items-start">
          <h2 className="font-bold text-(--text-color) opacity-50 text-[62px]">1.</h2>
          <div className="bg-white shadow-lg rounded-lg py-8 px-8 gap-3 flex flex-col items-start">
            <h3 className="font-bold text-[22px] text-(--primary-color)">Brand Foundation</h3>
            <p className="font-light text-(--text-color) text-[14px] font-body leading-tight">For companies that need clarity, positioning, and credibility. We create stunning visuals that effectively depict the brand and it's core values to represent it both online and prints</p>
          </div>
        </div>


        <div className="flex flex-col items-end">
          <h2 className="font-bold text-(--text-color) opacity-50 text-[62px]">2.</h2>
          <div className="bg-white shadow-lg rounded-lg py-8 px-8 gap-3 flex flex-col items-start">
            <h3 className="font-bold text-[22px] text-(--primary-color)">Digital Infrastructure</h3>
            <p className="font-light text-(--text-color) text-[14px] font-body leading-tight">Your website is your 24/7 salesman and brand representative, Creating a great user experience for your website visitors is important to retain trust and choice of your brand. </p>
          </div>
        </div>


        <div className="flex flex-col items-start">
          <h2 className="font-bold text-(--text-color) opacity-50 text-[62px]">3.</h2>
          <div className="bg-white shadow-lg rounded-lg py-8 px-8 gap-3 flex flex-col items-start">
            <h3 className="font-bold text-[22px] text-(--primary-color)">Retainer Partnership</h3>
            <p className="font-light text-(--text-color) text-[14px] font-body leading-tight">After creating the brand infrastructure, it’s time to make use of these system to maintain the overall look and performance of your brand. We offer ongoing design leadership and execution for scaling teams.</p>
          </div>
        </div>
      </div>
    </div>
  )
}