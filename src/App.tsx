import { useState } from 'react';
import { Language, Vehicle } from './types';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { CustomCursor } from './components/common/CustomCursor';
import { LuxuryLoader } from './components/common/LuxuryLoader';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesGrid } from './components/sections/ServicesGrid';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { FleetShowcase } from './components/sections/FleetShowcase';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { CoverageMap } from './components/sections/CoverageMap';
// import { PricingSection } from './components/sections/PricingSection';
import { BookingSection } from './components/sections/BookingModalOrSection';
import { QuickBookModal } from './components/common/QuickBookModal';
import { Footer } from './components/layout/Footer';

export function App() {
  // Initialize Lenis Smooth Scroll
  useSmoothScroll();

  // Language State: 'en' or 'de'
  const [lang, setLang] = useState<Language>('en');

  // Quick Book Modal States
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('airport');
  const [selectedRoute, setSelectedRoute] = useState<string>('');

  const handleOpenBookingModal = (serviceId?: string) => {
    if (serviceId) setSelectedServiceId(serviceId);
    setSelectedRoute('');
    setModalOpen(true);
  };

  const handleSelectVehicleClass = (vehicle: Vehicle) => {
    setSelectedServiceId('limousine');
    setSelectedRoute(`Vehicle Class Request: ${vehicle.name}`);
    setModalOpen(true);
  };

  const handleOpenWithRoute = (route: string) => {
    setSelectedRoute(route);
    setSelectedServiceId('airport');
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#C9A227] selection:text-black">
      {/* Custom Luxury Cursor */}
      <CustomCursor />

      {/* Luxury Animated Loader */}
      <LuxuryLoader />

      {/* Navigation Bar */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Main Page Layout */}
      <main>
        {/* Section 2: Hero Section */}
        <HeroSection
          lang={lang}
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* Section 3: Services Grid */}
        <ServicesGrid
          lang={lang}
          onSelectService={handleOpenBookingModal}
        />

        {/* Section 4: Why Choose Us / Differentiation */}
        <WhyChooseUs lang={lang} />

        {/* Section 5: Fleet Showcase */}
        <FleetShowcase
          lang={lang}
          onSelectVehicle={handleSelectVehicleClass}
        />

        {/* Section 6: Reviews & Verified Social Proof */}
        <ReviewsSection lang={lang} />

        {/* Section 7: Geographic Coverage Map & Hubs */}
        <CoverageMap
          lang={lang}
          onSelectHubRoute={(hubName) => handleOpenWithRoute(`Hub Pickup Request: ${hubName}`)}
        />

        {/* Section 9: Full VIP Jet-like Booking Section */}
        <BookingSection
          lang={lang}
          prefilledRoute={selectedRoute}
          prefilledService={selectedServiceId}
        />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating WhatsApp Action Widget */}
      <FloatingWhatsApp lang={lang} />

      {/* Quick Booking Modal */}
      <QuickBookModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        lang={lang}
        initialServiceId={selectedServiceId}
        initialRoute={selectedRoute}
      />
    </div>
  );
}

export default App;
