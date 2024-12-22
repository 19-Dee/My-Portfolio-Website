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
      { text: "Hi — I'm Dishen.", isPurple: false, isNewLine: false }, // First line
      { text: "a", isPurple: false, isNewLine: true }, // Second line, "a" in white
      { text: "Cloud Security Practitioner", isPurple: true, isNewLine: false }, // Same line as "a", in purple
    ];

    return (
      <motion.div ref={scope}>
        {wordsArray.map((wordObj, idx) => (
          <motion.span
            key={wordObj.text + idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.3 }}
            className={`${wordObj.isPurple ? "text-purple" : "text-white"} ${
              wordObj.isNewLine ? "block" : ""
            }`} // Use "block" to force a new line
            style={{ display: wordObj.isNewLine ? "block" : "inline" }} // Ensure inline for same-line items
          >
            {wordObj.text}
          </motion.span>
        ))}
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
