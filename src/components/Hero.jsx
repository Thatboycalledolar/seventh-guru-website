 import MainBtn from "../components/MainBtn";
 import Reveal from "./Reveal";
 import ImageFade from "./ImageFade";
 
 export default function Hero() {
  return(
    <div className=" w-full bg-(--primary-color) flex flex-col items-center min-h-screen justify-center">
      
      <div className="flex flex-col items-center justify-center w-full pt-56 md:pt-64  px-8 pb-34 ">
      
      <div className="flex flex-col items-center gap-4 mb-12 max-w-300">
        <Reveal delay={0.2} y={70}>
          <h1 className="text-5xl md:text-7xl leading-1.2 text-center text-white px-14 font-bold tracking-tighter   md:max-w-200">From ideas. We create. <br /> <span className="text-(--secondary-color)">You Scale!</span></h1>
        </Reveal>
        <Reveal delay={0.4} y={70}>
           <p className="text-center font-normal text-white/50 text-sm md:text-lg font-body">We Build Digital Infrastructure for Brands ready to grow.</p>
        </Reveal> 
      </div>
      <div className="mb-18 md:mb-32">
        <Reveal delay={0.6} y={70}>
           <MainBtn text="Apply to work with Us" link="/Apply" />
        </Reveal>
      </div>
        <Reveal delay={0.8} y={70}>
          <ImageFade />
        </Reveal>
      
    </div>
      
       
    </div>
   
  )
 }
 