import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { Language } from '../../types';
import { UI_TEXT } from '../../content/translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = UI_TEXT.footer;

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      
      {/* تأثيرات الإضاءة الخلفية للفخامة */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.03)_0%,transparent_70%)] pointer-events-none filter blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
          
          {/* العمود الأول: معلومات البراند واللوجو */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              {/* اللوجو المسحوب من مجلد الـ public */}
              <img 
                src="/images/Logo.png" 
                alt="Best Taxi Service Logo" 
                className="h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(201,162,39,0.2)]"
                onError={(e) => {
                  // Fallback in case image extension is different (e.g., .svg or .jpg)
                  (e.target as HTMLImageElement).src = '/images/Logo.svg';
                }}
              />
              <span className="font-serif-luxury text-xl font-bold text-white tracking-tight">
                {UI_TEXT.brandName[lang]}
              </span>
            </div>

            <p className="text-sm text-white/50 leading-relaxed font-light">
              {UI_TEXT.tagline[lang]}
            </p>

            <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#C9A227] bg-[#0A0A0A] px-4 py-2.5 border border-white/10 w-fit rounded-none">
              <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
              <span>Registered Swiss Brand</span>
            </div>
          </div>

          {/* العمود الثاني: أماكن التشغيل */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#C9A227] mb-6 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#C9A227]" />
              Swiss Operating Hubs
            </h4>
            <ul className="space-y-4">
              {[
                'Zurich Airport (ZRH) Terminal Hub',
                'Winterthur Central Dispatch',
                'Opfikon & Glattbrugg Hotel Corridor',
                'Zug & Crypto Valley Finance Hub',
                'Region See & March (Pfäffikon / Lachen)'
              ].map((location, idx) => (
                <li key={idx} className="group flex items-start gap-3">
                  <MapPin className="w-3.5 h-3.5 text-white/30 group-hover:text-[#C9A227] transition-colors mt-0.5" />
                  <span className="text-xs text-white/60 group-hover:text-white transition-colors tracking-wide">
                    {location}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الثالث: الخدمات السريعة */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#C9A227] mb-6 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#C9A227]" />
              Chauffeur Services
            </h4>
            <ul className="space-y-4">
              {[
                { title: 'Airport Transfers & Flight Tracking', link: '#services' },
                { title: 'VIP Limousine & Maybach Fleet', link: '#services' },
                { title: 'Shared Tandem Express Transfers', link: '#services' },
                { title: 'Confidential Document Courier', link: '#services' },
                { title: 'Fixed Rates (15km @ 80 CHF)', link: '#pricing' }
              ].map((service, idx) => (
                <li key={idx} className="group flex items-center gap-3">
                  <span className="h-[1px] w-3 bg-white/10 group-hover:bg-[#C9A227] group-hover:w-6 transition-all duration-300" />
                  <a href={service.link} className="text-xs text-white/60 group-hover:text-white transition-colors tracking-wide">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الرابع: الاتصال المباشر */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#C9A227] mb-2 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#C9A227]" />
              VIP Hotline 24/7
            </h4>
            
            <a
              href="tel:+41764894741"
              className="p-4 bg-[#0A0A0A] border border-white/5 hover:border-[#C9A227]/50 transition-all duration-300 flex items-center gap-4 group rounded-none"
            >
              <div className="w-10 h-10 bg-white/5 group-hover:bg-[#C9A227]/10 flex items-center justify-center transition-colors">
                <Phone className="w-4 h-4 text-[#C9A227]" />
              </div>
              <div>
                <span className="text-[9px] text-white/40 block uppercase tracking-widest mb-1">Instant Dispatch</span>
                <span className="font-mono text-sm font-bold text-white group-hover:text-[#F4D06F] transition-colors">+41 76 489 47 41</span>
              </div>
            </a>

            <a
              href="mailto:info@besttaxiservice.ch"
              className="p-4 bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-all duration-300 flex items-center gap-4 group rounded-none"
            >
              <div className="w-10 h-10 bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                <Mail className="w-4 h-4 text-white/70" />
              </div>
              <div>
                <span className="text-[9px] text-white/40 block uppercase tracking-widest mb-1">Corporate & VIP</span>
                <span className="font-mono text-[11px] text-white/80 group-hover:text-white transition-colors">info@besttaxiservice.ch</span>
              </div>
            </a>
          </div>

        </div>

        {/* الشريط السفلي (الحقوق والروابط القانونية) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] text-white/40 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Best Taxi Service Switzerland. {t.rights[lang]}</p>
          <div className="flex items-center gap-6">
            {/* <a href="#" className="hover:text-[#C9A227] transition-colors">Privacy Policy</a> */}
            <span className="text-white/10">|</span>
            {/* <a href="#" className="hover:text-[#C9A227] transition-colors">Terms of Transport</a> */}
            <span className="text-white/10">|</span>
            {/* <a href="#" className="hover:text-[#C9A227] transition-colors">Imprint</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};