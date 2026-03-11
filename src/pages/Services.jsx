import TheServices from "../components/TheServices";
import TheProcess from "../components/TheProcess";
import ProTip from "../components/ProTip";

export default function Services() {
  return(
    <div className="flex flex-col items-center w-full gap-8">
      <h1 className="text-4xl text-center font-bold">How we ensure <span className="text-(--primary-color)">your brand’s growth</span></h1>

      <TheServices />
      <TheProcess />
      <ProTip />
    </div>
    
  );
}