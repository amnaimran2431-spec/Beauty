import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS_LIST } from '../data/salonData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_LIST.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_LIST.length) % TESTIMONIALS_LIST.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_LIST.length);
  };

  const current = TESTIMONIALS_LIST[currentIndex];

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-[#FFF5F8]/50 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative Aura */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-[#EDE1F7]/50 blur-3xl pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#5A189A]">
            <Sparkles className="w-3.5 h-3.5 text-[#5A189A]" />
            <span>Client Stories</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#241D2B] tracking-tight">
            Loved by Our Clients
          </h2>

          <p className="text-base text-[#6F6574]">
            Thoughtful reviews from clients who trust Rukash for their weddings, milestones, and routine self-care.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-lg border border-[#EDE1F7] transition-all">
          <Quote className="w-12 h-12 text-[#EDE1F7] mb-6 stroke-1" />

          {/* Stars */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
            ))}
          </div>

          {/* Testimonial Quote */}
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-[#241D2B] leading-snug mb-8 min-h-[110px]">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Client Details & Service Tag */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#EDE1F7]">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#EDE1F7] text-[#5A189A] font-serif text-lg font-bold flex items-center justify-center shrink-0">
                {current.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-[#241D2B]">
                  {current.name}
                </p>
                <p className="text-xs text-[#6F6574]">
                  {current.city} · <span className="text-[#5A189A] font-medium">{current.service}</span>
                </p>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="p-2.5 rounded-full border border-[#EDE1F7] text-[#241D2B] hover:text-[#5A189A] hover:bg-[#EDE1F7]/50 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="p-2.5 rounded-full border border-[#EDE1F7] text-[#241D2B] hover:text-[#5A189A] hover:bg-[#EDE1F7]/50 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5A189A]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS_LIST.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i ? 'w-8 bg-[#5A189A]' : 'w-2 bg-[#EDE1F7]'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
