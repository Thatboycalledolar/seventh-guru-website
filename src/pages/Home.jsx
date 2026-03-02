import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Solution from "../components/Solution";

export default function Home() {
  return(
   <div className="flex flex-col items-center">
    <Hero />
    <Problem />
    <Solution />
   </div>
    
  );
}

