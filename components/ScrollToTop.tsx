"use client";

import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleVisibility);
    return () => window.removeEventListener("scroll", handleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollTop}
          className='fixed bottom-3 right-2 text-white bg-[#0a0d62] rounded-full p-2 shadow-lg hover:bg-[#0A3D62]/80 transition-colors duration-300'
        >
          <AiOutlineArrowUp size={24} color='#ffffff' />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
