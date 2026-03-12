import Solution2 from "../components/Solution2";
import TheProcess from "../components/TheProcess";
import ProTip from "../components/ProTip";
import ServicesHeader from "../components/ServicesHeader";

export default function Services() {
  return(
    <div className="flex flex-col items-center w-full gap-8">
      
      <ServicesHeader />
      <Solution2 />
      <div className="bg-(--text-color)">
        <TheProcess />
        <ProTip />
      </div>
      
    </div>
    
  );
}