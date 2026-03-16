 import MainBtn from "../components/MainBtn";
 
 export default function Hero() {
  return(
    <div className="flex flex-col items-center justify-center w-full h-screen px-8 pt-0 pb-34 bg-linear-to-b from-white to-stone-200">
      <div className="flex flex-col items-center gap-4 mb-12 max-w-300">
        <h1 className="text-5xl md:text-7xl leading-1.2 text-center text-(--text-color) px-14 font-black tracking-tighter max-w-200">From ideas. We create. <span className="text-(--primary-color)">You Scale!</span></h1>
        <p className="text-center font-normal text-(--text-color) text-sm md:text-lg font-body">We Build Digital Infrastructure for Brands ready to grow.</p>
      </div>
      <div>
        <MainBtn text="Apply to work with Us" link="/Apply" />
      </div>
    </div>
  )
 }
 