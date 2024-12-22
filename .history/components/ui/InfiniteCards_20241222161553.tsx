"use client";

import React, { useEffect, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const duplicatedChildren = Array.from(scrollerRef.current.children).map(
        (child) => child.cloneNode(true)
      );
      duplicatedChildren.forEach((node) =>
        scrollerRef.current?.appendChild(node)
      );
    }
  }, []);

  const speedMap = {
    fast: "20s",
    normal: "40s",
    slow: "80s",
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-screen"
      style={{
        animationDirection: direction === "left" ? "forwards" : "reverse",
        animationDuration: speedMap[speed],
      }}
    >
      <ul
        ref={scrollerRef}
        className="flex gap-8 animate-scroll hover:pause-animation"
        style={{
          animationPlayState: pauseOnHover ? "paused" : "running",
        }}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex-shrink-0 p-6 rounded-lg bg-gray-800 text-white"
          >
            <p className="text-sm">{item.quote}</p>
            <div className="mt-4">
              <h4 className="font-bold text-lg">{item.name}</h4>
              <p className="text-gray-400 text-sm">{item.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
