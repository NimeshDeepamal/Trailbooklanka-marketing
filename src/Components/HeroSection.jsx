import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import background from "../assets/background.mp4"; 

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden mb-0">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-black/50 text-center text-white px-4">
        <motion.h1
          className="text-9xl mb-4"
          style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <TypingText text="Sri Lanka" />
        </motion.h1>

        <p className="text-lg max-w-xl mb-6">
        Discover Sri Lanka Beyond the Guidebook.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition duration-200">
            Explore Now
          </button>
          <button className="bg-transparent border border-white px-6 py-2 rounded-md font-medium hover:bg-white hover:text-black transition duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

const TypingText = ({ text }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, 180);
      return () => clearTimeout(timeout);
    }
  }, [index, text.length]);

  return <span>{text.slice(0, index)}</span>;
};

export default HeroSection;
