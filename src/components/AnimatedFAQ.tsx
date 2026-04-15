"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface AnimatedFAQProps {
  items: FAQItem[];
  className?: string;
}

export default function AnimatedFAQ({ items, className = '' }: AnimatedFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={item.q}
          layout
          className="bg-[#1b1b1b] border border-white/10 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
            layout: { type: 'spring', stiffness: 400, damping: 30 },
          }}
          viewport={{ once: true }}
        >
          <motion.button
            layout="position"
            onClick={() => toggleItem(index)}
            className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-white/5 transition-colors text-left"
          >
            <h3 className="text-xl font-bold pr-4 text-white">{item.q}</h3>
            <motion.div
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#A3D1FF]/30 flex-shrink-0"
              animate={{
                rotate: openIndex === index ? 45 : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30,
              }}
            >
              <Plus className="w-5 h-5 text-[#A3D1FF]" />
            </motion.div>
          </motion.button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: 'auto',
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  opacity: { duration: 0.2 },
                  height: { type: 'spring', stiffness: 400, damping: 30 },
                }}
              >
                <div className="px-6 pb-6">
                  <p className="text-lg text-gray-300">{item.a}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
