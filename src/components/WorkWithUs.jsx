import MainBtn from "./MainBtn"

export default function WorkWithUs() {
  return (
    <div className="flex flex-col items-center px-12 py-16 gap-12">
      <div className="text-center text-(--text-color) flex flex-col gap-4 items-center">
        <h2 className="font-bold text-4xl leading-1.2 tracking-tighter">How to work with Us</h2>
        <p className="text-sm font-body">Working with us is easy but we need to verify as we can’t work with every brand</p>
      </div>

      <div className="flex flex-col gap-8 items-center">
        <p className="font-body font-light bg-(--background-color) p-6 rounded-md text-sm w-full">Apply to work with us by filling out our Application form</p>

        <p className="font-body font-light bg-(--background-color) p-6 rounded-md text-sm w-full">Get on a Discovery call</p>

        <p className="font-body font-light bg-(--background-color) p-6 rounded-md text-sm w-full">We device the best strategy for your brand and execute</p>

        <p className="font-body font-light bg-(--background-color) p-6 rounded-md text-sm w-full">Long term Partnership</p>
      </div>
      <MainBtn text="Apply Now" link="/Apply" />
    </div>
  )
}