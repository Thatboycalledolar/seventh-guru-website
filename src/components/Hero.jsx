 import MainBtn from "../components/MainBtn";
 
 export default function Hero() {
  return(
    <div className="flex flex-col items-center max-w-[600px] px-8 my-6">
      <div className="flex flex-col items-center gap-4 mb-12">
        <h1 className="text-[46px] leading-13 text-center text-(--text-color) font-bold">We Build Digital Infrastructure for <span className="text-(--primary-color)">Brands ready to scale</span></h1>
        <p className="text-center font-normal text-(--text-color) text-[14px] font-body">We work with growth inclined Companies to create professional brand positioning, brand identity, and digital experiences that drive trust, conversion, and their growth.</p>
      </div>
      <div>
        <MainBtn text="Apply to work with Us" link="/Apply" />
      </div>
    </div>
  )
 }
 