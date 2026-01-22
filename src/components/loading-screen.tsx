"use client";

import { motion } from "framer-motion";

export function LoadingScreen({ progress }: { progress: number }) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] bg-[#1a1512] flex items-center justify-center text-white"
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="flex flex-col items-center">
        <div className="text-6xl md:text-9xl font-bold font-outfit tracking-tighter">
          {Math.round(progress)}%
        </div>
        <div className="mt-4 text-sm uppercase tracking-widest text-[#d6cfc7]">
          Brewing Memories
        </div>
      </div>
    </motion.div>
  );
}
