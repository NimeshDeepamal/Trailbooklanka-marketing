import React from "react";
import sigiriya from "../assets/sigiriya.jpg"; 

const Description1 = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-20">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl shadow-lg rounded-xl overflow-hidden bg-[#C6C2C24D] h-auto lg:h-[60vh]">
        {/* Left: Video */}
        <div className="w-full lg:w-1/2 bg-gray-200 flex items-center justify-center min-h-[250px]">
          <video
            className="w-full h-full object-cover"
            controls
            poster={sigiriya} // optional thumbnail
          >
            <source src="/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center lg:text-left">
            Explore Sri Lanka Like Never Before!
          </h2>
          <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base leading-relaxed">
            Ceylon Trails is designed to be your all-in-one travel companion, connecting you with the beauty, culture, and adventure of Sri Lanka through a personalized, seamless experience. Whether you're a global traveler or a local explorer, we help you plan your journey with smart tools, insider tips, and unforgettable experiences. From ancient temples and tropical beaches to hidden waterfalls and vibrant street food, we make discovering Sri Lanka easy, authentic, and meaningful. With curated itineraries, local guide connections, and multi-language support, your next adventure is just a tap away.
          </p>
          <button className="self-center lg:self-start bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description1;
