import Form from "../components/form";

export default function Apply() {
  return(
    <div className="flex flex-col items-center text-(--text-color) w-full px-8">
      <div className="mb-16 flex flex-col">
        <h1 className="font-bold text-4xl text-center ">Apply to work with Us</h1>
        <p className="text-center">Tell us about your project and we'll see if we're a good fit.</p>
      </div>
      
      <Form />
    </div>
  );
}