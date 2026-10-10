import React, { useState } from 'react';
import { Clock, ArrowRight, Sparkles, Check } from 'lucide-react';
import { SERVICES_LIST } from '../data/salonData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair Styling & Care' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'makeup', label: 'Party Makeup' },
    { id: 'skincare', label: 'Facial & Skincare' },
    { id: 'nails', label: 'Manicure & Pedicure' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FFF5F8]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#5A189A]">
            <Sparkles className="w-3.5 h-3.5 text-[#5A189A]" />
            <span>Our Services</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#241D2B] tracking-tight text-balance">
            Everything You Need to Feel Your Best
          </h2>

          <p className="text-base text-[#6F6574] leading-relaxed">
            From everyday beauty care to complete bridal transformations, enjoy personalized services in a refined salon environment on MM Alam Road.
          </p>

          {/* Category Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A] ${
                  activeCategory === cat.id
                    ? 'bg-[#5A189A] text-white shadow-xs'
                    : 'bg-white text-[#241D2B] border border-[#EDE1F7] hover:border-[#5A189A]/40 hover:bg-[#FFFDFC]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (4-col on desktop, 2-col tablet, 1-col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#EDE1F7] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F9DCE9]/30">
                <img
                  src={service.image}
                  alt={`${service.name} at Rukash Beauty Salon Lahore`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                {service.popular && (
                  <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/95 text-[#5A189A] shadow-xs backdrop-blur-xs">
                    Popular
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-semibold text-[#241D2B] group-hover:text-[#5A189A] transition-colors leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#6F6574] leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Metadata & Book Trigger */}
                <div className="pt-3 border-t border-[#EDE1F7]/70 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-[#6F6574]">
                    <Clock className="w-3.5 h-3.5 text-[#5A189A]" />
                    <span>{service.duration}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectService(service.name)}
                    className="inline-flex items-center gap-1.5 font-semibold text-[#5A189A] group-hover:text-[#6D20B8] transition-colors p-1 cursor-pointer focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#5A189A]"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
