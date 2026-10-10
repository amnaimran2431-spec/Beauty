import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Bridal', href: '#bridal' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFDFC]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#EDE1F7]/60'
            : 'bg-[#FFFDFC] py-4 md:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="group flex flex-col focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A]"
            >
              <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] font-medium text-[#241D2B] group-hover:text-[#5A189A] transition-colors uppercase">
                Rukash
              </span>
              <span className="text-[10px] tracking-[0.3em] font-medium text-[#6F6574] uppercase -mt-0.5">
                Beauty Salon · Gulberg
              </span>
            </a>

            {/* Zone 2: Clean Typography Nav Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm font-medium text-[#241D2B]/85 hover:text-[#5A189A] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#5A189A] after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#5A189A]"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: Actions (Desktop) */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${SALON_INFO.phone}`}
                className="hidden xl:flex items-center gap-2 text-xs font-semibold text-[#5A189A] hover:text-[#6D20B8] transition-colors px-2 py-1.5 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#5A189A]"
                title="Call Rukash Beauty Salon"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="tabular-nums whitespace-nowrap">{SALON_INFO.phoneFormatted}</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#5A189A] hover:bg-[#48127D] shadow-xs hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A] focus-visible:ring-offset-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="sm:hidden px-3 py-1.5 rounded-full text-[11px] font-semibold text-white bg-[#5A189A] hover:bg-[#48127D] transition-colors whitespace-nowrap"
              >
                Book
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                className="p-2 rounded-lg text-[#241D2B] hover:text-[#5A189A] hover:bg-[#EDE1F7]/50 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-30 lg:hidden bg-[#241D2B]/50 backdrop-blur-xs transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-16 left-0 right-0 bg-[#FFFDFC] shadow-xl border-b border-[#EDE1F7] p-6 max-h-[calc(100vh-4rem)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-base font-medium text-[#241D2B] hover:text-[#5A189A] py-1 border-b border-neutral-100 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#5A189A]/30 text-xs font-semibold text-[#5A189A] hover:bg-[#EDE1F7]/40 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {SALON_INFO.phoneFormatted}</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-semibold text-white bg-[#5A189A] hover:bg-[#48127D] shadow-sm transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Appointment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
