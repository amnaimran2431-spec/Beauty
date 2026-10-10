import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { SERVICES_LIST, SALON_INFO } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: preselectedService || 'Hair Styling & Blowouts',
    date: '',
    time: '01:00 PM',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 9) {
      errs.phone = 'Please provide a valid contact number (e.g., 0301 1234567).';
    }
    if (!formData.date) {
      errs.date = 'Please pick a preferred date.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={handleClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#EDE1F7] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close booking modal"
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A]"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-5">
            <div className="w-14 h-14 rounded-full bg-[#EDE1F7] text-[#5A189A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 id="booking-modal-title" className="font-serif text-3xl font-medium text-[#241D2B]">
              Appointment Requested
            </h3>

            <p className="text-sm text-[#6F6574] leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-[#241D2B]">{formData.name}</strong>! Your request for{' '}
              <strong className="text-[#241D2B]">{formData.service}</strong> on{' '}
              <strong className="text-[#241D2B]">{formData.date}</strong> at{' '}
              <strong className="text-[#241D2B]">{formData.time}</strong> has been logged.
            </p>

            <div className="pt-3 flex flex-col gap-3">
              <a
                href={`https://wa.me/923011522518?text=Hello%20Rukash%20Beauty%20Salon,%20I%20would%20like%20to%20confirm%20my%20appointment%20for%20${encodeURIComponent(
                  formData.name
                )}%20for%20${encodeURIComponent(formData.service)}%20on%20${encodeURIComponent(
                  formData.date
                )}%20at%20${encodeURIComponent(formData.time)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant Confirmation via WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleClose}
                className="w-full py-2.5 rounded-full text-xs font-semibold text-[#5A189A] hover:bg-[#EDE1F7]/40 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#5A189A]">
                Rukash Beauty Salon
              </span>
              <h3 id="booking-modal-title" className="font-serif text-2xl sm:text-3xl font-medium text-[#241D2B] mt-0.5">
                Book Your Appointment
              </h3>
              <p className="text-xs text-[#6F6574] mt-1">
                98, B/1 MM Alam Rd, Gulberg III, Lahore
              </p>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-[#241D2B] mb-1">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Mahnoor Tariq"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-[#FFFDFC] text-[#241D2B] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A] ${
                  errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-[#EDE1F7]'
                }`}
              />
              {errors.name && (
                <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-[#241D2B] mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="0301 1522518"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-[#FFFDFC] text-[#241D2B] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A] tabular-nums ${
                  errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-[#EDE1F7]'
                }`}
              />
              {errors.phone && (
                <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* Service */}
            <div>
              <label className="block text-xs font-semibold text-[#241D2B] mb-1">
                Select Service
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#EDE1F7] text-xs sm:text-sm bg-[#FFFDFC] text-[#241D2B] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A]"
              >
                {SERVICES_LIST.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name} ({s.duration})
                  </option>
                ))}
                <option value="Bridal Consultation">Bridal Consultation</option>
                <option value="Party Makeup & Hair Updo">Party Makeup &amp; Hair Updo</option>
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#241D2B] mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  value={formData.date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className={`w-full px-3 py-2 rounded-xl border text-xs bg-[#FFFDFC] text-[#241D2B] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A] ${
                    errors.date ? 'border-rose-400 bg-rose-50/20' : 'border-[#EDE1F7]'
                  }`}
                />
                {errors.date && (
                  <p className="text-[10px] text-rose-600 mt-1">{errors.date}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#241D2B] mb-1">
                  Time Slot
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#EDE1F7] text-xs bg-[#FFFDFC] text-[#241D2B] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A]"
                >
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="01:00 PM">01:00 PM</option>
                  <option value="02:30 PM">02:30 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="05:30 PM">05:30 PM</option>
                  <option value="07:00 PM">07:00 PM</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold text-[#241D2B] mb-1">
                Special Requests
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Allergies, hair length, occasion details..."
                className="w-full px-3.5 py-2 rounded-xl border border-[#EDE1F7] text-xs bg-[#FFFDFC] text-[#241D2B] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A]"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full text-xs font-semibold text-white bg-[#5A189A] hover:bg-[#48127D] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A]"
              >
                Confirm Appointment Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
