import ProcessCard from "./ProcessCard";

export default function TheProcess() {
  return(
    <div className="flex flex-col items-center p-12 gap-12">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-2">The Process</h2>
        <p className="text-sm font-body opacity-60 text-center">Systems build brands, we also have structured processes we follow to create the magic your brand needs</p>
      </div>

      <div className="flex flex-col gap-8">
        <ProcessCard title="Onboarding" description="Taking the bold step to do what would bring the best out of your brand needs accolades of its own, we take time and honor welcoming you on board." Index="01." />

        <ProcessCard title="Discovery Call" description="After all the welcoming, we get on a call to understand the pain-points of your brand, your core values so we can create systems custom made for just your brand." Index="02." />

        <ProcessCard title="Infrastructure" description="Conclusion of the discovery call gives us the important information about your brand that helps us create the backbone and skeletal structure before design." Index="03." />

        <ProcessCard title="Design" description="Here is where our creatives spring into action using the just created system, the provided information and our professional flare to create effective yet aesthetically pleasing visuals." Index="04." />

        <ProcessCard title="Review & Refinement" description="There is always room for improvement, we may be the professionals but we do not discard your input, we review, rearrange, and optimize your visuals till complete satisfaction." Index="05." />

        <ProcessCard title="Hand-off" description="Now your visuals, and systems are ready for your brand to implement and grow. we appreciate and congratulate you for partnering with us while handing your files over." Index="06." />
      
      </div>
      
    </div>
  )
}