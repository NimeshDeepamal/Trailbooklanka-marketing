"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

const cards = [
  {
    title: "Rock Fortress, Yapahuwa",
    text: "Explore nature like never before.",
    bg: "https://media-cdn.tripadvisor.com/media/photo-s/1c/ac/f8/95/yapahuwa-sri-lanka-ancient.jpg",
    isLocal: true,
  },
  {
    title: "Odyssey Train Experience, Ella",
    text: "Adventure in the wild.",
    bg: "https://travel-buddies.com/wp-content/uploads/2024/11/6_from-ella-first-class-reserved-train-ticket-to-kandy.jpg",
  },
  {
    title: "Esala Perahera, Kandy",
    text: "Discover new destinations.",
    bg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Perahara2.jpg/960px-Perahara2.jpg",
  },
  {
    title: "Hikkaduwa Beach",
    text: "A journey of a thousand miles.",
    bg: "https://images.wanderon.in/gallery/new/2025/05/02/1746180247499-hikkaduwa-beach.webp",
  },
  {
    title: "Card 5",
    text: "A journey of a thousand miles.",
    bg: "https://www.planetware.com/wpimages/2023/03/sri-lanka-best-places-to-visit-intro-paragraph-elephants.jpg",
  },
  {
    title: "Card 6",
    text: "A journey of a thousand miles.",
    bg: "https://cdn2.tropicalsky.co.uk/images/800x600/dondra-head-lighthouse-sri-lanka.jpg",
  },
];

export function DestinationCard() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const getVisibleCards = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 480) return 1;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  const scrollToCard = (index) => {
    const container = containerRef.current;
    if (container) {
      const visibleCards = getVisibleCards();
      const cardWidth = container.offsetWidth / visibleCards;
      container.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToCard(current);
  }, [current]);

  return (
    <div className="w-full overflow-hidden" >
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar"
      >
        {cards.map((card, index) => (
         <div
          key={index}
          className={cn(
            "relative flex-shrink-0 h-96 rounded-md shadow-xl overflow-hidden flex flex-col justify-end p-4",
            "w-full xs:w-[80%] sm:w-[60%] md:w-1/2 lg:w-1/3 xl:w-1/4"
          )}
        >
        {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${card.bg})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

            <div className="text relative z-50">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative">
                {card.title}
              </h1>
              <p className="font-normal text-base text-gray-50 relative my-2">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationCard;