'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Navigation, CheckCircle2, 
  Landmark, Mountain, Ship, TreePine, Castle, Train, Plane, Map 
} from 'lucide-react';
import { Language } from '../../types';
import { UI_TEXT, OPERATING_HUBS } from '../../content/translations';

interface CoverageMapProps {
  lang: Language;
  onSelectHubRoute: (hubName: string) => void;
}

const HUB_ICONS = [Landmark, Mountain, Ship, TreePine, Castle, Train, Plane, Map];

export const CoverageMap: React.FC<CoverageMapProps> = ({
  lang,
  onSelectHubRoute,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHubId, setSelectedHubId] = useState<string>(OPERATING_HUBS[0].id);
  
  // 1. إنشاء Ref لربطه بالسايدبار للتحكم الدقيق في التمرير
  const sidebarRef = useRef<HTMLDivElement>(null);

  const t = UI_TEXT.coverageSection;

  const filteredHubs = OPERATING_HUBS.filter((hub) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      hub.name.toLowerCase().includes(q) ||
      hub.canton.toLowerCase().includes(q) ||
      hub.destinations[lang].some((d) => d.toLowerCase().includes(q))
    );
  });

  const activeHub = OPERATING_HUBS.find((h) => h.id === selectedHubId) || OPERATING_HUBS[0];

  // 2. استخدام useEffect لمنع تسرب التمرير (Prevent Scroll Chaining)
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const handleWheel = (e: WheelEvent) => {
      const isScrollable = sidebar.scrollHeight > sidebar.clientHeight;
      if (!isScrollable) return;

      const isAtTop = sidebar.scrollTop === 0;
      // نستخدم Math.ceil لضمان دقة الحسابات مع الشاشات عالية الدقة
      const isAtBottom = Math.ceil(sidebar.scrollTop + sidebar.clientHeight) >= sidebar.scrollHeight;

      // إذا كنا في الأعلى والمستخدم يمرر لأعلى، أو في الأسفل ويمرر لأسفل -> نوقف حركة الصفحة
      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        e.preventDefault();
      }
    };

    // إضافة المستمع مع { passive: false } لنتمكن من استخدام e.preventDefault()
    sidebar.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      sidebar.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <section id="coverage" className="relative py-16 bg-[#050505] border-t border-white/10 overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_80%_20%,rgba(201,162,39,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9A227] block mb-2">
            {t.eyebrow[lang]}
          </motion.span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white mb-3">
            {t.title[lang]}
          </h2>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative flex items-center bg-[#0a0a0a] border border-white/10 p-1 focus-within:border-[#C9A227] transition-all duration-300">
            <Search className="w-5 h-5 text-[#C9A227] ml-4 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder[lang]}
              className="w-full bg-transparent px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none tracking-widest"
            />
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 bg-[#0a0a0a]/40 backdrop-blur-xl">
          
          {/* Hub List (Left Col) */}
          <div 
            ref={sidebarRef} // 3. ربط الـ Ref بالسايدبار
            // استخدمت overscroll-none كطبقة حماية إضافية من CSS
            className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 h-[450px] overflow-y-auto overscroll-none custom-scrollbar"
          >
            {filteredHubs.map((hub) => {
              const isSelected = hub.id === selectedHubId;
              const originalIndex = OPERATING_HUBS.findIndex((h) => h.id === hub.id);
              const IconComponent = HUB_ICONS[originalIndex % HUB_ICONS.length];

              return (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHubId(hub.id)}
                  className={`w-full text-left p-5 border-b border-white/10 transition-all duration-500 group relative ${isSelected ? 'bg-white/[0.03]' : 'hover:bg-white/[0.02]'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 flex items-center justify-center border transition-colors ${isSelected ? 'border-[#C9A227] bg-[#C9A227]/10' : 'border-white/10 bg-black group-hover:border-white/20'}`}>
                      <IconComponent className={`w-4 h-4 ${isSelected ? 'text-[#C9A227]' : 'text-white/50 group-hover:text-white/70'}`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold transition-colors ${isSelected ? 'text-[#C9A227]' : 'text-white'}`}>
                        {hub.name}
                      </h4>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">{hub.canton}</p>
                    </div>
                  </div>
                  {isSelected && (
                    <motion.div layoutId="active-marker" className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C9A227]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Details View (Right Col) */}
          <div className="lg:col-span-8 p-6 sm:p-10 relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#050505] flex flex-col justify-center h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHub.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif-luxury text-2xl text-white">{activeHub.name}</h3>
                  <span className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] uppercase font-bold tracking-widest">
                    <CheckCircle2 className="w-3 h-3" />
                    {activeHub.statusText[lang]}
                  </span>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-lg">
                  {lang === 'en' 
                    ? 'State-of-the-art dispatch node, ensuring premium service efficiency across the entire regional corridor with 24/7 availability.' 
                    : 'Modernster Dispositionsknotenpunkt, der rund um die Uhr eine erstklassige Service-Effizienz im gesamten regionalen Korridor garantiert.'}
                </p>

                <div className="mb-8">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A227] mb-4 flex items-center gap-2">
                    <Navigation className="w-3 h-3" /> 
                    {lang === 'en' ? 'Direct Served Corridors' : 'Direkt bediente Routen'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeHub.destinations[lang].map((dest, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2.5 bg-white/[0.02] border border-white/5">
                        <div className="w-1 h-1 bg-[#C9A227]" />
                        <span className="text-xs text-white/80">{dest}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectHubRoute(activeHub.name)}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#C9A227] to-[#F4D06F] text-black font-bold text-[10px] uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(201,162,39,0.3)] transition-all duration-300"
                >
                  {lang === 'en' ? `Book From ${activeHub.name}` : `Buchung Ab ${activeHub.name}`}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #C9A227; border-radius: 4px; }
      `}</style>
    </section>
  );
};