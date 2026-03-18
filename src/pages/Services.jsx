import Solution2 from "../components/Solution2";
import TheProcess from "../components/TheProcess";
import ProTip from "../components/ProTip";
import ServicesHeader from "../components/ServicesHeader";
import Reveal from "../components/Reveal";

export default function Services() {
  return(
    <div className="flex flex-col items-center w-full gap-8 ">
      
      <Reveal>
        <ServicesHeader />
      </Reveal>
      <Reveal>
        <Solution2 />
      </Reveal>
      <div className="bg-(--text-color) w-full flex flex-col items-center py-16">
        <div className=" max-w-300 px-4">
          <Reveal>
            <TheProcess />
          </Reveal>
          <Reveal>
            <ProTip /> 
          </Reveal>
          
          
           
        </div>
      </div>
      
      
    </div>
    
  );
}