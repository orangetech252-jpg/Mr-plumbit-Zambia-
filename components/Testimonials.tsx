'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Mukuka Mulenga",
    location: "Lusaka",
    text: "Mr Plumbit Zambia completely transformed our office bathrooms. The team was professional, arrived on time, and left the place spotless. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Phiri",
    location: "Kabwe",
    text: "We had a terrible pipe burst in the middle of the night. I found their emergency WhatsApp number, and they were at my house within an hour. Real lifesavers.",
    rating: 5,
  },
  {
    name: "Chanda Bwalya",
    location: "Ndola",
    text: "Premium service! They installed a new geyser and upgraded our kitchen plumbing. The quality of materials used gives us total peace of mind.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-cool-white relative border-y border-border-light">
      <div className="absolute inset-0 bg-pure-white/40 backdrop-blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-secondary text-lg">Don&apos;t just take our word for it. Here is what leading homeowners and businesses across Zambia have to say.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-pure-white border border-border-light p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-secondary text-lg italic mb-8 leading-relaxed">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-surface-light border border-border-light rounded-full flex items-center justify-center text-primary font-bold text-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-sm text-muted">{t.location}, Zambia</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
