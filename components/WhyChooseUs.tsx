'use client';

import { motion } from 'motion/react';
import { BadgeCheck, ShieldCheck, Clock, MapPin } from 'lucide-react';

const features = [
  {
    title: 'Licensed Professionals',
    description: 'Our team consists of fully vetted, trained, and licensed plumbing experts.',
    icon: BadgeCheck,
  },
  {
    title: 'Premium Materials',
    description: 'We source only top-tier, durable materials meant to last for decades.',
    icon: ShieldCheck,
  },
  {
    title: 'Fast Response',
    description: 'When plumbing emergencies strike, our rapid response team is ready to deploy.',
    icon: Clock,
  },
  {
    title: 'Zambia-Based & Trusted',
    description: 'Locally owned, understanding the unique plumbing needs and infrastructure of Zambia.',
    icon: MapPin,
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-pure-white relative border-y border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose <br/><span className="text-primary font-light">Mr Plumbit?</span></h2>
              <p className="text-secondary text-lg leading-relaxed mb-8">
                We are redefining plumbing standards in Zambia. By combining technical excellence with outstanding customer service, we ensure every installation, repair, and upgrade exceeds your expectations.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <div className="w-14 h-14 rounded-full border border-border-light bg-surface-light flex items-center justify-center text-primary shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg">{feature.title}</h4>
                      <p className="text-sm text-secondary mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] aspect-square md:aspect-video lg:aspect-square"
            >
              <img 
                src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80" 
                alt="Plumber at work" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pure-white/20 to-transparent" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
