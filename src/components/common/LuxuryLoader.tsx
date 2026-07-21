import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LuxuryLoaderProps {
  onComplete?: () => void;
}

export const LuxuryLoader: React.FC<LuxuryLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="luxury-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white selection:bg-none"
        >
          {/* Subtle Ambient Glow Radial */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,39,0.12)_0%,transparent_60%)] pointer-events-none" />

          {/* Animated Emblem */}
          <div className="relative mb-8 flex items-center justify-center">
            {/* Outer Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="w-28 h-28 rounded-full border border-[#C9A227]/30 border-t-[#C9A227] border-r-transparent shadow-[0_0_30px_rgba(201,162,39,0.2)]"
            />

            {/* Inner Gold Crest */}
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-3xl text-[#C9A227] filter drop-shadow-[0_0_10px_#C9A227]">✦</span>
            </div>
          </div>

          {/* Luxury Typography */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-4"
          >
            <h2 className="font-serif-luxury text-2xl md:text-3xl tracking-[0.25em] text-white uppercase font-light">
              BEST TAXI SERVICE
            </h2>
            <p className="text-[10px] md:text-xs tracking-[0.4em] text-[#C9A227] uppercase mt-2 font-medium">
              SWITZERLAND • VIP CHAUFFEUR
            </p>
          </motion.div>

          {/* Progress Indicator */}
          <div className="mt-10 w-48 relative">
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C9A227] to-[#F4D06F] shadow-[0_0_10px_#C9A227]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center mt-2 font-num text-[11px] text-white/50 tracking-wider">
              <span>EXECUTIVE PREPARATION</span>
              <span className="text-[#F4D06F] font-semibold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
