import React from 'react';
import { MapPin, Phone, MessageSquare, Instagram, Facebook } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Bridal', href: '#bridal' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#1C1425] text-neutral-300 pt-16 pb-12 border-t border-[#372648]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#2F213E]">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-block">
              <span className="font-serif text-3xl tracking-[0.2em] font-medium text-white uppercase">
                Rukash
              </span>
              <span className="block text-[10px] tracking-[0.3em] font-medium text-[#F3B7CE] uppercase mt-0.5">
                Beauty Salon · Gulberg
              </span>
            </a>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Refined beauty, personalized care, and memorable salon experiences in the heart of Gulberg, Lahore. Designed for the modern woman.
            </p>

            {/* Social Channels (Ready for owner) */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Rukash on WhatsApp"
                className="w-9 h-9 rounded-full bg-[#2F213E] hover:bg-[#5A189A] text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Rukash Beauty Salon on Instagram"
                className="w-9 h-9 rounded-full bg-[#2F213E] hover:bg-[#5A189A] text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Rukash Beauty Salon on Facebook"
                className="w-9 h-9 rounded-full bg-[#2F213E] hover:bg-[#5A189A] text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-medium text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-medium text-white">
              Visit &amp; Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F3B7CE] shrink-0 mt-0.5" />
                <span>98, B/1 MM Alam Rd, Block B1, Block B 1 Gulberg III, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F3B7CE] shrink-0" />
                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="hover:text-white transition-colors tabular-nums text-white font-medium"
                >
                  {SALON_INFO.phoneFormatted}
                </a>
              </div>
              <div className="pt-2 text-neutral-400 text-xs">
                <p className="text-white font-medium mb-0.5">Opening Hours</p>
                <p>Monday – Sunday: 11:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© 2026 Rukash Beauty Salon. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <span>·</span>
            <a href="#contact" className="hover:text-white transition-colors">Appointment</a>
            <span>·</span>
            <a href={SALON_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Google Maps</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
