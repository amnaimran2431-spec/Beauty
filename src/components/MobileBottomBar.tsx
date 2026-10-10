import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Quick mobile booking and contact actions"
      className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-[#FFFDFC]/95 backdrop-blur-md border-t border-[#EDE1F7] px-3 py-2 shadow-lg"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call button */}
        <a
          href={`tel:${SALON_INFO.phone}`}
          className="flex items-center justify-center gap-1.5 py-2 px-1 rounded-xl bg-white border border-[#EDE1F7] text-[#241D2B] text-xs font-semibold active:bg-[#EDE1F7]/30 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#5A189A]" />
          <span>Call</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={SALON_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-1 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold active:bg-emerald-100 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        {/* Book Appointment button */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 py-2 px-1 rounded-xl bg-[#5A189A] text-white text-xs font-semibold shadow-xs active:bg-[#48127D] transition-colors cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book</span>
        </button>
      </div>
    </aside>
  );
};
