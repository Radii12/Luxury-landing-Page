import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone } from 'lucide-react';
import { Language } from '../../types';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const [isHovered, setIsHovered] = useState(false);

  const phone = '+41764894741';
  const displayPhone = '+41 76 489 47 41';
  const defaultMsg = lang === 'en' 
    ? 'Hello, I would like to book a VIP Chauffeur ride in Switzerland.'
    : 'Grüezi, ich möchte eine VIP Chauffeurfahrt in der Schweiz buchen.';

  const waUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip Badge */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 15, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex flex-col bg-[#121212]/95 backdrop-blur-md border border-[#C9A227]/40 px-4 py-2.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-right"
          >
            <span className="text-xs font-semibold text-white flex items-center justify-end gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {lang === 'en' ? 'Chauffeur Dispatch Online' : 'Chauffeur-Zentrale Online'}
            </span>
            <span className="text-[11px] text-[#F4D06F] mt-0.5 font-medium">
              {displayPhone} • {lang === 'en' ? 'WhatsApp Booking' : 'WhatsApp Buchung'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Direct Phone Dial Button */}
      <a
        href={`tel:${phone}`}
        data-cursor={lang === 'en' ? 'Call 24/7' : 'Anrufen'}
        className="w-12 h-12 rounded-full bg-[#121212] border border-white/10 hover:border-[#C9A227] text-white hover:text-[#C9A227] flex items-center justify-center transition-all shadow-lg hover:scale-105"
        title="Direct VIP Hotline"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Primary WhatsApp Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-cursor="WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 p-[1px] shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] transition-all duration-300 flex items-center justify-center hover:scale-110"
      >
        <div className="w-full h-full rounded-full bg-[#0D0D0D] group-hover:bg-transparent transition-colors flex items-center justify-center">
          <MessageSquare className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors fill-emerald-400/20" />
        </div>
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#050505] animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#050505]" />
      </a>
    </div>
  );
};
