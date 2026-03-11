import MainBtn from "./MainBtn";


export default function FeatureCaseStudy() {
  return(
    <div className="flex flex-col items-center px-6 py-16 gap-8">
      <div className="w-full h-auto justify-center text-white text-center gap-6 flex flex-col items-center bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat p-8 rounded-xl">
        <img src="/images/f-case-study.png" alt="" />
        <div>
          <h2 className="text-4xl font-bold leading-1.2 tracking-tighter">Featured Case Study</h2>
        <p className="text-sm opacity-50 font-body">See for yourself how and the kind of magic we make</p>
        </div>
      </div>


      <div>
        <div className="bg-(--text-color) w-full text-white p-8 flex flex-col items-center rounded-t-lg gap-2 text-center">
          <h3 className="text-3xl font-bold tracking-tighter">Olar by Olar</h3>
          <p className="font-light text-sm font-body">A Luxury leather fashion brand located in Lagos, Nigeria</p>
        </div>

        <div className="flex flex-col gap-8 items-center">
          <div className="bg-(--background-color) flex flex-col px-8 py-6 text-(--text-color) gap-3 rounded-lg"> 
            <div className="flex flex-col items-start px-4 py-6 gap-3">
              <div className="flex gap-4 font-bold items-center">
                <p className="text-6xl opacity-40">1</p>
                <h3 className="text-3xl tracking-tighter">Pain point</h3>
              </div>
              <p className="text-sm font-body">A new luxury leather fashion brand that needs brand positioning, clarity and a compelling yet luxurious African identity</p>
          </div>

          <div className="flex flex-col items-start px-4 py-6 gap-3">
            <div className="flex gap-4 font-bold items-center">
              <p className="text-6xl opacity-40">2</p>
              <h3 className="text-3xl tracking-tighter">System built</h3>
            </div>
            <p className="text-sm font-body">After getting on a discovery call, we built a system around minimalism and a strong combination of colors to show luxury. Clean and bold typeface with pattern to maintain African originality and a subtle blend of alternating background for flexibility and versatility.</p>
          </div>

          <div className="flex flex-col items-start px-4 py-6 gap-3">
            <div className="flex gap-4 font-bold items-center">
              <p className="text-6xl opacity-40">3</p>
              <h3 className="text-3xl tracking-tighter">Result</h3>
            </div>
            <p className="text-sm font-body">Now, it’s time to put the system in to guide the design process...</p>
            <div className="flex flex-col gap-10 mt-10 justify-center">
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