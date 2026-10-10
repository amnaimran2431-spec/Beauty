import React, { useState, useEffect } from 'react';
import { Sparkles, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Works' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'hair', label: 'Hair Styling' },
    { id: 'makeup', label: 'Makeup & Glam' },
    { id: 'skincare', label: 'Skincare' },
    { id: 'salon', label: 'Salon Studio' },
  ];

  const filteredGallery = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredGallery.length]);

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % filteredGallery.length);
  };

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + filteredGallery.length) % filteredGallery.length);
  };

  const currentItem = selectedImageIndex !== null ? filteredGallery[selectedImageIndex] : null;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FFFDFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#5A189A]">
            <Sparkles className="w-3.5 h-3.5 text-[#5A189A]" />
            <span>Salon Portfolio</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#241D2B] tracking-tight">
            Curated Beauty Gallery
          </h2>

          <p className="text-base text-[#6F6574] leading-relaxed">
            A glimpse into the real transformations, radiant skin, and celebratory styling crafted daily at Rukash Beauty Salon.
          </p>

          {/* Filter Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => {
                  setActiveFilter(f.id);
                  setSelectedImageIndex(null);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#5A189A] text-white shadow-xs'
                    : 'bg-white text-[#241D2B] border border-[#EDE1F7] hover:border-[#5A189A]/50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-square bg-[#F9DCE9]/20 border border-[#EDE1F7] shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#F9DCE9] font-medium">
                  {item.category}
                </span>
                <p className="font-serif text-lg font-medium leading-snug">
                  {item.title}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[11px] text-white/80">
                  <Eye className="w-3.5 h-3.5" />
                  <span>View photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content Container */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentItem.image}
              alt={currentItem.title}
              referrerPolicy="no-referrer"
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
            />
            
            <div className="mt-4 text-center text-white space-y-1">
              <h3 className="font-serif text-2xl font-medium">
                {currentItem.title}
              </h3>
              <p className="text-xs text-neutral-300 max-w-md mx-auto">
                {currentItem.description}
              </p>
              <p className="text-[11px] text-neutral-400 tabular-nums pt-1">
                {selectedImageIndex + 1} of {filteredGallery.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
