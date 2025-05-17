"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-9 right-9 z-50 p-3 bg-button text-white rounded-full shadow-md hover:bg-purple-400 transition"
        aria-label="Scroll to top"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928931 6.65685C0.538407 7.04738 0.538407 7.68054 0.928931 8.07107C1.31946 8.46159 1.95262 8.46159 2.34314 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM8 34L9 34L9 1L8 1L7 1L7 34L8 34Z"
            fill="white"
          />
        </svg>
      </motion.button>
    )
  );
};

export default ToTopButton;
