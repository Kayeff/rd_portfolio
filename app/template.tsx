"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useState } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <div className="w-full absolute inset-0 z-[999]">
          <div className="w-full h-screen relative flex items-center justify-center flex-col gap-10 bg-black">
            <p className="text-background overflow-clip">
              {"R.Dobariya Portfolio".split("").map((word, index) => (
                <motion.span
                  className="inline-block text-5xl uppercase tracking-tighter"
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.05 * index,
                    ease: "easeInOut",
                  }}
                >
                  {word === " " ? "\u00A0" : word}
                </motion.span>
              ))}
            </p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
              onClick={() => setIsLoading(false)}
              className="px-6 py-2 bg-background text-foreground cursor-pointer font-medium tracking-tight hover:bg-transparent hover:border-background/40 border border-transparent duration-300 hover:text-background rounded-full"
            >
              Click to enter
            </motion.button>
          </div>
        </div>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </AnimatePresence>
  );
}
