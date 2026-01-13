import { useEffect, useRef, useState } from "react";
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
    bg: "https://images.unsplash.com/photo-1682368593766-1f788256c116?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlra2FkdXdhfGVufDB8fDB8fHww",
  },
  {
    title: "Sigiriya Rock Fortress",
    text: "Climb the legendary Lion Rock.",
    bg: "https://images.unsplash.com/photo-1711797750174-c3750dd9d7c9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lnaXJpeWF8ZW58MHx8MHx8fDA%3D",
    isLocal: true,
  },
  {
    title: "Nine Arches Bridge, Ella",
    text: "A timeless engineering wonder.",
    bg: "https://images.unsplash.com/photo-1574611122955-5baa61496637?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmluZSUyMGFyY2glMjBicmlkZ2V8ZW58MHx8MHx8fDA%3D",
    isLocal: true,
  },
  {
    title: "Yala National Park",
    text: "Wildlife encounters in the heart of nature.",
    bg: "https://images.unsplash.com/photo-1636966542391-8dd8a91f1390?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHlhbGElMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D",
    isLocal: true,
  },
  {
    title: "Mirissa Whale Watching",
    text: "Witness giants of the ocean.",
    bg: "https://images.unsplash.com/photo-1734450919608-5bbddf6859cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1pcmlzc2ElMjB3aGFsZXxlbnwwfHwwfHx8MA%3D%3D",
    isLocal: true,
  },

  {
    title: "Galle Fort",
    text: "Colonial charm by the sea.",
    bg: "https://images.unsplash.com/photo-1734279135096-2854a06faba8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FsbGUlMjBmb3J0fGVufDB8fDB8fHww",
    isLocal: true,
  },
  {
    title: "Horton Plains & World’s End",
    text: "Where the earth meets the sky.",
    bg: "https://images.unsplash.com/photo-1692204806881-b30b3791f751?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvcnRvbiUyMHBsYWlucyUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D",
    isLocal: true,
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
    <div className="w-full overflow-hidden">
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
