import React from 'react';
import { Sparkles, Users, Crown, MapPin } from 'lucide-react';
import { TRUST_INDICATORS } from '../data/salonData';

export const TrustStrip: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'trust-1':
        return <Sparkles className="w-5 h-5 text-[#5A189A]" />;
      case 'trust-2':
        return <Users className="w-5 h-5 text-[#5A189A]" />;
      case 'trust-3':
        return <Crown className="w-5 h-5 text-[#5A189A]" />;
      case 'trust-4':
        return <MapPin className="w-5 h-5 text-[#5A189A]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#5A189A]" />;
    }
  };

  return (
    <section className="bg-white border-y border-[#EDE1F7]/70 py-12 md:py-14 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {TRUST_INDICATORS.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#FFFDFC] transition-colors"
            >
              <div className="w-11 h-11 rounded-full bg-[#EDE1F7]/70 flex items-center justify-center shrink-0 border border-[#EDE1F7]">
                {getIcon(item.id)}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-[#241D2B] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6F6574] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
