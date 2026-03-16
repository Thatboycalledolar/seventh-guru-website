import MainBtn from "./MainBtn"

export default function WorkWithUs() {
  return (
    <div className="flex flex-col items-center px-12 py-16 gap-12 mb-16 max-w-300">
      <div className="text-center text-(--text-color) flex flex-col gap-4 items-center">
        <h2 className="font-bold text-4xl md:text-5xl leading-1.2 tracking-tighter">How to work with Us</h2>
        <p className="text-sm md:text-lg font-body">Working with us is easy but we need to verify as we can’t work with every brand</p>
      </div>

      <div className="flex flex-col gap-8 items-center w-full">
        <p className="font-body font-light bg-(--background-color) p-6 rounded-md text-sm md:text-lg w-full">Apply to work with us by filling out our Application form</p>

        <p className="font-body font-light bg-(--background-color) p-6 rounded-md text-sm md:text-lg w-full">Get on a Discovery call</p>

        <p className="font-body font-light bg-(--background-color) p-6 rounded-md text-sm md:text-lg w-full">We device the best strategy for your brand and execute</p>

        <p className="font-body font-light bg-(--background-color) p-6 rounded-md text-sm md:text-lg w-full">Long term Partnership</p>
      </div>
      <MainBtn text="Apply Now" link="/Apply" />
    </div>
  )
}