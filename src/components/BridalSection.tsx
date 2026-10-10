import React, { useState } from 'react';
import { Crown, Sparkles, HeartHandshake, Calendar, ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/salonData';

interface BridalSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const BridalSection: React.FC<BridalSectionProps> = ({ onOpenBooking }) => {
  const [imgError, setImgError] = useState(false);

  const bridalFeatures = [
    {
      title: 'Bridal Makeup',
      desc: 'Elegant, camera-ready makeup tailored to your features with long-lasting radiant coverage for Barat and Walima.',
    },
    {
      title: 'Hair Styling & Dupatta Setting',
      desc: 'Refined bridal hairstyles, heirloom matha patti placement, and secure dupatta draping to complement your couture.',
    },
    {
      title: 'Pre-Bridal Care',
      desc: 'Holistic beauty preparation including skin brightening, gentle exfoliating rituals, and hydration before your big day.',
    },
  ];

  return (
    <section id="bridal" className="py-20 md:py-28 bg-[#FFF5F8] relative overflow-hidden">
      {/* Decorative floral aura & subtle vector circles */}
      <div
        aria-hidden="true"
        className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#F3B7CE]/25 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#EDE1F7]/40 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Bridal Feature Narrative (Left on Desktop) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#5A189A]">
              <Crown className="w-3.5 h-3.5 text-[#5A189A]" />
              <span>Pakistani Bridal Couture Beauty</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#241D2B] tracking-tight leading-tight">
              Bridal Beauty, Beautifully Personal
            </h2>

            <p className="text-base text-[#6F6574] leading-relaxed">
              From your first consultation to the final finishing touch, create a bridal look that reflects your personality, style, and special day. Whether you envision a classic royal Barat red or a modern luminous Walima glow, we ensure every detail is immaculate.
            </p>

            {/* 3 Feature Cards */}
            <div className="space-y-4 pt-2">
              {bridalFeatures.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 backdrop-blur-xs rounded-2xl p-5 border border-[#F3B7CE]/40 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#EDE1F7] text-[#5A189A] flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#241D2B] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#6F6574] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenBooking('Bridal Makeup & Styling')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-[#5A189A] hover:bg-[#48127D] shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Bridal Consultation</span>
              </button>

              <a
                href="#gallery"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5A189A] hover:text-[#6D20B8] transition-colors p-2"
              >
                <span>View Bridal Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Bridal Editorial Image (Right) */}
          <div className="lg:col-span-6 relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 bg-gradient-to-tr from-[#F9DCE9] to-[#EDE1F7] rounded-3xl -rotate-1 -z-10 opacity-70"
            />

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/80 bg-neutral-100 group">
              {!imgError ? (
                <img
                  src={IMAGES.bridal}
                  alt="Pakistani bridal makeup and styling by Rukash Beauty Salon Lahore"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#F9DCE9] p-8 text-[#5A189A]">
                  <Crown className="w-12 h-12 mb-3" />
                  <p className="font-serif text-2xl">Bespoke Bridal Elegance</p>
                </div>
              )}

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#F9DCE9]">
                  Rukash Bride
                </span>
                <p className="font-serif text-2xl sm:text-3xl font-medium mt-1">
                  Timeless Pakistani Weddings
                </p>
                <p className="text-xs text-white/80 mt-1">
                  Individual bridal dressing suites &amp; personalized trials available.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
