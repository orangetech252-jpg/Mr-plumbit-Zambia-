'use client';

import { motion } from 'motion/react';
import { Bath, Wrench, Droplet, ChefHat, AlertTriangle, Route } from 'lucide-react';

const services = [
  {
    title: 'Bathroom Installation',
    description: 'Complete modern bathroom builds from pipework to premium finishing.',
    icon: Bath,
  },
  {
    title: 'Pipe Repair & Maintenance',
    description: 'Leak detection and fast, permanent fixes for burst or corrupted pipes.',
    icon: Wrench,
  },
  {
    title: 'Water Heater Setup',
    description: 'Geyser installations and repairs for consistent, reliable hot water.',
    icon: Droplet,
  },
  {
    title: 'Kitchen Plumbing',
    description: 'Sink setups, dishwasher integrations, and under-counter plumbing.',
    icon: ChefHat,
  },
  {
    title: 'Emergency Callouts',
    description: '24/7 rapid response for critical plumbing disasters and floods.',
    icon: AlertTriangle,
  },
  {
    title: 'Drainage & Sewage',
    description: 'Unblocking lines, septic tank solutions, and advanced drainage routing.',
    icon: Route,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-soft-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Premium Services</h2>
          <p className="text-secondary text-lg">We bring expertise, modern tools, and high-quality materials to every job. No project is too big or too small for Mr Plumbit.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-pure-white border border-border-light p-8 rounded-3xl hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all group"
            >
              <div className="w-16 h-16 bg-surface-light border border-border-light rounded-full flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-primary transition-all shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-secondary leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
