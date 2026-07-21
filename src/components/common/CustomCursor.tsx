'use client';

import { useEffect, useState } from 'react'; // قمنا بحذف React من هنا
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // إعدادات حركة انسيابية ناعمة جداً
  const springConfig = { damping: 25, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); 
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);

    const interactiveElements = document.querySelectorAll('a, button, .clickable');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseOver);
      el.addEventListener('mouseleave', handleMouseOut);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseOver);
        el.removeEventListener('mouseleave', handleMouseOut);
      });
    };
  }, [cursorX, cursorY]);

  const colors = {
    default: 'rgba(255, 255, 255, 0.2)', 
    hover: '#C9A227', 
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
      style={{ translateX: cursorXSpring, translateY: cursorYSpring }}
    >
      <motion.div
        animate={{ borderColor: isHovering ? colors.hover : colors.default }}
        transition={{ duration: 0.3 }}
        className="w-8 h-8 rounded-full border border-white/20"
      />

      <motion.div
        animate={{ backgroundColor: isHovering ? colors.hover : colors.default }}
        transition={{ duration: 0.3 }}
        className="absolute w-1.5 h-1.5 rounded-full bg-white/20"
      />
    </motion.div>
  );
};