import { Droplet, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-soft-white border-t border-border-light pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <Droplet className="text-white w-4 h-4" />
              </div>
              <span className="font-bold text-xl tracking-tight text-primary">Mr Plumbit</span>
            </Link>
            <p className="text-secondary mb-6 max-w-sm leading-relaxed">
              Bringing world-class plumbing solutions to your home. Premium installations and lightning-fast emergency service across Zambia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-pure-white border border-border-light flex items-center justify-center text-secondary hover:text-primary hover:bg-surface-light transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-pure-white border border-border-light flex items-center justify-center text-secondary hover:text-primary hover:bg-surface-light transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-pure-white border border-border-light flex items-center justify-center text-secondary hover:text-primary hover:bg-surface-light transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-primary font-bold mb-6 tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/services" className="text-secondary hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-secondary hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="text-secondary hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-secondary hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold mb-6 tracking-wide">Contact Info</h4>
            <ul className="flex flex-col gap-3 text-secondary">
              <li>+260 762667731</li>
              <li>contact@mrplumbit.co.zm</li>
              <li>Lusaka, Zambia</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-light text-center text-muted text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Mr Plumbit Zambia. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
