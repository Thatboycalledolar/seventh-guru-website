


export default function FeaturedCaseHeader( {text} ) {
  return(
    <div className="h-auto w-full justify-center text-white text-center gap-6 flex flex-col items-center bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat p-8 rounded-xl">
        <img src="/images/f-case-study.png" alt="" />
        <div>
          <h2 className="text-4xl font-bold leading-1.2 tracking-tighter">{text}</h2>
        <p className="text-sm opacity-50 font-body">See for yourself how and the kind of magic we make</p>
        </div>
      </div>
  )
}