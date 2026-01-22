"use client";

import { motion } from "framer-motion";

export function MarqueeSection() {
  return (
    <div className="py-24 bg-[#1a1512] overflow-hidden relative z-10 border-y border-[#2a2522]">
      <div className="flex whitespace-nowrap">
        <MarqueeItem />
        <MarqueeItem />
      </div>
    </div>
  );
}

function MarqueeItem() {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="flex gap-8 px-4"
    >
      {[...Array(4)].map((_, i) => (
        <span key={i} className="text-8xl md:text-[12rem] font-bold uppercase text-[#2a2522] tracking-tighter">
          Kopi Kenangan
        </span>
      ))}
    </motion.div>
  );
}
