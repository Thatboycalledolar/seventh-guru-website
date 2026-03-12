import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import FeaturedCaseStudy from "../components/FeaturedCaseStudy";
import WorkWithUs from "../components/WorkWithUs";
import Client2 from "../components/Clients2";

export default function Home() {
  return(
   <div className="flex flex-col items-center w-full">
    <Hero />
    <Problem />
    <Solution />
    <FeaturedCaseStudy />
    <WorkWithUs />
    <Client2 />
   </div>
    
  );
}

