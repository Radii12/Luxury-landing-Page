import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  ArrowUpRight, 
  HelpCircle,
  Plane,         
  Briefcase,     
  Gem,           
  Calendar,      
  Compass,       
  MapPin,        
  Clock          
} from 'lucide-react';
import { Language } from '../../types';
import { UI_TEXT, SERVICES_DATA } from '../../content/translations';

interface ServicesGridProps {
  lang: Language;
  onSelectService: (serviceId: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  lang,
  onSelectService,
}) => {
  const t = UI_TEXT.servicesSection;

  const getServiceIcon = (serviceId: string) => {
    switch (serviceId.toLowerCase()) {
      case 'airport':
      case 'airport-transfer':
        return <Plane className="w-5 h-5 text-[#F4D06F]" />;
      case 'corporate':
      case 'business':
        return <Briefcase className="w-5 h-5 text-[#C9A227]" />;
      case 'vip':
      case 'luxury':
        return <Gem className="w-5 h-5 text-[#F4D06F]" />;
      case 'events':
      case 'wedding':
        return <Calendar className="w-5 h-5 text-[#C9A227]" />;
      case 'hourly':
      case 'disposal':
        return <Clock className="w-5 h-5 text-[#F4D06F]" />;
      case 'point-to-point':
        return <MapPin className="w-5 h-5 text-[#C9A227]" />;
      case 'sightseeing':
      case 'tourism':
      default:
        return <Compass className="w-5 h-5 text-[#F4D06F]" />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#050505] border-t border-white/10 overflow-hidden">
      
      {/* الخلفية والإضاءة الخافتة */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_20%_50%,rgba(201,162,39,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* رأس القسم (Section Header) */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9A227] block mb-3"
          >
            {t.eyebrow[lang]}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white mb-5 tracking-tight"
          >
            {t.title[lang]}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-white/70 leading-relaxed font-light"
          >
            {t.subtitle[lang]}
          </motion.p>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-none bg-white/[0.03] border border-white/10 text-xs text-white/80 tracking-wide">
            <HelpCircle className="w-3.5 h-3.5 text-[#C9A227] animate-pulse" />
            <span>{t.question[lang]}</span>
          </div>
        </div>

        {/* شبكة العرض بنظام خطوط متقاطعة أوتوماتيكية بالكامل */}
        <div className="relative border border-white/10 bg-[#0a0a0a]/40 backdrop-blur-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-none">
            
            {SERVICES_DATA.map((service, idx) => {
              const isFullWidth = service.id === 'corporate';

              // ديناميكية توزيع الحدود لتناسب الـ 3 أعمدة (Desktop) والـ 2 أعمدة (Tablet) والعمود الواحد (Mobile)
              const borderClasses = !isFullWidth ? `
                border-b border-white/10 pt-6 sm:pt-8 px-6 sm:px-8 pb-4
                ${idx % 3 !== 2 ? 'lg:border-r lg:border-white/10' : 'lg:border-r-0'}
                ${idx % 2 === 0 ? 'md:border-r md:border-white/10' : 'md:border-r-0'}
              ` : 'md:col-span-2 lg:col-span-3 h-auto min-h-[18rem] pt-8 px-6 sm:px-8 pb-12 bg-gradient-to-r from-[#0d0d0d] via-[#121212] to-[#0d0d0d]';

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className={`group relative flex flex-col justify-between hover:bg-white/[0.02] transition-all duration-500 rounded-none ${borderClasses}`}
                >
                  {/* تأثير التوهج الخلفي الفخم عند الـ hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(201,162,39,0.04)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    {/* ترويسة الكارت الداخلية */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      
                      {/* إطار الأيقونة بحلقة دوارة مضيئة باستمرار */}
                      <div className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-none bg-black border border-white/10">
                        <div className="absolute inset-[-1px] rounded-none overflow-hidden pointer-events-none">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4.5 h-4.5 bg-gradient-to-r from-[#C9A227] to-[#F4D06F] rounded-full blur-[2px] animate-[spin_6s_linear_infinite] origin-[center_24px] shadow-[0_0_10px_#C9A227]" />
                        </div>
                        <div className="relative z-10 w-10 h-10 rounded-none bg-[#121212] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          {getServiceIcon(service.id)}
                        </div>
                      </div>

                      {service.tag && (
                        <span className="px-2.5 py-1 rounded-none text-[9px] font-bold uppercase tracking-[0.15em] bg-[#C9A227]/10 text-[#F4D06F] border border-[#C9A227]/20">
                          {service.tag[lang]}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white group-hover:text-[#F4D06F] transition-colors duration-300 mb-1">
                      {service.title[lang]}
                    </h3>
                    
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A227] mb-4">
                      {service.subtitle[lang]}
                    </p>

                    <p className="text-xs text-white/60 leading-relaxed mb-6 font-light">
                      {service.description[lang]}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 pt-5 border-t border-white/5">
                      {service.features[lang].map((ft, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-[11px] text-white/70">
                          <Check className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                          <span className="font-light">{ft}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* زر الحجز الملاصق لأسفل الحشوة (ليضمن مسافة الـ 16px تماماً للخط) */}
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="w-full py-3.5 rounded-none bg-[#0a0a0a] border border-white/10 group-hover:border-[#C9A227] text-[10px] font-bold uppercase tracking-[0.15em] text-white group-hover:text-black group-hover:bg-gradient-to-r group-hover:from-[#C9A227] group-hover:to-[#F4D06F] flex items-center justify-center gap-2 transition-all duration-300 shadow-md group-hover:shadow-[0_0_20px_rgba(201,162,39,0.25)]"
                  >
                    <span>{service.ctaText[lang]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A227] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </button>

                  {/* 
                    موضع بلصات التقاطع (+) الهندسي المطور:
                    تظهر البلص عند الزاوية اليمنى السفلية لكل كارت يحمل حداً جانبياً حقيقياً، متزامناً مع دقة البكسل ومتحركاً مع مرونة الشاشات.
                  */}
                  {!isFullWidth && (
                    <div className={`
                      absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 z-30 pointer-events-none
                      hidden
                      ${idx % 3 !== 2 ? 'lg:flex' : 'lg:hidden'}
                      ${idx % 2 === 0 ? 'md:flex lg:hidden' : 'md:hidden'}
                    `}>
                      <span className="text-[#C9A227] font-light text-xl select-none animate-pulse">+</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

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