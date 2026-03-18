import { motion } from "framer-motion";

export default function Reveal({ children, 
  duration = 0.7, 
  delay = 0, 
  y = 70  }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
}