import MainBtn from "../components/MainBtn";
import { Link } from "react-router-dom";

export default function Home() {
  return(
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page for our organization.</p>
      <MainBtn text="Apply to work with Us" link="/Apply" />

    </div>
    
  );
}

