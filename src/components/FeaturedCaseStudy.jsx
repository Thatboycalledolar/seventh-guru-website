import MainBtn from "./MainBtn";
import FeaturedCaseHeader from "./FeaturedCaseHeader";


export default function FeatureCaseStudy() {
  return(
    <div className="flex flex-col items-center max-w-300 py-16 gap-8 px-6 md:px-16">
      <FeaturedCaseHeader text="Featured Case Study" />

      <div className="flex flex-col items-center ">
        <div className="bg-(--text-color) w-full text-white py-8 flex flex-col items-center rounded-t-lg gap-2 text-center">
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">Olar by Olar</h3>
          <p className="font-light text-sm md:text-lg font-body">A Luxury leather fashion brand located in Lagos, Nigeria</p>
        </div>

        <div className="flex flex-col gap-8 items-center">
          <div className="bg-(--background-color) flex flex-col px-8 md:px-16 py-6 text-(--text-color) gap-3 rounded-lg"> 
            <div className="flex flex-col items-start py-6 gap-3">
              <div className="flex gap-4 font-bold items-center">
                <p className="text-6xl opacity-40">1</p>
                <h3 className="text-3xl tracking-tighter">Pain point</h3>
              </div>
              <p className="text-sm md:text-md font-body">A new luxury leather fashion brand that needs brand positioning, clarity and a compelling yet luxurious African identity</p>
          </div>

          <div className="flex flex-col items-start py-6 gap-3">
            <div className="flex gap-4 font-bold items-center">
              <p className="text-6xl opacity-40">2</p>
              <h3 className="text-3xl tracking-tighter">System built</h3>
            </div>
            <p className="text-sm md:text-md font-body">After getting on a discovery call, we built a system around minimalism and a strong combination of colors to show luxury. Clean and bold typeface with pattern to maintain African originality and a subtle blend of alternating background for flexibility and versatility.</p>
          </div>

          <div className="flex flex-col items-start py-6 gap-3">
            <div className="flex gap-4 font-bold items-center">
              <p className="text-6xl opacity-40">3</p>
              <h3 className="text-3xl tracking-tighter">Result</h3>
            </div>
            <p className="text-sm md:text-md font-body">Now, it’s time to put the system in to guide the design process...</p>
            <div className="flex flex-col gap-10 mt-10 justify-center md:grid grid-cols-3 md:justify-center">
              <img src="/images/image-1.png" alt="branding image 1" className="h-auto w-[320px] rounded-xl object-cover"/>
              <img src="/images/image-2.png" alt="branding image 2" className="h-auto w-[320px] rounded-xl object-cover"/>
              <img src="/images/image-3.png" alt="branding image 3" className="h-auto w-[320px] rounded-xl object-cover"/>
              <img src="/images/image-4.png" alt="branding image 4" className="h-auto w-[320px] rounded-xl object-cover"/>
            </div>
          </div>
        </div>     
        <MainBtn text="View more case studies" link="/CaseStudies" />
      </div>
      </div>
      
    </div>
  )
}