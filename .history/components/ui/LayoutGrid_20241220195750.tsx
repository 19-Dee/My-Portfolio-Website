"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./MovingBorders";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    // change md:grid-cols-3 to md:grid-cols-4, gap-4 to gap-10
    <div className="w-full h-full p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {cards.map((card, i) => (
        <Button
          key={i}
          borderRadius="1.75rem"
          duration={10000}
          className={cn(card.className)}
        >
          <div className={cn(card.className, "relative")}>
            <motion.div
              onClick={() => handleClick(card)}
              className={cn(
                card.className,
                "relative overflow-hidden",
                selected?.id === card.id
                  ? "rounded-lg cursor-pointer absolute inset-0 h-auto w-full z-50 flex justify-center items-center flex-wrap flex-col"
                  : "rounded-lg h-auto w-full"
              )}
              layout
            >
              {selected?.id === card.id && <SelectedCard selected={selected} />}
              <BlurImage card={card} />
            </motion.div>
          </div>
        </Button>
      ))}
      {selected?.id && (
        <motion.div
          onClick={handleOutsideClick}
          className="absolute h-full w-full left-0 top-0 bg-black opacity-30 z-10 pointer-events-auto"
        />
      )}
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.thumbnail}
      //   change image scale 500 to 100
      height="100"
      width="100"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
