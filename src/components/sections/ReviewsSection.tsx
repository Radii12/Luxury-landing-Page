'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../../types';
import { UI_TEXT, TESTIMONIALS_DATA } from '../../content/translations';

interface ReviewsSectionProps {
  lang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = UI_TEXT.reviewsSection;
  
  const itemsPerPage = 4;
  const totalItems = TESTIMONIALS_DATA?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const nextSlide = () => {
    if (totalPages <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    if (totalPages <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    if (totalPages <= 1) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, totalPages]);

  const visibleReviews = (TESTIMONIALS_DATA || []).slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="relative py-24 bg-[#050505] border-t border-white/10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9A227] block mb-3">
              {t.eyebrow[lang]}
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white tracking-tight">
              {t.title[lang]}
            </h2>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={prevSlide} 
              disabled={totalPages <= 1}
              className="w-12 h-12 flex items-center justify-center border border-white/10 text-white hover:bg-[#C9A227] hover:border-[#C9A227] disabled:opacity-50 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide} 
              disabled={totalPages <= 1}
              className="w-12 h-12 flex items-center justify-center border border-white/10 text-white hover:bg-[#C9A227] hover:border-[#C9A227] disabled:opacity-50 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Grid - 4 Columns */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              // هنا التحكم في عدد الأعمدة: 1 للموبايل، 2 للتابلت، 4 للديسكتوب
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10"
            >
              {visibleReviews.map((review, idx) => (
                <motion.div 
                  key={`${review.id}-${currentIndex}`}
                  className="group relative flex flex-col justify-between p-8 border-b border-r border-white/10 bg-[#0a0a0a]/40 hover:bg-white/[0.02] transition-colors duration-300"
                >
                  <div className="absolute top-0 left-0 w-0 h-[1px] bg-[#C9A227] group-hover:w-full transition-all duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                       <div className="w-12 h-12 flex items-center justify-center bg-[#121212] border border-white/10 text-[#C9A227] group-hover:rotate-y-180 transition-transform duration-500">
                         <Quote className="w-5 h-5" />
                       </div>
                       
                       <span className="font-serif-luxury text-sm font-bold text-[#C9A227]/30">
                         0{idx + 1 + (currentIndex * itemsPerPage)}
                       </span>
                    </div>

                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < (review.rating || 5) ? 'fill-[#C9A227] text-[#C9A227]' : 'fill-white/10 text-white/10'}`} />
                      ))}
                    </div>
                    
                    <p className="text-sm text-white/60 leading-relaxed italic font-light mb-6 transition-colors">
                      "{review.quote[lang]}"
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 mt-auto">
                    <h4 className="font-serif-luxury text-white font-bold">{review.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-[#C9A227] mt-1">{review.role[lang]}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};