'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const images = [
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1520699697851-3dc68aa3a474?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-soft-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Work Gallery</h2>
            <p className="text-secondary text-lg">A selection of our recent premium installations and complex repair jobs across Zambia.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] group ${
                index === 0 || index === 3 ? 'sm:col-span-2 lg:col-span-2 aspect-[2/1]' : 'aspect-square'
              }`}
            >
              <img
                src={src}
                alt={`Works thumbnail ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-pure-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <span className="text-primary font-medium bg-pure-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-8 py-3 rounded-full">View Project</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
