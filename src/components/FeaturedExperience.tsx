import React, { useState } from 'react';
import { Check, Sparkles, Calendar, Heart } from 'lucide-react';
import { IMAGES } from '../data/salonData';

interface FeaturedExperienceProps {
  onOpenBooking: () => void;
}

export const FeaturedExperience: React.FC<FeaturedExperienceProps> = ({ onOpenBooking }) => {
  const [imgError, setImgError] = useState(false);

  const pillars = [
    { title: 'Hair', desc: 'Bespoke cuts, glosses & high-volume blowouts' },
    { title: 'Makeup', desc: 'Airbrush techniques & radiant red-carpet glam' },
    { title: 'Skincare', desc: 'Custom hydro-facials & therapeutic massages' },
    { title: 'Styling', desc: 'Bridal dupatta setting & heirloom jewelry pinning' },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-[#F6EFFC] via-[#EDE1F7]/70 to-[#FAF3FB] relative overflow-hidden">
      {/* Decorative floral aura */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#F3B7CE]/30 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Large Image Column (Editorial Asymmetric) */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white aspect-[4/3] bg-white group">
              {!imgError ? (
                <img
                  src={IMAGES.skincare}
                  alt="Relaxing signature facial and skin rejuvenation experience at Rukash Beauty Salon"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#EDE1F7] p-8 text-[#5A189A]">
                  <Heart className="w-12 h-12 mb-2" />
                  <p className="font-serif text-2xl">Signature Facial Rituals</p>
                </div>
              )}

              {/* Editorial bottom scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

              <div className="absolute bottom-6 left-6 text-white max-w-sm">
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#F9DCE9]">
                  Signature Treatment
                </span>
                <p className="font-serif text-2xl font-medium mt-1">
                  Hydra-Restorative Skincare
                </p>
              </div>
            </div>
          </div>

          {/* Overlapping Content Card */}
          <div className="lg:col-span-5 lg:-ml-12 z-10">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-xl border border-[#EDE1F7] space-y-6">
              
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#5A189A]">
                <Sparkles className="w-3.5 h-3.5 text-[#5A189A]" />
                <span>Signature Experience</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#241D2B] leading-tight">
                Your Beauty, Your Moment
              </h2>

              <p className="text-sm text-[#6F6574] leading-relaxed">
                Take a moment to relax, refresh, and let our beauty specialists create a look that feels completely yours. We blend calming aromatherapy with clinical skincare precision.
              </p>

              {/* Core Pillars */}
              <div className="space-y-3 pt-2">
                {pillars.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EDE1F7] text-[#5A189A] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#241D2B] uppercase tracking-wide">
                        {item.title}
                      </span>
                      <p className="text-xs text-[#6F6574]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4 border-t border-[#EDE1F7]/80">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-semibold text-white bg-[#5A189A] hover:bg-[#48127D] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Beauty Experience</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
