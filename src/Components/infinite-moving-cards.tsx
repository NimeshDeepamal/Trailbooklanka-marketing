"use client";

import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

interface CardItem {
  name: string;
  title: string;
  quote: string;
}

interface InfiniteMovingCardsProps {
  items: CardItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const scrollerRef = React.useRef<HTMLUListElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(
        scrollerRef.current.children
      ) as HTMLElement[];

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      const dir = direction === "left" ? "forwards" : "reverse";
      containerRef.current.style.setProperty("--animation-direction", dir);
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration = "20s";
      if (speed === "normal") duration = "40s";
      if (speed === "slow") duration = "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={item.name + idx}
            className={cn(
              "relative shrink-0 rounded-2xl border border-b-0 px-6 py-6",
              "bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] dark:bg-[linear-gradient(180deg,#27272a,#18181b)]",
              "dark:border-zinc-700 border-zinc-200",
              // Responsive widths
              "w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[350px] xl:w-[450px]"
            )}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              />
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm font-normal text-neutral-500 dark:text-gray-400">
                    {item.name}
                  </span>
                  <span className="text-sm font-normal text-neutral-500 dark:text-gray-400">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
