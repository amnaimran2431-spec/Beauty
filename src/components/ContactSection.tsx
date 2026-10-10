import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2, Navigation, MessageSquare, AlertCircle } from 'lucide-react';
import { SALON_INFO, SERVICES_LIST } from '../data/salonData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Hair Styling & Blowouts',
    date: '',
    time: '12:00 PM',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      service: 'Hair Styling & Blowouts',
      date: '',
      time: '12:00 PM',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FFFDFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#5A189A]">
            <MapPin className="w-3.5 h-3.5 text-[#5A189A]" />
            <span>MM Alam Road, Gulberg III</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#241D2B] tracking-tight">
            Visit Rukash Beauty Salon
          </h2>

          <p className="text-base text-[#6F6574]">
            Schedule your beauty ritual or visit our salon on MM Alam Road in Gulberg, Lahore. We look forward to welcoming you.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Contact Details & Appointment Request Form */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Salon Info Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#FFF5F8] border border-[#EDE1F7]">
              
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#5A189A] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-[#241D2B]">Address</p>
                  <p className="text-[#6F6574] leading-relaxed">
                    98, B/1 MM Alam Rd, Block B1, Gulberg III, Lahore
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#5A189A] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-[#241D2B]">Phone</p>
                  <a
                    href={`tel:${SALON_INFO.phone}`}
                    className="text-[#5A189A] font-semibold hover:underline tabular-nums"
                  >
                    {SALON_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#5A189A] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-[#241D2B]">Hours</p>
                  <p className="text-[#6F6574]">11:00 AM – 8:00 PM</p>
                  <p className="text-[11px] text-[#6F6574]">Mon – Sun</p>
                </div>
              </div>

            </div>

            {/* Appointment Request Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EDE1F7] shadow-sm">
              <h3 className="font-serif text-2xl font-medium text-[#241D2B] mb-2">
                Request an Appointment
              </h3>
              <p className="text-xs sm:text-sm text-[#6F6574] mb-6">
                Fill in your preferred timing and our salon coordinator will confirm your slot within a few hours.
              </p>

              {submitted ? (
                <div className="bg-[#EDE1F7]/40 border border-[#5A189A]/30 rounded-2xl p-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#5A189A] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl font-medium text-[#241D2B]">
                    Appointment Request Received
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6F6574] max-w-md mx-auto">
                    Thank you, <strong className="text-[#241D2B]">{formData.name}</strong>! We have received your booking request for{' '}
                    <strong className="text-[#241D2B]">{formData.service}</strong> on{' '}
                    <strong className="text-[#241D2B]">{formData.date}</strong> at <strong className="text-[#241D2B]">{formData.time}</strong>.
                    Our desk will call <span className="tabular-nums font-semibold text-[#5A189A]">{formData.phone}</span> shortly.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/923011522518?text=Hello%20Rukash%20Salon,%20I%20just%20submitted%20an%20appointment%20request%20for%20${encodeURIComponent(
                        formData.name
                      )}%20for%20${encodeURIComponent(formData.service)}%20on%20${encodeURIComponent(
                        formData.date
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Confirm Faster via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-4 py-2.5 rounded-full text-xs font-semibold text-[#5A189A] hover:bg-white border border-[#5A189A]/30 transition-colors"
                    >
                      Book Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#241D2B] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Fatima Khan"
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
                      <label className="block text-xs font-semibold text-[#241D2B] mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0301 1234567"
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
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-semibold text-[#241D2B] mb-1.5">
                      Desired Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EDE1F7] text-xs sm:text-sm bg-[#FFFDFC] text-[#241D2B] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A]"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv.id} value={srv.name}>
                          {srv.name} ({srv.duration})
                        </option>
                      ))}
                      <option value="Custom Bridal Entourage">Custom Bridal Entourage</option>
                      <option value="Consultation Only">Consultation Only</option>
                    </select>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#241D2B] mb-1.5">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-[#FFFDFC] text-[#241D2B] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A] ${
                          errors.date ? 'border-rose-400 bg-rose-50/20' : 'border-[#EDE1F7]'
                        }`}
                      />
                      {errors.date && (
                        <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.date}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#241D2B] mb-1.5">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EDE1F7] text-xs sm:text-sm bg-[#FFFDFC] text-[#241D2B] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A]"
                      >
                        <option value="11:30 AM">11:30 AM - Morning</option>
                        <option value="01:00 PM">01:00 PM - Early Afternoon</option>
                        <option value="03:00 PM">03:00 PM - Afternoon</option>
                        <option value="05:00 PM">05:00 PM - Evening</option>
                        <option value="06:30 PM">06:30 PM - Late Evening</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#241D2B] mb-1.5">
                      Special Requests / Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us if you have sensitive skin, allergies, or wedding dates..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EDE1F7] text-xs sm:text-sm bg-[#FFFDFC] text-[#241D2B] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-semibold text-white bg-[#5A189A] hover:bg-[#48127D] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Appointment</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Location Display */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl overflow-hidden border border-[#EDE1F7] shadow-sm p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-xl font-medium text-[#241D2B]">
                    Gulberg III Location
                  </h4>
                  <p className="text-xs text-[#6F6574]">
                    Prime spot on MM Alam Road, Lahore
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#EDE1F7] flex items-center justify-center text-[#5A189A]">
                  <Navigation className="w-4 h-4" />
                </div>
              </div>

              {/* Styled Fallback / Embedded Visual Map Card */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#EDE1F7]/60 via-[#F9DCE9]/40 to-[#FFFDFC] border border-[#EDE1F7] flex flex-col justify-between p-6">
                
                {/* Visual street grid background lines */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#5A189A_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Map Pin Indicator */}
                <div className="relative z-10 flex items-center gap-3 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-md border border-white max-w-xs">
                  <div className="w-8 h-8 rounded-full bg-[#5A189A] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#241D2B]">Rukash Beauty Salon</p>
                    <p className="text-[11px] text-[#6F6574] truncate">98, B/1 MM Alam Rd, Block B1</p>
                  </div>
                </div>

                {/* Surrounding Landmark Markers */}
                <div className="relative z-10 space-y-2">
                  <div className="bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-white/80 text-[11px] text-[#6F6574] space-y-1">
                    <p className="font-semibold text-[#241D2B] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                      Valet &amp; Reserved Client Parking Available
                    </p>
                    <p>Near renowned Gulberg fashion boutiques &amp; MM Alam cafes.</p>
                  </div>
                </div>
              </div>

              {/* Directions Button Linked to Verified Google Maps URL */}
              <a
                href={SALON_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-semibold text-[#5A189A] bg-[#EDE1F7]/70 hover:bg-[#EDE1F7] border border-[#5A189A]/20 transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#5A189A]" />
                <span>Get Directions on Google Maps</span>
              </a>

              <div className="pt-2 text-center">
                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="text-xs text-[#6F6574] hover:text-[#5A189A] transition-colors"
                >
                  Need assistance finding us? Call <span className="font-semibold tabular-nums text-[#241D2B]">{SALON_INFO.phoneFormatted}</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
