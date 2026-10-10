import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedExperience } from './components/FeaturedExperience';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BridalSection } from './components/BridalSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(undefined);
  };

  const handleExploreServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDFC] text-[#241D2B] antialiased pb-14 lg:pb-0">
      {/* Sticky Top Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />

        {/* Trust & Experience Strip */}
        <TrustStrip />

        {/* About Rukash Beauty Salon */}
        <AboutSection onExploreServices={handleExploreServices} />

        {/* Services Section with Filter Tabs */}
        <ServicesSection onSelectService={(service) => handleOpenBooking(service)} />

        {/* Featured Editorial Beauty Experience */}
        <FeaturedExperience onOpenBooking={() => handleOpenBooking('Signature Skincare Experience')} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Bridal Beauty & Couture Section */}
        <BridalSection onOpenBooking={(service) => handleOpenBooking(service || 'Bridal Makeup & Styling')} />

        {/* Curated Gallery & Lightbox */}
        <GallerySection />

        {/* Testimonials & Client Reviews */}
        <TestimonialsSection />

        {/* High-Conversion Deep Purple Call-to-Action */}
        <CtaSection onOpenBooking={() => handleOpenBooking()} />

        {/* Contact, Booking Form & Google Maps Direction */}
        <ContactSection />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
      />

      {/* Mobile Floating Action Bar */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
