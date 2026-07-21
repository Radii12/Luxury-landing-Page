'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, 
  Shield, Clock, Calendar, Car, User, Navigation2, Sparkles, ChevronRight, Users
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language, BookingFormData } from '../../types';
import { UI_TEXT, SERVICES_DATA, FLEET_DATA } from '../../content/translations';

interface BookingSectionProps {
  lang: Language;
  prefilledRoute?: string;
  prefilledService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  lang,
  prefilledRoute = '',
  prefilledService = 'airport',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    pickup: prefilledRoute ? prefilledRoute.split('→')[0] || '' : '',
    destination: prefilledRoute ? prefilledRoute.split('→')[1] || '' : '',
    date: new Date().toISOString().split('T')[0],
    time: '12:00',
    serviceType: prefilledService,
    vehicleType: 's-class',
    passengers: 2,
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = UI_TEXT.bookingForm;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 120,
          spread: 100,
          origin: { y: 0.6 },
          colors: ['#C9A227', '#F4D06F', '#FFFFFF', '#1A1A1A'],
        });
      } catch (err) {
        console.log('Confetti effect error', err);
      }
    }, 1500);
  };

  // دالة لتفعيل فتح الكاليندر وقائمة الوقت عند الضغط على الـ Input
  const openPicker = (e: React.MouseEvent<HTMLInputElement>) => {
    try {
      if (e.currentTarget.showPicker) {
        e.currentTarget.showPicker();
      }
    } catch (err) {
      // Fallback in case browser doesn't support showPicker
      console.log(err);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#050505] border-t border-white/5 overflow-hidden">
      
      {/* خلفية فخمة ومريحة للعين */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_20%_50%,rgba(201,162,39,0.04)_0%,transparent_70%)] pointer-events-none filter blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[700px] h-[700px] bg-[radial-gradient(circle_at_80%_50%,rgba(201,162,39,0.03)_0%,transparent_70%)] pointer-events-none filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* العمود الأيسر: النصوص والاتصال */}
          <div className="lg:col-span-5 flex flex-col space-y-12 sticky top-24">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-12 bg-[#C9A227]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A227]">
                  {(lang as string) === 'ar' ? 'بوابة الحجز الفاخرة' : 'PREMIUM BOOKING PORTAL'}
                </span>
              </div>

              <h2 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-white mb-6 leading-[1.15]">
                {t.title[lang]}
              </h2>

              <p className="text-sm text-white/50 leading-relaxed font-light mb-12 max-w-md">
                {t.subtitle[lang]}
              </p>

              <div className="flex flex-col gap-5">
                {/* WhatsApp Card */}
                <motion.a
                  whileHover={{ x: 5 }}
                  href="https://wa.me/41764894741"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-none bg-[#0A0A0A] border-l-2 border-[#C9A227] hover:bg-[#111111] transition-all duration-300 flex items-center justify-between group shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block mb-1">
                        {(lang as string) === 'ar' ? 'تنسيق فوري عبر الواتساب' : 'Instant WhatsApp Dispatch'}
                      </span>
                      <span className="text-[11px] text-[#C9A227] font-mono tracking-wider">
                        +41 76 489 47 41
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-2 transition-transform duration-300" />
                </motion.a>

                {/* Phone Hotline Card */}
                <motion.a
                  whileHover={{ x: 5 }}
                  href="tel:+41764894741"
                  className="p-5 rounded-none bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 flex items-center justify-center text-[#C9A227]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white/90 block mb-1">
                        {(lang as string) === 'ar' ? 'الخط الساخن على مدار الساعة' : '24/7 Chauffeur Hotline'}
                      </span>
                      <span className="text-[11px] text-white/50 font-mono">
                        +41 76 489 47 41
                      </span>
                    </div>
                  </div>
                </motion.a>

                {/* Email Card */}
                <motion.a
                  whileHover={{ x: 5 }}
                  href="mailto:info@besttaxiservice.ch"
                  className="p-5 rounded-none bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 flex items-center justify-center text-[#C9A227]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white/90 block mb-1">
                        {(lang as string) === 'ar' ? 'حجوزات الشركات والمجموعات' : 'Corporate & VIP Booking'}
                      </span>
                      <span className="text-[11px] text-white/40 font-mono">
                        info@besttaxiservice.ch
                      </span>
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>

          {/* العمود الأيمن: استمارة الحجز */}
          <div className="lg:col-span-7">
            <div className="relative">
              
              {/* إطار الاستمارة الحاد والأنيق */}
              <div className="relative bg-[#080808] border border-white/10 p-8 sm:p-12 shadow-2xl rounded-none">
                
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="py-16 text-center flex flex-col items-center justify-center"
                    >
                      <div className="w-24 h-24 bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#F4D06F] mb-8 rounded-none relative">
                        <CheckCircle2 className="w-12 h-12" />
                        <Sparkles className="absolute -top-3 -right-3 text-[#F4D06F] w-6 h-6 animate-pulse" />
                      </div>

                      <h3 className="font-serif-luxury text-3xl font-bold text-white mb-4">
                        {t.successTitle[lang]}
                      </h3>
                      <p className="text-sm text-white/60 max-w-md mx-auto leading-relaxed mb-10">
                        {t.successMsg[lang]}
                      </p>

                      {/* إيصال الرحلة */}
                      <div className="w-full max-w-sm bg-[#0A0A0A] border border-white/10 p-6 mb-10 text-left font-mono rounded-none">
                        <div className="flex justify-between items-center text-[10px] text-white/40 mb-6 uppercase tracking-widest border-b border-white/5 pb-4">
                          <span>VIP Pass</span>
                          <span className="text-[#F4D06F]">#CH-{Math.floor(100000 + Math.random() * 900000)}</span>
                        </div>
                        <div className="space-y-4 text-xs">
                          <div>
                            <span className="text-[9px] text-white/30 block uppercase tracking-wider mb-1">{(lang as string) === 'ar' ? 'الاسم' : 'Name'}</span>
                            <span className="text-white font-medium">{formData.fullName}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="text-[9px] text-white/30 block uppercase tracking-wider mb-1">{(lang as string) === 'ar' ? 'نقطة الانطلاق' : 'From'}</span>
                              <span className="text-white font-medium truncate block">{formData.pickup}</span>
                            </div>
                            <div>
                              <span className="text-[9px] text-white/30 block uppercase tracking-wider mb-1">{(lang as string) === 'ar' ? 'الوجهة' : 'To'}</span>
                              <span className="text-white font-medium truncate block">{formData.destination}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white transition-all duration-300 uppercase tracking-widest rounded-none"
                      >
                        {(lang as string) === 'ar' ? 'حجز رحلة جديدة' : 'Book Another Trip'}
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                      
                      {/* ترويسة الاستمارة */}
                      <div className="flex items-center justify-between pb-6 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-[#C9A227]" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                            {(lang as string) === 'ar' ? 'نظام الحجوزات السويسري الآمن' : 'Secured Dispatch Terminal'}
                          </span>
                        </div>
                        <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-2 bg-emerald-500/10 px-3 py-1 border border-emerald-500/20 rounded-none">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                          {(lang as string) === 'ar' ? 'استجابة فورية' : 'Live response'}
                        </span>
                      </div>

                      {/* الصف الأول: نقطة الانطلاق والوجهة */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-3">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[#C9A227] flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5" />
                            {t.fields.pickup.label[lang]} *
                          </label>
                          <input
                            required
                            type="text"
                            value={formData.pickup}
                            onFocus={() => setFocusedField('pickup')}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                            placeholder={t.fields.pickup.placeholder[lang]}
                            className={`w-full bg-[#050505] border-b-2 px-4 py-3.5 text-xs text-white placeholder-white/20 transition-all duration-300 focus:outline-none rounded-none ${
                              focusedField === 'pickup' ? 'border-[#C9A227] bg-[#0A0A0A]' : 'border-white/10 hover:border-white/30'
                            }`}
                          />
                        </div>

                        <div className="flex flex-col gap-3">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[#C9A227] flex items-center gap-2">
                            <Navigation2 className="w-3.5 h-3.5 rotate-45" />
                            {t.fields.destination.label[lang]} *
                          </label>
                          <input
                            required
                            type="text"
                            value={formData.destination}
                            onFocus={() => setFocusedField('destination')}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                            placeholder={t.fields.destination.placeholder[lang]}
                            className={`w-full bg-[#050505] border-b-2 px-4 py-3.5 text-xs text-white placeholder-white/20 transition-all duration-300 focus:outline-none rounded-none ${
                              focusedField === 'destination' ? 'border-[#C9A227] bg-[#0A0A0A]' : 'border-white/10 hover:border-white/30'
                            }`}
                          />
                        </div>
                      </div>

                      {/* الصف الثاني: التاريخ والوقت */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-3">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
                            {t.fields.date.label[lang]}
                          </label>
                          <input
                            type="date"
                            onClick={openPicker}
                            value={formData.date}
                            onFocus={() => setFocusedField('date')}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className={`w-full bg-[#050505] border-b-2 px-4 py-3.5 text-xs text-white font-mono cursor-pointer transition-all duration-300 focus:outline-none rounded-none ${
                              focusedField === 'date' ? 'border-[#C9A227] bg-[#0A0A0A]' : 'border-white/10 hover:border-white/30'
                            }`}
                          />
                        </div>

                        <div className="flex flex-col gap-3">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                            {t.fields.time.label[lang]}
                          </label>
                          <input
                            type="time"
                            onClick={openPicker}
                            value={formData.time}
                            onFocus={() => setFocusedField('time')}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            className={`w-full bg-[#050505] border-b-2 px-4 py-3.5 text-xs text-white font-mono cursor-pointer transition-all duration-300 focus:outline-none rounded-none ${
                              focusedField === 'time' ? 'border-[#C9A227] bg-[#0A0A0A]' : 'border-white/10 hover:border-white/30'
                            }`}
                          />
                        </div>
                      </div>

                      {/* الصف الثالث: نوع الخدمة والسيارة */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-3">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
                            {t.fields.serviceType.label[lang]}
                          </label>
                          <select
                            value={formData.serviceType}
                            onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                            className="w-full bg-[#050505] border-b-2 border-white/10 px-4 py-3.5 text-xs text-white focus:border-[#C9A227] focus:bg-[#0A0A0A] focus:outline-none appearance-none cursor-pointer rounded-none transition-all duration-300 hover:border-white/30"
                          >
                            {SERVICES_DATA.map((s) => (
                              <option key={s.id} value={s.id} className="bg-[#0A0A0A] text-white">
                                {s.title[lang]}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="flex flex-col gap-3">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 flex items-center gap-2">
                            <Car className="w-3.5 h-3.5 text-[#C9A227]" />
                            {t.fields.vehicleType.label[lang]}
                          </label>
                          <select
                            value={formData.vehicleType}
                            onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                            className="w-full bg-[#050505] border-b-2 border-white/10 px-4 py-3.5 text-xs text-white focus:border-[#C9A227] focus:bg-[#0A0A0A] focus:outline-none appearance-none cursor-pointer rounded-none transition-all duration-300 hover:border-white/30"
                          >
                            {FLEET_DATA.map((v) => (
                              <option key={v.id} value={v.id} className="bg-[#0A0A0A] text-white">
                                {v.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* الصف الرابع: البيانات الشخصية (الاسم ورقم الهاتف) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-3">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 flex items-center gap-2">
                            <User className="w-3.5 h-3.5 text-[#C9A227]" />
                            {t.fields.fullName.label[lang]} *
                          </label>
                          <input
                            required
                            type="text"
                            value={formData.fullName}
                            onFocus={() => setFocusedField('fullName')}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder={t.fields.fullName.placeholder[lang]}
                            className={`w-full bg-[#050505] border-b-2 px-4 py-3.5 text-xs text-white placeholder-white/20 transition-all duration-300 focus:outline-none rounded-none ${
                              focusedField === 'fullName' ? 'border-[#C9A227] bg-[#0A0A0A]' : 'border-white/10 hover:border-white/30'
                            }`}
                          />
                        </div>

                        <div className="flex flex-col gap-3">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
                            {t.fields.phone.label[lang]} *
                          </label>
                          <input
                            required
                            type="tel"
                            value={formData.phone}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder={t.fields.phone.placeholder[lang]}
                            className={`w-full bg-[#050505] border-b-2 px-4 py-3.5 text-xs text-white placeholder-white/20 transition-all duration-300 focus:outline-none rounded-none ${
                              focusedField === 'phone' ? 'border-[#C9A227] bg-[#0A0A0A]' : 'border-white/10 hover:border-white/30'
                            }`}
                          />
                        </div>
                      </div>

                      {/* الصف الخامس: الإيميل وعدد الركاب */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-3">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 flex items-center gap-2">
                            <Mail className="w-3.5 h-3.5 text-[#C9A227]" />
                            {t.fields.email.label[lang]} *
                          </label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder={t.fields.email.placeholder[lang]}
                            className={`w-full bg-[#050505] border-b-2 px-4 py-3.5 text-xs text-white placeholder-white/20 transition-all duration-300 focus:outline-none rounded-none ${
                              focusedField === 'email' ? 'border-[#C9A227] bg-[#0A0A0A]' : 'border-white/10 hover:border-white/30'
                            }`}
                          />
                        </div>

                        <div className="flex flex-col gap-3">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 flex items-center gap-2">
                            <Users className="w-3.5 h-3.5 text-[#C9A227]" />
                            {(lang as string) === 'ar' ? 'عدد الركاب' : 'Passengers'}
                          </label>
                          <input
                            type="number"
                            min="1"
                            max="10"
                            value={formData.passengers}
                            onFocus={() => setFocusedField('passengers')}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormData({ ...formData, passengers: parseInt(e.target.value) || 1 })}
                            className={`w-full bg-[#050505] border-b-2 px-4 py-3.5 text-xs text-white placeholder-white/20 transition-all duration-300 focus:outline-none rounded-none ${
                              focusedField === 'passengers' ? 'border-[#C9A227] bg-[#0A0A0A]' : 'border-white/10 hover:border-white/30'
                            }`}
                          />
                        </div>
                      </div>

                      {/* الملاحظات الإضافية / الأمتعة (بعرض كامل) */}
                      <div className="flex flex-col gap-3 mt-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                          {t.fields.message.label[lang]}
                        </label>
                        <textarea
                          rows={2}
                          value={formData.message}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={t.fields.message.placeholder[lang]}
                          className={`w-full bg-[#050505] border-b-2 px-4 py-3.5 text-xs text-white placeholder-white/20 focus:outline-none resize-none transition-all duration-300 rounded-none ${
                            focusedField === 'message' ? 'border-[#C9A227] bg-[#0A0A0A]' : 'border-white/10 hover:border-white/30'
                          }`}
                        />
                      </div>

                      {/* زر الإرسال */}
                      <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-4 relative py-5 bg-[#C9A227] hover:bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-50 rounded-none shadow-[0_0_20px_rgba(201,162,39,0.2)] hover:shadow-[0_0_30px_rgba(201,162,39,0.4)]"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-3">
                            <svg className="animate-spin h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>{t.submitting[lang]}</span>
                          </div>
                        ) : (
                          <>
                            <span>{t.submitBtn[lang]}</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};