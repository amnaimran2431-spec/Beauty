import React from 'react';
import { Sparkles, UserCheck, ShieldCheck, Flower2, Layers } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/salonData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <UserCheck className="w-6 h-6 text-[#5A189A]" />;
      case 1:
        return <ShieldCheck className="w-6 h-6 text-[#5A189A]" />;
      case 2:
        return <Flower2 className="w-6 h-6 text-[#5A189A]" />;
      case 3:
        return <Layers className="w-6 h-6 text-[#5A189A]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#5A189A]" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#EDE1F7]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#5A189A]">
            <Sparkles className="w-3.5 h-3.5 text-[#5A189A]" />
            <span>The Rukash Difference</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#241D2B] tracking-tight">
            Why Women Choose Rukash
          </h2>

          <p className="text-base text-[#6F6574] leading-relaxed">
            Crafting memorable beauty experiences with thoughtful artistry, uncompromising hygiene, and warmth in Lahore.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.title}
              className="bg-[#FFFDFC] rounded-2xl p-7 border border-[#EDE1F7] hover:border-[#5A189A]/40 shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EDE1F7] flex items-center justify-center group-hover:bg-[#5A189A] group-hover:text-white transition-colors duration-300">
                  <span className="group-hover:text-white transition-colors">
                    {getIcon(idx)}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#241D2B] group-hover:text-[#5A189A] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6F6574] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EDE1F7]/60 text-[11px] font-semibold tracking-wider text-[#5A189A] uppercase flex items-center gap-1">
                <span>Refined standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
