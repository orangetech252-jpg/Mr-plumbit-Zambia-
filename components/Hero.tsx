'use client';

import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-pure-white/85 mix-blend-screen z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-pure-white via-pure-white/60 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" 
          alt="Modern Bathroom Plumbing" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center lg:text-left flex flex-col lg:items-start items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-light border border-border-light text-secondary text-sm font-medium mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            Available 24/7 in Zambia
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-primary">
            Quality Modern <br className="hidden lg:block"/>
            Plumbing in Zambia
          </h1>
          
          <p className="text-lg lg:text-xl text-secondary mb-10 max-w-2xl leading-relaxed">
            Bringing world-class plumbing solutions to your home. From emergency repairs to full bathroom installations, our licensed experts deliver premium service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="https://wa.me/260762667731" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-medium text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <Link 
              href="/gallery"
              className="px-8 py-4 bg-surface-light hover:bg-surface-subtle border border-border-light text-primary rounded-full font-medium text-lg flex items-center justify-center gap-2 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <Link href="/services" className="text-muted hover:text-primary transition-colors">
          <ChevronDown className="w-8 h-8" />
        </Link>
      </div>
    </section>
  );
}
