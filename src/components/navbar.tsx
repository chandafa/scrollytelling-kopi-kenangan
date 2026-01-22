"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { title: "Our Story", href: "#story" },
  { title: "Locations", href: "#locations" },
  { title: "Menu", href: "#menu" },
  { title: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-white">
        <div className="text-xl font-bold tracking-tighter uppercase font-outfit">
          Kopi Kenangan
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
        >
          Menu <Menu size={20} />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-[#1a1512] text-white flex flex-col justify-between p-6 md:p-12"
          >
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold tracking-tighter uppercase font-outfit text-[#d6cfc7]">
                Kopi Kenangan
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-sm uppercase tracking-widest hover:opacity-70 transition-opacity text-[#d6cfc7]"
              >
                Close <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-4 justify-center items-start h-full">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.1 * i,
                  }}
                  className="text-6xl md:text-8xl font-bold uppercase tracking-tighter hover:text-[#d6cfc7] transition-colors font-outfit overflow-hidden"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="inline-block hover:ml-4 transition-all duration-300">
                    {link.title}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="flex justify-between items-end text-[#d6cfc7] text-sm uppercase tracking-widest">
              <div className="flex flex-col gap-2">
                <a href="https://www.instagram.com/chann.ck" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                <a href="https://github.com/chandafa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
                <a href="https://id.linkedin.com/in/candra-kirana-dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              </div>
              <div>
                &copy; 2026 Kopi Kenangan
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
