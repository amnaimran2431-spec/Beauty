import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, Heart, Award } from 'lucide-react';
import { IMAGES } from '../data/salonData';

interface AboutSectionProps {
  onExploreServices: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreServices }) => {
  const [imageError, setImageError] = useState(false);

  const pillars = [
    'Personalized attention tailored to you',
    'Professional, certified beauty care',
    'Modern styling & trending techniques',
    'Quiet, comfortable salon sanctuary',
    'Premium, dermatologically-safe products',
    'Comprehensive bridal & occasion suites',
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFFDFC] relative overflow-hidden">
      {/* Decorative backdrop glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#EDE1F7]/40 blur-3xl -translate-y-1/2 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Visual Editorial Composition with Overlapping Card */}
          <div className="lg:col-span-6 relative">
            {/* Background organic shape */}
            <div
              aria-hidden="true"
              className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#F9DCE9]/60 to-[#EDE1F7]/60 rounded-3xl -rotate-2 -z-10"
            />

            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#EDE1F7] aspect-[4/3] bg-neutral-100">
              {!imageError ? (
                <img
                  src={IMAGES.about}
                  alt="Modern luxury interior of Rukash Beauty Salon on MM Alam Road in Gulberg III, Lahore"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#EDE1F7] p-8 text-center text-[#5A189A]">
                  <Sparkles className="w-10 h-10 mb-2" />
                  <p className="font-serif text-xl font-medium">Rukash Beauty Salon Studio</p>
                </div>
              )}
            </div>

            {/* Overlapping Experience Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl p-5 shadow-xl border border-[#EDE1F7] max-w-[240px] z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#5A189A] text-white flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-[#241D2B] leading-none tabular-nums">10+ Years</p>
                  <p className="text-xs text-[#6F6574] mt-1 font-medium">Of Beauty Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#5A189A]">
              <Sparkles className="w-3.5 h-3.5 text-[#5A189A]" />
              <span>About Rukash</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#241D2B] tracking-tight leading-[1.15]">
              A Beauty Experience Designed Around You
            </h2>

            <div className="space-y-4 text-base text-[#6F6574] leading-relaxed">
              <p>
                At <strong className="text-[#241D2B] font-semibold">Rukash Beauty Salon</strong>, beauty is personal. We combine professional expertise, thoughtful service, and modern beauty techniques to create an experience that leaves you feeling confident, refreshed, and beautifully yourself.
              </p>
              <p>
                Located along the prestigious MM Alam Road in Gulberg III, our salon offers a tranquil escape where every detail—from hygiene protocols to bespoke consultation—is refined for your comfort. We believe in enhancing natural features with artful balance.
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#241D2B]">
                  <div className="w-4 h-4 rounded-full bg-[#EDE1F7] text-[#5A189A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{pillar}</span>
                </div>
              ))}
            </div>

            {/* Action */}
            <div className="pt-4">
              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#5A189A] hover:bg-[#48127D] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A]"
              >
                <span>Discover Our Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
