"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  words2,
  className,
}: {
  words: string;
  words2: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    console.log(wordsArray);
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    const wordsArray = ["Hi — I'm Dishen.", "a", "Cloud Security Practitioner"];
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          console.log(word); // Debugging
          return (
            <motion.span
              key={word + idx}
              className={`${
                word === "Cloud Security Practitioner" ? "text-purple" : ""
              } dark:text-white text-black`}
              style={
                word === "Cloud Security Practitioner"
                  ? { color: "#CBACF9" }
                  : {}
              }
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      {/* mt-4 to my-4 */}
      <div className="my-4">
        {/* remove  text-2xl from the original */}
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
