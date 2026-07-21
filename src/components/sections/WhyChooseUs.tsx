'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Star } from 'lucide-react';
import { Language } from '../../types';

interface WhyChooseUsProps {
  lang: Language;
}

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface ContentStructure {
  eyebrow: string;
  title: string;
  subtitle: string;
  features: FeatureItem[];
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  
  const content: Record<string, ContentStructure> = {
    ar: {
      eyebrow: "لماذا تختارنا",
      title: "معايير النقل السويسري الفاخر",
      subtitle: "نحن لا نقدم مجرد رحلة، بل تجربة تنقل استثنائية مصممة بدقة لتلبي تطلعاتك وتضمن راحتك وأمانك بالكامل.",
      features: [
        {
          icon: <Shield className="w-5 h-5 text-[#F4D06F]" />,
          title: "أمان وخصوصية مطلقة",
          desc: "نلتزم بأعلى معايير الأمان مع ضمان الخصوصية الكاملة لجميع عملائنا ورجال الأعمال طوال الرحلة."
        },
        {
          icon: <Clock className="w-5 h-5 text-[#C9A227]" />,
          title: "دقة سويسرية متناهية",
          desc: "الوقت هو أثمن ما تملك. نضمن لك الالتزام التام بالمواعيد بدقة متناهية دون أي تأخير."
        },
        {
          icon: <Award className="w-5 h-5 text-[#F4D06F]" />,
          title: "أسطول من الفئة الفاخرة",
          desc: "أحدث سيارات مرسيدس بنز الفاخرة (S-Class, V-Class) مجهزة بالكامل لراحتك ورفاهيتك."
        },
        {
          icon: <Star className="w-5 h-5 text-[#C9A227]" />,
          title: "سائقون محترفون",
          desc: "سائقون مدربون على أعلى مستوى، يتحدثون لغات متعددة ويتميزون باللباقة والمعرفة التامة بالطرق."
        }
      ]
    },
    en: {
      eyebrow: "Why Choose Us",
      title: "Swiss Luxury Transport Standards",
      subtitle: "We don't just provide a ride; we deliver an exceptional travel experience tailored precisely to your comfort, safety, and prestige.",
      features: [
        {
          icon: <Shield className="w-5 h-5 text-[#F4D06F]" />,
          title: "Absolute Safety & Privacy",
          desc: "We strictly adhere to the highest safety protocols while guaranteeing ultimate privacy for our VIP clients."
        },
        {
          icon: <Clock className="w-5 h-5 text-[#C9A227]" />,
          title: "Swiss Punctuality",
          desc: "Time is your most valuable asset. We guarantee absolute precision and punctuality for every single pickup."
        },
        {
          icon: <Award className="w-5 h-5 text-[#F4D06F]" />,
          title: "Premium First-Class Fleet",
          desc: "The latest Mercedes-Benz S-Class and V-Class vehicles, meticulously maintained and fully equipped."
        },
        {
          icon: <Star className="w-5 h-5 text-[#C9A227]" />,
          title: "Elite Professional Chauffeurs",
          desc: "Highly trained, multilingual professional chauffeurs delivering discreet, courteous, and knowledgeable service."
        }
      ]
    },
    de: {
      eyebrow: "Warum uns wählen",
      title: "Schweizer Luxustransport-Standards",
      subtitle: "Wir bieten nicht nur eine Fahrt; wir liefern ein außergewöhnliches Reiseerlebnis, das genau auf Ihren Komfort, Ihre Sicherheit und Ihr Prestige zugeschnitten ist.",
      features: [
        {
          icon: <Shield className="w-5 h-5 text-[#F4D06F]" />,
          title: "Absolute Sicherheit & Privatsphäre",
          desc: "Wir halten uns strikt an die höchsten Sicherheitsüberwachungen und garantieren unseren VIP-Kunden ultimative Privatsphäre."
        },
        {
          icon: <Clock className="w-5 h-5 text-[#C9A227]" />,
          title: "Schweizer Pünktlichkeit",
          desc: "Zeit ist Ihr wertvollstes Gut. Wir garantieren absolute Präzision und Pünktlichkeit bei jeder einzelnen Abholung."
        },
        {
          icon: <Award className="w-5 h-5 text-[#F4D06F]" />,
          title: "Erstklassige Premium-Flotte",
          desc: "Die neuesten Mercedes-Benz S-Klasse und V-Klasse Fahrzeuge, sorgfältig gewartet und voll ausgestattet."
        },
        {
          icon: <Star className="w-6 h-6 text-[#C9A227]" />,
          title: "Professionelle Elite-Chauffeure",
          desc: "Hochqualifizierte, mehrsprachige professionelle Chauffeure, die einen diskreten, höflichen und sachkundigen Service bieten."
        }
      ]
    }
  };

  const activeData = content[lang as string] || content['en'];

  return (
    <section id="why-choose-us" className="relative py-24 bg-[#050505] border-t border-white/10 overflow-hidden">
      
      {/* إضاءة خلفية دافئة تتناسق مع قسم الخدمات */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_80%_50%,rgba(201,162,39,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* رأس القسم الفخم */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9A227] block mb-3"
          >
            {activeData.eyebrow}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            {activeData.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-sm sm:text-base leading-relaxed font-light"
          >
            {activeData.subtitle}
          </motion.p>
        </div>

        {/* شبكة العرض بنظام خطوط متقاطعة معمارية مطابقة لقسم الخدمات */}
        <div className="relative border border-white/10 bg-[#0a0a0a]/40 backdrop-blur-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-none">
            
            {activeData.features.map((feature: FeatureItem, idx: number) => {
              
              // هندسة توزيع الحدود لتناسب الـ 4 أعمدة (Desktop) والـ 2 أعمدة (Tablet) والعمود الواحد (Mobile)
              const borderClasses = `
                border-b border-white/10 pt-8 px-6 sm:px-8 pb-10
                ${idx % 4 !== 3 ? 'lg:border-r lg:border-white/10' : 'lg:border-r-0'}
                ${idx % 2 === 0 ? 'md:border-r md:border-white/10' : 'md:border-r-0'}
              `;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className={`group relative flex flex-col justify-between hover:bg-white/[0.02] transition-all duration-500 rounded-none ${borderClasses}`}
                >
                  {/* تأثير التوهج الخلفي الذهبي الفاخر عند الـ hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(201,162,39,0.04)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* شريط خطي علوي يتمدد بأناقة عند التمرير */}
                  <div className="absolute top-0 left-0 w-0 h-[1px] bg-gradient-to-r from-[#C9A227] to-[#F4D06F] group-hover:w-full transition-all duration-500" />

                  <div>
                    {/* ترويسة الكارت والأيقونة الدوارة الساحرة */}
                    <div className="flex items-start justify-between gap-4 mb-8">
                      
                      {/* إطار الأيقونة الدائري المضيء بمدار مستمر */}
                      <div className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-none bg-black border border-white/10">
                        <div className="absolute inset-[-1px] rounded-none overflow-hidden pointer-events-none">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4.5 h-4.5 bg-gradient-to-r from-[#C9A227] to-[#F4D06F] rounded-full blur-[2px] animate-[spin_6s_linear_infinite] origin-[center_24px] shadow-[0_0_10px_#C9A227]" />
                        </div>
                        <div className="relative z-10 w-10 h-10 rounded-none bg-[#121212] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          {feature.icon}
                        </div>
                      </div>

                      {/* رقم الكارت للتصميم المعماري الفاخر */}
                      <span className="font-serif-luxury text-sm font-bold text-[#C9A227]/30 group-hover:text-[#F4D06F]/60 transition-colors duration-300 select-none">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* العنوان */}
                    <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#F4D06F] transition-colors duration-300 mb-3.5 leading-snug">
                      {feature.title}
                    </h3>

                    {/* الوصف */}
                    <p className="text-xs text-white/50 group-hover:text-white/70 transition-colors duration-300 leading-relaxed font-light">
                      {feature.desc}
                    </p>
                  </div>

                  {/* بلصات التقاطع الهندسية المضيئة (+) */}
                  <div className={`
                    absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 z-30 pointer-events-none
                    hidden
                    ${idx % 4 !== 3 ? 'lg:flex' : 'lg:hidden'}
                    ${idx % 2 === 0 ? 'md:flex lg:hidden' : 'md:hidden'}
                  `}>
                    <span className="text-[#C9A227] font-light text-xl select-none animate-pulse">+</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* الـ Keyframes للكرة الذهبية الدوارة داخل الإطارات */}
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