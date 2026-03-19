 import MainBtn from "../components/MainBtn";
 import Reveal from "./Reveal";
 import ImageFade from "./ImageFade";
 
 export default function Hero() {
  return(
    <div className=" w-full bg-linear-to-b from-(--primary-color) to-[#001E3A] flex items-start justify-center">
      
      <div className="flex flex-col lg:flex-row items-start justify-start w-full pt-48 px-8 pb-24 gap-8 max-w-300">

        <div className="flex flex-col items-center lg:items-start  gap-4 mb-12 max-w-300 w-full">
          <div className="flex flex-col items-center lg:items-start justify-start gap-4 mb-8 w-full">
            <Reveal delay={0.2} y={70}>
              <h1 className="text-5xl md:text-7xl leading-12 md:leading-16 text-center lg:text-left text-white font-bold tracking-tight  md:max-w-200">From ideas, We create. <br /> <span className="font-black text-(--secondary-color)">You Scale!</span></h1>
            </Reveal>
            <Reveal delay={0.4} y={70}>
              <p className="text-center lg:text-left font-normal text-white/50 text-sm md:text-lg font-body w-full">We work with growth inclined Companies to create professional brand positioning, brand identity, and digital experiences that drive trust, conversion, and growth.</p>
            </Reveal> 
          </div>
          <div className="mb-10">
            <Reveal delay={0.6} y={70}>
              <MainBtn text="Apply to work with Us" link="/Apply" />
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.8} y={70}>
          <ImageFade />
        </Reveal>
      
        
      </div>

      
      
       
    </div>
   
  )
 }
 