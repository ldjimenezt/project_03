// components/FadeDown.js
"use client";
import { motion } from "framer-motion";

const fadeDownVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 }
};

const FadeDown = ({ children, delay = 0, duration = 0.5 }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeDownVariants}
      transition={{ duration: 2, delay: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeDown;
