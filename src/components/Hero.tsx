import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { IMAGES } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FFF5F8] via-[#FCECF3]/60 to-[#FFFDFC]"
    >
      {/* Subtle organic decorative background elements inspired by reference */}
      <div
        aria-hidden="true"
        className="absolute top-12 left-1/4 w-96 h-96 rounded-full bg-[#F9DCE9]/50 blur-3xl pointer-events-none -translate-x-1/2"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-full bg-[#EDE1F7]/60 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-[#F3B7CE]/20 blur-2xl pointer-events-none"
      />

      {/* Delicate organic ring outlines */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-10 w-96 h-96 border border-[#F3B7CE]/30 rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-40 right-20 w-80 h-80 border border-[#EDE1F7]/60 rounded-full pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline, Value Proposition, Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 md:space-y-7 z-10">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#5A189A]">
              <Sparkles className="w-3.5 h-3.5 text-[#5A189A]" />
              <span>Rukash Beauty Salon · Gulberg III</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight text-[#241D2B] leading-[1.08] text-balance">
              Beauty That Makes You Feel{' '}
              <span className="italic font-normal text-[#5A189A] underline decoration-[#F3B7CE]/50 decoration-wavy decoration-1 underline-offset-8">
                Unforgettable
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#6F6574] leading-relaxed max-w-xl font-normal">
              Discover refined beauty, bridal elegance, and personalized salon experiences designed to bring out your most radiant, confident self in the heart of Lahore.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#5A189A] hover:bg-[#48127D] shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A] focus-visible:ring-offset-2"
              >
                <span>Book Your Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#5A189A] bg-white/80 hover:bg-white border border-[#5A189A]/30 hover:border-[#5A189A] shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A] focus-visible:ring-offset-2"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Quiet Trust Statement beneath CTAs */}
            <div className="pt-4 border-t border-[#EDE1F7]/80 flex items-center gap-3 text-xs text-[#6F6574]">
              <span className="font-medium text-[#241D2B]">Premium Beauty</span>
              <span aria-hidden="true" className="text-[#F3B7CE]">·</span>
              <span className="font-medium text-[#241D2B]">Personalized Care</span>
              <span aria-hidden="true" className="text-[#F3B7CE]">·</span>
              <span className="font-medium text-[#241D2B]">MM Alam Rd, Lahore</span>
            </div>
          </div>

          {/* Right Column: Large Editorial Beauty / Salon Image */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Background layered glow circles behind the portrait */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#F9DCE9] via-[#EDE1F7] to-[#FFF5F8] rounded-3xl transform rotate-2 -z-10 opacity-70"
            />
            
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-white/60 bg-[#FFF5F8] group">
              {!imageError ? (
                <img
                  src={IMAGES.hero}
                  alt="Editorial beauty portrait showcasing radiant hair and makeup by Rukash Beauty Salon"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F9DCE9] to-[#EDE1F7] p-8 text-center text-[#5A189A]">
                  <Sparkles className="w-12 h-12 mb-3 text-[#5A189A]" />
                  <p className="font-serif text-2xl font-medium">Rukash Beauty Salon</p>
                  <p className="text-xs text-[#6F6574] mt-2">Gulberg III, Lahore</p>
                </div>
              )}

              {/* Floating editorial badge card on bottom-left */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EDE1F7] flex items-center justify-center text-[#5A189A] shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#241D2B]">Signature Salon Sanctuary</p>
                    <p className="text-[11px] text-[#6F6574]">Bespoke bridal &amp; beauty care in Lahore</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
