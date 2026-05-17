'use client';

import { motion } from 'motion/react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API or email service
    alert('Thank you for contacting Mr Plumbit Zambia. We will get back to you shortly.');
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-pure-white border-t border-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Get In Touch</h2>
              <p className="text-secondary text-lg mb-10 leading-relaxed">
                Whether it&apos;s an emergency callout or a planned renovation, our experts are ready to assist you.
              </p>

              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-surface-light border border-border-light rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-primary font-bold mb-1">Phone</h4>
                    <p className="text-xl text-secondary">+260 762667731</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-surface-light border border-border-light rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                    <MessageSquare className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-primary font-bold mb-1">WhatsApp (24/7 Fast Response)</h4>
                    <a 
                      href="https://wa.me/260762667731" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5c] text-white rounded-full font-medium transition-all shadow-[0_4px_12px_rgba(37,211,102,0.2)]"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-surface-light border border-border-light rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-primary font-bold mb-1">Email</h4>
                    <p className="text-lg text-secondary">contact@mrplumbit.co.zm</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-pure-white border border-border-light shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-8 md:p-12 rounded-[2.5rem]"
            >
              <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-surface-light border border-border-light rounded-2xl px-5 py-3.5 text-primary placeholder-muted focus:outline-none focus:bg-pure-white focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-surface-light border border-border-light rounded-2xl px-5 py-3.5 text-primary placeholder-muted focus:outline-none focus:bg-pure-white focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                      placeholder="+260..."
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-secondary mb-2">Service Needed</label>
                  <select 
                    id="service" 
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-surface-light border border-border-light rounded-2xl px-5 py-3.5 text-primary focus:outline-none focus:bg-pure-white focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                  >
                    <option value="" className="bg-pure-white text-muted">Select a service...</option>
                    <option value="emergency" className="bg-pure-white text-primary">Emergency Callout</option>
                    <option value="bathroom" className="bg-pure-white text-primary">Bathroom Installation</option>
                    <option value="repairs" className="bg-pure-white text-primary">General Repairs</option>
                    <option value="water-heater" className="bg-pure-white text-primary">Water Heater</option>
                    <option value="kitchen" className="bg-pure-white text-primary">Kitchen Plumbing</option>
                    <option value="drainage" className="bg-pure-white text-primary">Drainage & Sewage</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-surface-light border border-border-light rounded-2xl px-5 py-3.5 text-primary placeholder-muted focus:outline-none focus:bg-pure-white focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                    placeholder="Tell us about the plumbing issue..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-4 rounded-full transition-all shadow-[0_8px_30px_rgba(0,0,0,0.12)] mt-2"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
