import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function Form() {

  const [step, setStep] = useState(1);

  const [error, setError] =useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    service: "",
    budget: "",
    timeline: "",
    message: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function validateStep(){
    if (step === 1) {
      return formData.name && formData.email
    }

    if (step === 3) {
      return formData.service
    }

    if (step === 4) {
      return formData.budget
    }

    if (step === 5) {
      return formData.timeline
    }

    return true; 
  }

  function nextStep() {
    if (!validateStep()) {
      setError("Please complete required fields");
      return;
    }
    setError("");
    setStep(step + 1);
  }

  function prevStep() {
    setError("");
    setStep(step - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    alert("Application submitted!");
  }

  return (
    <div className="max-w-5xl w-full mx-auto px-6 py-12">

      {/* Progress indicator */}
      <div className="flex justify-between mb-10 text-sm">

        {[1,2,3,4,5,6].map((num) => (
          <div
            key={num}
            className={`flex-1 h-1 mx-1 rounded-full ${
              step >= num ? "bg-(--primary-color)" : "bg-gray-200"
            }`}
          />
        ))}

      </div>


      {error && (
        <p className="bg-red-500 py-2 px-4 rounded-md inline-flex text-white text-sm mb-6">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

        {/* STEP 1 */}
        {step === 1 && (
          <>

        {/* step 1 header */}
            <h1 className="text-3xl font-bold text-left mb-4 text-(--text-color)">
              Personal Information
            </h1>

          {/* name div */}
            <div className="flex flex-col gap-4 w-full">
              <p>Name <span className="text-red-500">*</span></p>
              <input
                  type="text"
                  name="name"
                  placeholder="Enter your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-(--background-color) text-sm p-6 font-body italic rounded-md w-full "
                />
            </div>

            {/* email div */}
            <div className="flex flex-col gap-4 w-full mb-6">
              <p>Name <span className="text-red-500">*</span></p>
              <input
              type="email"
              name="email"
              placeholder="Enter your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-(--background-color) text-sm p-6 font-body italic rounded-md w-full  "
            />
            </div>
            

            <div className="flex">
              <button
                type="button"
                onClick={nextStep}
                className="bg-(--primary-color) text-white py-3 px-6 flex gap-2 rounded-md"
              >
                Next
                <ArrowRight width={18} />
              </button>
            </div>
          </>
        )}




        {/* STEP 2 */}
        {step === 2 && (
          <>

          {/* step 2 header */}
            <h1 className="text-3xl font-bold text-left mb-4 text-(--text-color)">
              Brand Information
            </h1>

          <div className="flex flex-col gap-4 w-full">
            <p>Company Name</p>
             <input
              type="text"
              name="company"
              placeholder="Company / Brand Name"
              value={formData.company}
              onChange={handleChange}
              className="bg-(--background-color) text-sm p-6 font-body italic rounded-md w-full"
            />
          </div>


          <div className="flex flex-col gap-4 w-full mb-6">
            <p>Company Website (If Available)</p>
             <input
              type="text"
              name="website"
              placeholder="Website URL"
              value={formData.website}
              onChange={handleChange}
              className="bg-(--background-color) text-sm p-6 font-body italic rounded-md w-full"
            />
          </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="border py-3 px-6 rounded-md flex gap-2"
              >
                <ArrowLeft width={18} />
                Back
                
              </button>

              <button
                type="button"
                onClick={nextStep}
                className="bg-(--primary-color) text-white py-3 px-6  flex gap-2 rounded-md"
              >
                Next
                <ArrowRight width={18} />
              </button>
            </div>
          </>
        )}




        {/* STEP 3 */}
        {step === 3 && (
          <>

          {/* step 3 header */}
            <h1 className="text-3xl font-bold text-left mb-4 text-(--text-color)">
              Choose a Service
            </h1>

             <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                {
                  title:"Brand Identity",
                  img:"/icons/brand-identity.svg"
                },
                {
                  title:"Website Design",
                  img:"/icons/website.svg"
                },
                {
                  title:"Brand Identity + Website Design",
                  img:"/icons/duo.svg"
                },
                {
                  title:"Retainer Partnership",
                  img:"/icons/retainer.svg"
                }

              ].map((service) => (

                <button
                  key={service}
                  type="button"
                  onClick={() => {
                    setFormData({...formData, service: service.title})
                  }}
                  className={`bg-(--background-color) px-4 py-2 rounded-lg text-left transition ${formData.service === service.title ? "bg-(--primary-color) text-white" : "bg-(--background-color) hover:bg-(--primary-color) hover:text-white"}`}
                >
                  <div className="flex flex-col gap-4 p-4 group">
                    <img src={service.img} alt="" className="w-12 h-auto bg-(--primary-color) p-2 rounded-sm"/>
                    <p className="text-lg font-bold">{service.title}</p>
                  </div>
                  
                </button>
              ))}
             </div>
          

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="border py-3 px-6 rounded-md flex gap-2"
              >
                <ArrowLeft width={18} />
                Back
              </button>

              <button
                type="button"
                onClick={nextStep}
                className="bg-(--primary-color) text-white py-3 px-6 rounded-md flex gap-2"
              >
                Next
                <ArrowRight width={18} />
              </button>
            </div>
          </>
        )}




        {/* STEP 4 */}
        {step === 4 && (
          <>

          {/* step 3 header */}
            <h1 className="text-3xl font-bold text-left mb-4 text-(--text-color)">
              What's this service worth to you
            </h1>

             <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                {
                  title:"Brand Identity",
                  img:"/icons/brand-identity.svg"
                },
                {
                  title:"Website Design",
                  img:"/icons/website.svg"
                },
                {
                  title:"Brand Identity + Website Design",
                  img:"/icons/duo.svg"
                },
                {
                  title:"Retainer Partnership",
                  img:"/icons/retainer.svg"
                }

              ].map((service) => (

                <button
                  key={service}
                  type="button"
                  onClick={() => {
                    setFormData({...formData, service: service.title})
                  }}
                  className={`bg-(--background-color) px-4 py-2 rounded-lg text-left transition ${formData.service === service.title ? "bg-(--primary-color) text-white" : "bg-(--background-color) hover:bg-(--primary-color) hover:text-white"}`}
                >
                  <div className="flex flex-col gap-4 p-4 group">
                    <img src={service.img} alt="" className="w-12 h-auto bg-(--primary-color) p-2 rounded-sm"/>
                    <p className="text-lg font-bold">{service.title}</p>
                  </div>
                  
                </button>
              ))}
             </div>
          

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="border py-3 px-6 rounded-md flex gap-2"
              >
                <ArrowLeft width={18} />
                Back
              </button>

              <button
                type="button"
                onClick={nextStep}
                className="bg-(--primary-color) text-white py-3 px-6 rounded-md flex gap-2"
              >
                Next
                <ArrowRight width={18} />
              </button>
            </div>
          </>
        )}



        {/* STEP 5 */}
        {step === 5 && (
          <>

          {/* step 3 header */}
            <h1 className="text-3xl font-bold text-left mb-4 text-(--text-color)">
              Choose a Service
            </h1>

             <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                {
                  title:"Brand Identity",
                  img:"/icons/brand-identity.svg"
                },
                {
                  title:"Website Design",
                  img:"/icons/website.svg"
                },
                {
                  title:"Brand Identity + Website Design",
                  img:"/icons/duo.svg"
                },
                {
                  title:"Retainer Partnership",
                  img:"/icons/retainer.svg"
                }

              ].map((service) => (

                <button
                  key={service}
                  type="button"
                  onClick={() => {
                    setFormData({...formData, service: service.title})
                  }}
                  className={`bg-(--background-color) px-4 py-2 rounded-lg text-left transition ${formData.service === service.title ? "bg-(--primary-color) text-white" : "bg-(--background-color) hover:bg-(--primary-color) hover:text-white"}`}
                >
                  <div className="flex flex-col gap-4 p-4 group">
                    <img src={service.img} alt="" className="w-12 h-auto bg-(--primary-color) p-2 rounded-sm"/>
                    <p className="text-lg font-bold">{service.title}</p>
                  </div>
                  
                </button>
              ))}
             </div>
          

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="border py-3 px-6 rounded-md flex gap-2"
              >
                <ArrowLeft width={18} />
                Back
              </button>

              <button
                type="button"
                onClick={nextStep}
                className="bg-(--primary-color) text-white py-3 px-6 rounded-md flex gap-2"
              >
                Next
                <ArrowRight width={18} />
              </button>
            </div>
          </>
        )}

        {/* STEP 6 */}
        {step === 6 && (
          <>
            <textarea
              name="message"
              placeholder="Tell us about your project"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="border p-4 rounded-md"
            />

            <div className="flex gap-4">
              <button
                type="button"
                onClick={prevStep}
                className="border py-3 px-6 rounded-md"
              >
                Back
              </button>

              <button
                type="submit"
                className="bg-[var(--primary-color)] text-white py-3 px-6 rounded-md"
              >
                Submit Application
              </button>
            </div>
          </>
        )}

      </form>

    </div>
  );
}