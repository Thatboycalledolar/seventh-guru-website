 import MainBtn from "../components/MainBtn";
 
 export default function Hero() {
  return(
    <div className="flex flex-col items-center justify-center w-full h-screen px-8 pt-0 pb-34 bg-linear-to-b from-white to-stone-200">
      <div className="flex flex-col items-center gap-4 mb-12">
        <h1 className="text-5xl leading-1.2 text-center text-(--text-color) px-14 font-black tracking-tighter">From ideas. We create. <span className="text-(--primary-color)">You Dominate.</span></h1>
        <p className="text-center font-normal text-(--text-color) text-sm font-body">We Build Digital Infrastructure for Brands ready to scale.</p>
      </div>
      <div>
        <MainBtn text="Apply to work with Us" link="/Apply" />
      </div>
    </div>
  )
 }
 