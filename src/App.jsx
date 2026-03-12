import { BrowserRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Services from "./pages/Services"
import CaseStudy from "./pages/CaseStudy"
import About from "./pages/About"
import Apply from "./pages/Apply"
import Footer from "./components/Footer"


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        <div className="pt-24 min-h-screen w-full flex flex-col justify-start items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/CaseStudy" element={<CaseStudy />} />
            <Route path="/About" element={<About />} />
            <Route path="/Apply" element={<Apply />} />
          </Routes>
        </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App
