import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ChevronDown, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  // أيقونات الإحصائيات
  Award,       
  Car,         
  Milestone,   
  Navigation   
} from 'lucide-react';
import { Language } from '../../types';
import { UI_TEXT, SERVICES_DATA } from '../../content/translations';

interface HeroSectionProps {
  lang: Language;
  onOpenBookingModal: (prefilledService?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenBookingModal,
}) => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [service, setService] = useState('airport');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(2);

  const t = UI_TEXT.hero;

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingModal(service);
  };

  // دالة لتحديد الأيقونة بناءً على الفهرس
  const getStatIconByIndex = (index: number) => {
    switch (index) {
      case 0:
        return <Car className="w-5 h-5 text-[#F4D06F]" />;
      case 1:
        return <Award className="w-5 h-5 text-[#C9A227]" />;
      case 2:
        return <Milestone className="w-5 h-5 text-[#F4D06F]" />;
      case 3:
      default:
        return <Navigation className="w-5 h-5 text-[#C9A227]" />;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#050505]">
      
      {/* Background Media & Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(201,162,39,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none animate-pulse z-10" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(212,115,26,0.12)_0%,transparent_60%)] blur-2xl pointer-events-none z-10" />

        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/cars/mercedes-s-class.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-102 opacity-40"
        >
          <source src="/images/vidhero.mp4" type="video/mp4" />
          <source src="/vidhero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-[#050505]/50 z-10" />
        <div className="absolute inset-0 bg-[#050505]/30 pointer-events-none z-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#F4D06F]">
              {t.badge[lang]}
            </span>
          </div>
        </motion.div>

        {/* Main Headlines */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif-luxury italic font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-4"
          >
            <span className="block text-white">{t.titleLine1[lang]}</span>
            <span className="block gold-gradient-text not-italic font-normal">
              {t.titleLine2[lang]}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed font-light"
          >
            {t.lead1[lang]}
          </motion.p>
        </div>

        {/* Booking Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="relative p-6 sm:p-8 rounded-3xl bg-[#121212]/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C9A227]" />
                <h3 className="font-serif-luxury text-xl text-white font-bold tracking-wide">
                  {t.quickBookHeader[lang]}
                </h3>
              </div>
              <span className="text-xs text-white/50 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {t.quickBookSub[lang]}
              </span>
            </div>

            <form onSubmit={handleQuickBook} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#C9A227] flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {lang === 'en' ? 'Pickup Location' : 'Abholort'}
                </label>
                <input
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder={lang === 'en' ? 'Zurich Airport, Hotel...' : 'Flughafen Zürich, Hotel...'}
                  className="w-full bg-[#0D0D0D]/90 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#C9A227] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#C9A227] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#F4D06F]" />
                  {lang === 'en' ? 'Destination' : 'Zielort'}
                </label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder={lang === 'en' ? 'St. Moritz, Zug...' : 'St. Moritz, Zug...'}
                  className="w-full bg-[#0D0D0D]/90 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#C9A227] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#C9A227] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  {lang === 'en' ? 'Service Category' : 'Service-Art'}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#0D0D0D]/90 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C9A227]"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#121212]">
                      {s.title[lang]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#C9A227] flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {lang === 'en' ? 'Date' : 'Datum'}
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#0D0D0D]/90 border border-white/10 rounded-xl px-2.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C9A227]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#C9A227] flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {lang === 'en' ? 'Guests' : 'Gäste'}
                  </label>
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    className="w-full bg-[#0D0D0D]/90 border border-white/10 rounded-xl px-2 py-2.5 text-xs text-white focus:outline-none focus:border-[#C9A227]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num} className="bg-[#121212]">
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="md:col-span-2 lg:col-span-4 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 text-xs text-white/60">
                  <Clock className="w-4 h-4 text-[#C9A227]" />
                  <span>
                    {lang === 'en' 
                      ? 'Live Chauffeur dispatch standing by 24/7'
                      : '24/7 Chauffeur-Zentrale bereit'}
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/41764894741?text=${encodeURIComponent(
                      `Inquiry: Pickup ${pickup || 'Zurich'}, Destination ${destination || 'Hotel'}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 sm:w-auto px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/15 hover:border-[#C9A227] text-xs font-semibold text-white transition-all text-center"
                  >
                    {t.ctaWhatsapp[lang]}
                  </a>

                  <button
                    type="submit"
                    className="w-1/2 sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#F4D06F] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(201,162,39,0.3)] hover:scale-[1.02] transition-all"
                  >
                    <span>{t.ctaCalculate[lang]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </motion.div>

        {/* --- Luxurious Framer-Style Bento Grid Stats --- */}
        {t.stats && (
          <div className="relative max-w-5xl mx-auto">
            
            {/* الحاوية الرئيسية بزوايا قائمة حادة (rounded-none) وإطار موحد */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-none border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-xl overflow-hidden divide-y md:divide-y-0 lg:divide-x divide-white/10">
              
              {Object.values(t.stats).map((item: any, index: number) => {
                if (!item) return null;
                return (
                  <div
                    key={index}
                    className="group relative flex items-center gap-5 p-6 sm:p-7 hover:bg-white/[0.02] transition-all duration-500"
                  >
                    {/* طبقة تفاعلية خلفية متوهجة عند مرور الماوس */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,162,39,0.06)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* حاوية الأيقونة مع تأثير الحلقة المضيئة الدوارة باستمرار */}
                    <div className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-black border border-white/10">
                      
                      {/* النقطة المتوهجة الدوارة ظاهرة ومضيئة بشكل دائم وثابت */}
                      <div className="absolute inset-[-1px] rounded-full overflow-hidden pointer-events-none">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4.5 h-4.5 bg-gradient-to-r from-[#C9A227] to-[#F4D06F] rounded-full blur-[2px] animate-[spin_5s_linear_infinite] origin-[center_24px] shadow-[0_0_12px_#C9A227]" />
                      </div>

                      {/* حاوية الأيقونة الداخلية */}
                      <div className="relative z-10 w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        {getStatIconByIndex(index)}
                      </div>
                    </div>

                    {/* قسم الأرقام والوصف متموضع بجانب الأيقونة */}
                    <div className="flex flex-col justify-center min-w-0">
                      <span className="font-serif-luxury font-bold text-3xl sm:text-4xl text-white tracking-tight leading-none group-hover:text-[#F4D06F] transition-colors duration-300">
                        {item.value}
                      </span>
                      <span className="text-[9.5px] uppercase tracking-[0.15em] text-white/40 font-bold mt-1.5 truncate group-hover:text-white/70 transition-colors duration-300">
                        {item.label && item.label[lang]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* --- علامات التقاطع الاحترافية على شكل بلص (+) بلون ذهبي ناعم --- */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              
              {/* نقطة الالتقاء الأولى (بين الكارد 1 و 2) */}
              <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                <div className="text-[#C9A227] font-light text-xl opacity-90 select-none animate-pulse">
                  +
                </div>
              </div>

              {/* نقطة الالتقاء الثانية (بين الكارد 2 و 3) */}
              <div className="absolute left-2/4 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                <div className="text-[#C9A227] font-light text-xl opacity-90 select-none animate-pulse">
                  +
                </div>
              </div>

              {/* نقطة الالتقاء الثالثة (بين الكارد 3 و 4) */}
              <div className="absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                <div className="text-[#C9A227] font-light text-xl opacity-90 select-none animate-pulse">
                  +
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <a
            href="#services"
            className="flex flex-col items-center gap-2 text-white/40 hover:text-[#C9A227] transition-colors"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.2em]">EXPLORE VIP SERVICES</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#C9A227]" />
          </a>
        </div>
      </div>

      {/* Tailwind Custom Keyframes Extension */}
      <style>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .origin-\\[center_24px\\] {
          transform-origin: 50% 24px;
        }
      `}</style>
    </section>
  );
};