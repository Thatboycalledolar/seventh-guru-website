import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

export default function ImageFade() {
  const images = [
    "/olar/olar-cover.png",
    "/olar/olar-logo1.png",
    "/olar/olar-pres1.png",
    "/olar/olar-pres2.png",
    "/olar/olar-flyer1.png",
    
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
      <div className="relative w-full h-100 md:h-180 max-w-300 overflow-hidden rounded-2xl mt-24">
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="hero visual"
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        />
      </AnimatePresence>
    </div>
    
  );
}