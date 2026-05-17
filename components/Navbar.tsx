'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Droplet } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-pure-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center transform group-hover:scale-105 transition-transform shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
              <Droplet className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-primary">Mr Plumbit</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm font-medium text-secondary hover:text-primary transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
            <a href="https://wa.me/260762667731" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20bd5c] text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_4px_12px_rgba(37,211,102,0.2)]">
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-secondary hover:text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-pure-white border-t border-border-light p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-b-3xl"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-secondary hover:text-primary hover:bg-surface-light font-medium p-3 rounded-2xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/260762667731" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#25D366] hover:bg-[#20bd5c] text-white text-center py-3.5 rounded-full font-medium mt-4 transition-all shadow-[0_4px_12px_rgba(37,211,102,0.2)]"
              onClick={() => setIsOpen(false)}
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
