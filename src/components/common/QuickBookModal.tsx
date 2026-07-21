'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../../types';
import { UI_TEXT, SERVICES_DATA, FLEET_DATA } from '../../content/translations';

interface QuickBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialServiceId?: string;
  initialRoute?: string;
}

export const QuickBookModal: React.FC<QuickBookModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialServiceId = 'airport',
  initialRoute = '',
}) => {
  const [pickup, setPickup] = useState(initialRoute ? initialRoute.split('→')[0] || '' : '');
  const [destination, setDestination] = useState(initialRoute ? initialRoute.split('→')[1] || '' : '');
  const [service, setService] = useState(initialServiceId);
  const [vehicle, setVehicle] = useState('s-class');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('14:00');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [passengers, setPassengers] = useState('1');
  const [notes, setNotes] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = UI_TEXT.bookingForm;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.55 }, colors: ['#C9A227', '#F4D06F', '#ffffff'] });
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-lg" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-3xl bg-[#080808] border border-white/10 p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white"><X className="w-6 h-6" /></button>

            {isSubmitted ? (
              <div className="py-20 text-center text-white">
                <CheckCircle2 className="w-16 h-16 text-[#C9A227] mx-auto mb-4" />
                <h3 className="text-2xl font-serif">{t.successTitle[lang]}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="text-center mb-8">
                  <Sparkles className="w-8 h-8 text-[#C9A227] mx-auto mb-2" />
                  <h3 className="font-serif text-3xl text-white tracking-wide">{t.title[lang]}</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#F4D06F] mt-2">
                    {lang === 'en' ? 'Secure Concierge Booking' : 
                     lang === 'de' ? 'Sichere Concierge-Buchung' : 
                     'حجز كونسيرج آمن'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Pickup & Destination */}
                  <div className="relative">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#C9A227] mb-2 block">Pickup Point *</label>
                    <input required value={pickup} onChange={(e) => setPickup(e.target.value)} className="w-full bg-[#121212] border-b border-white/20 p-3 text-sm text-white focus:border-[#C9A227] outline-none" />
                  </div>
                  <div className="relative">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#C9A227] mb-2 block">Destination Point *</label>
                    <input required value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full bg-[#121212] border-b border-white/20 p-3 text-sm text-white focus:border-[#C9A227] outline-none" />
                  </div>

                  {/* Date & Time */}
                  <div className="relative">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#C9A227] mb-2 block">Date of Trip</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-[#121212] border-b border-white/20 p-3 text-sm text-white focus:border-[#C9A227] outline-none [color-scheme:dark]" />
                  </div>
                  <div className="relative">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#C9A227] mb-2 block">Pickup Time</label>
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-[#121212] border-b border-white/20 p-3 text-sm text-white focus:border-[#C9A227] outline-none [color-scheme:dark]" />
                  </div>

                  {/* Services & Vehicle */}
                  <div className="relative">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#C9A227] mb-2 block">Service Type</label>
                    <select value={service} onChange={(e) => setService(e.target.value)} className="w-full bg-[#121212] border-b border-white/20 p-3 text-sm text-white focus:border-[#C9A227] outline-none appearance-none">
                      {SERVICES_DATA.map(s => <option key={s.id} value={s.id} className="bg-[#1a1a1a]">{s.title[lang]}</option>)}
                    </select>
                  </div>
                  <div className="relative">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#C9A227] mb-2 block">Vehicle Class</label>
                    <select value={vehicle} onChange={(e) => setVehicle(e.target.value)} className="w-full bg-[#121212] border-b border-white/20 p-3 text-sm text-white focus:border-[#C9A227] outline-none appearance-none">
                      {FLEET_DATA.map(v => <option key={v.id} value={v.id} className="bg-[#1a1a1a]">{v.name}</option>)}
                    </select>
                  </div>

                  {/* Personal Details */}
                  <div className="relative">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#C9A227] mb-2 block">Your Name *</label>
                    <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-[#121212] border-b border-white/20 p-3 text-sm text-white focus:border-[#C9A227] outline-none" />
                  </div>
                  <div className="relative">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#C9A227] mb-2 block">Phone Number (WhatsApp) *</label>
                    <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-[#121212] border-b border-white/20 p-3 text-sm text-white focus:border-[#C9A227] outline-none" />
                  </div>
                  <div className="relative">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#C9A227] mb-2 block">Email Address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#121212] border-b border-white/20 p-3 text-sm text-white focus:border-[#C9A227] outline-none" />
                  </div>
                  <div className="relative">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#C9A227] mb-2 block">Passengers</label>
                    <input type="number" min="1" value={passengers} onChange={(e) => setPassengers(e.target.value)} className="w-full bg-[#121212] border-b border-white/20 p-3 text-sm text-white focus:border-[#C9A227] outline-none" />
                  </div>

                  {/* Notes (Full Width) */}
                  <div className="col-span-1 md:col-span-2 relative">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#C9A227] mb-2 block">Special Requests / Luggage Notes</label>
                    <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full bg-[#121212] border-b border-white/20 p-3 text-sm text-white focus:border-[#C9A227] outline-none h-24 resize-none" />
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} className="mt-10 w-full py-4 bg-[#C9A227] text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#F4D06F] transition-colors flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> {isSubmitting ? 'Sending...' : t.submitBtn[lang]}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};