'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronRight, ShieldCheck } from 'lucide-react';
import { Language } from '../../types';
import { UI_TEXT } from '../../content/translations';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
  onOpenBookingModal: (serviceId?: string) => void; // تم إضافة هذا السطر لحل مشكلة النوع
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  onOpenBookingModal, // استقبال الدالة هنا
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = UI_TEXT.nav;

  // الدالة المحدثة: تقوم فقط بإغلاق القائمة وفتح المودال (المنطق موجود في App.tsx)
  const handleBookingClick = () => {
    setMobileMenuOpen(false);
    onOpenBookingModal(); 
  };

  const navItems = [
    { label: t.services[lang], href: '#services' },
    { label: t.fleet[lang], href: '#fleet' },
    { label: t.reviews[lang], href: '#reviews' },
    { label: t.coverage[lang], href: '#coverage' },
    { label: t.prices[lang], href: '#pricing' },
    { label: t.contact[lang], href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/92 backdrop-blur-2xl border-b border-white/10 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-[#050505]/95 via-[#050505]/60 to-transparent py-3 md:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-1.5 md:gap-4 w-full overflow-hidden box-border">
          
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <div className="relative flex items-center justify-center p-0 transition-transform duration-300 group-hover:scale-103 shrink-0">
              <img src="/images/Logo.png" alt="Logo" className="h-8 w-auto xs:h-9 md:h-11 object-contain" />
            </div>
            
            <div className="hidden md:flex flex-col shrink">
              <div className="flex items-center gap-1.5">
                <span className="font-serif-luxury text-sm md:text-lg font-bold tracking-tight text-white group-hover:text-[#F4D06F] transition-colors whitespace-nowrap">
                  {UI_TEXT.brandName[lang]}
                </span>
                <span className="inline-flex items-center gap-0.5 px-1 py-0.5 rounded-full text-[8px] font-semibold bg-[#C9A227]/10 text-[#F4D06F] border border-[#C9A227]/20 uppercase tracking-widest shrink-0">
                  <ShieldCheck className="w-2 h-2 text-[#C9A227]" />
                  CH
                </span>
              </div>
              <span className="text-[8px] sm:text-[9px] uppercase font-medium tracking-[0.1em] sm:tracking-[0.12em] text-[#C9A227] truncate">
                {UI_TEXT.subtitleRole[lang]}
              </span>
            </div>
          </a>

          <nav className={`hidden lg:flex flex-nowrap items-center justify-center border border-white/5 bg-[#050505]/40 rounded-full px-3 py-1.5 backdrop-blur-sm shrink-0 transition-all duration-300 ${lang === 'de' ? 'gap-0.5 xl:gap-1.5' : 'gap-1.5 xl:gap-2.5'}`}>
            {navItems.map((item, idx) => (
              <React.Fragment key={idx}>
                <a
                  href={item.href}
                  className={`font-semibold uppercase transition-all duration-300 relative group py-1 whitespace-nowrap ${lang === 'de' ? 'text-[9.5px] xl:text-[10px] px-0.5 xl:px-1 tracking-normal' : 'text-[10px] xl:text-[11px] px-1 xl:px-1.5 tracking-wider xl:tracking-widest'} text-white/75 hover:text-[#F4D06F]`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C9A227] transition-all duration-300 group-hover:w-full" />
                </a>
                {idx < navItems.length - 1 && (
                  <span className="text-[9px] text-[#C9A227]/20 select-none font-light" aria-hidden="true">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* تبديل اللغة */}
            <div className="relative flex items-center bg-[#121212] border border-white/10 rounded-none p-0.5 shadow-inner shrink-0">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold rounded-none transition-all duration-300 ${lang === 'en' ? 'bg-gradient-to-r from-[#C9A227] to-[#F4D06F] text-black' : 'text-white/60 hover:text-white'}`}
              >EN</button>
              <button
                onClick={() => onLanguageChange('de')}
                className={`px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold rounded-none transition-all duration-300 ${lang === 'de' ? 'bg-gradient-to-r from-[#C9A227] to-[#F4D06F] text-black' : 'text-white/60 hover:text-white'}`}
              >DE</button>
            </div>

            {/* زر الهاتف */}
            <a
              href="tel:+41764894741"
              className="hidden md:flex items-center gap-1 px-2.5 py-1.5 rounded-none bg-[#121212] border border-white/10 hover:border-[#C9A227]/50 text-[10px] xl:text-[11px] font-semibold text-white hover:text-[#F4D06F] transition-all shrink-0 whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#C9A227] shrink-0" />
              <span className="font-num tracking-wide">+41 76 489 47 41</span>
            </a>

            {/* زر الحجز */}
            <button
              onClick={handleBookingClick}
              className="relative group overflow-hidden px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-none bg-gradient-to-r from-[#C9A227] via-[#F4D06F] to-[#C9A227] bg-[length:200%_auto] text-black font-bold text-[8.5px] xs:text-[9.5px] sm:text-[10px] xl:text-[11px] uppercase tracking-wider shadow-[0_0_15px_rgba(201,162,39,0.25)] hover:shadow-[0_0_25px_rgba(201,162,39,0.5)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shrink-0 whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center gap-1">
                <Phone className="w-2.5 h-2.5 fill-black md:hidden shrink-0" />
                <span>{t.bookRideNow[lang]}</span>
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-xl bg-[#121212] border border-white/10 text-white/80 hover:text-white shrink-0"
            >
              {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-0 z-30 bg-[#050505]/98 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col lg:hidden border-b border-white/10 shadow-2xl h-screen overflow-y-auto"
          >
            <div className="flex flex-col gap-1 mt-4">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 border-b border-white/5 text-base font-serif-luxury text-white hover:text-[#F4D06F] transition-colors whitespace-nowrap"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#C9A227]" />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-6 mt-auto mb-8 border-t border-white/10">
              <a href="tel:+41764894741" className="flex items-center justify-center gap-3 py-3 rounded-none bg-[#121212] border border-[#C9A227]/40 text-sm font-semibold text-[#F4D06F] whitespace-nowrap">
                <Phone className="w-4 h-4 text-[#C9A227]" />
                <span>+41 76 489 47 41 (24/7)</span>
              </a>

              <button
                onClick={handleBookingClick}
                className="w-full py-3.5 rounded-none bg-gradient-to-r from-[#C9A227] to-[#F4D06F] text-black font-bold text-sm uppercase tracking-wider text-center whitespace-nowrap"
              >
                {t.bookRideNow[lang]}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};