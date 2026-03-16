import Solution2 from "../components/Solution2";
import TheProcess from "../components/TheProcess";
import ProTip from "../components/ProTip";
import ServicesHeader from "../components/ServicesHeader";

export default function Services() {
  return(
    <div className="flex flex-col items-center w-full gap-8 ">
      
      <ServicesHeader />
      <Solution2 />
      <div className="bg-(--text-color) w-full flex flex-col items-center py-16">
        <div className=" max-w-300 px-4">
        
          <TheProcess />
          <ProTip /> 
           
        </div>
      </div>
      
      
    </div>
    
  );
}