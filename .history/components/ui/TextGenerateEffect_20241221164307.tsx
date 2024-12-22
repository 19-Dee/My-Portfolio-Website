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
    const wordsArray = [
      { text: "Hi — I'm Dishen.", isPurple: false }, // First line
      { text: "a", isPurple: false, isStandalone: true }, // "a" in white
      { text: "Cloud Security Practitioner", isPurple: true }, // Rest in purple
    ];

    return (
      <motion.div ref={scope}>
        {/* First line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white block"
        >
          {wordsArray[0].text}
        </motion.div>
        {/* Second line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="block"
        >
          <motion.span className="text-white inline-block mr-2">
            {wordsArray[1].text}
          </motion.span>
          <motion.span className="text-purple inline-block">
            {wordsArray[2].text}
          </motion.span>
        </motion.div>
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
