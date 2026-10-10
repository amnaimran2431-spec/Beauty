import React from 'react';
import { Calendar, Phone, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface CtaSectionProps {
  onOpenBooking: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-20 md:py-24 bg-[#5A189A] overflow-hidden text-white">
      {/* Decorative Radial Gradients */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-br from-[#F3B7CE]/20 to-[#6D20B8]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#6D20B8]/50 to-[#F9DCE9]/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"
      />

      {/* Subtle organic line circles */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] border border-white/10 rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] border border-white/10 rounded-full pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#F9DCE9]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Your Transformation Awaits</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-white">
          Ready to Feel Beautiful?
        </h2>

        <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          Reserve your appointment at Rukash Beauty Salon and let us create a beauty experience made for you on MM Alam Road, Gulberg III, Lahore.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-[#5A189A] bg-white hover:bg-[#FFFDFC] shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
          >
            <Calendar className="w-4 h-4 text-[#5A189A]" />
            <span>Book Your Appointment</span>
          </button>

          <a
            href={`tel:${SALON_INFO.phone}`}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-white border border-white/40 hover:border-white hover:bg-white/10 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
          >
            <Phone className="w-4 h-4" />
            <span className="tabular-nums">Call {SALON_INFO.phoneFormatted}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
