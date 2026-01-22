"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Kopi Kenangan Mantan", price: "24k" },
  { name: "Dua Shot Iced Shaken", price: "28k" },
  { name: "Salted Caramel Macchiato", price: "32k" },
  { name: "Avocatto", price: "28k" },
  { name: "Thai Tea", price: "22k" },
  { name: "Sultan Boba", price: "30k" },
];

export function MenuSection() {
  const containerRef = useRef(null);

  return (
    <div className="py-24 bg-[#1a1512] overflow-hidden relative z-10">
      <div className="container mx-auto px-6 mb-12">
         <h2 className="text-4xl font-bold uppercase text-white">Signature Menu</h2>
      </div>
      
      <motion.div ref={containerRef} className="pl-6 md:pl-24 cursor-grab active:cursor-grabbing">
        <motion.div 
          drag="x" 
          dragConstraints={containerRef}
          className="flex gap-8 w-max pr-12"
        >
          {menuItems.map((item, i) => (
            <div key={i} className="w-72 h-96 bg-[#2a2522] rounded-3xl p-8 flex flex-col justify-between shrink-0 group hover:bg-[#d6cfc7] transition-colors duration-500">
               <div>
                 <div className="text-2xl font-bold font-outfit text-white group-hover:text-[#1a1512] mb-2">{item.price}</div>
                 <h3 className="text-3xl font-bold uppercase text-white group-hover:text-[#1a1512] leading-tight">{item.name}</h3>
               </div>
               <button className="w-full py-4 rounded-full border border-white text-white uppercase tracking-widest group-hover:bg-[#1a1512] group-hover:border-[#1a1512] transition-colors">
                  Add
               </button>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
