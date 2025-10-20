'use client';

import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const newProgress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

      setProgress(newProgress);
      setIsVisible(scrollTop > 100);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-4 right-4 w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-lg overflow-hidden z-50 transition-all duration-300"
    >
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          className="stroke-brand-navy/20"
          strokeWidth="8"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          className="stroke-brand-red"
          strokeWidth="8"
          fill="none"
          strokeDasharray="251.2"
          strokeDashoffset={251.2 * (1 - progress)}
          strokeLinecap="round"
        />
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center font-semibold text-sm bg-brand-gradient bg-clip-text text-transparent"
      >
        SCROLL
      </div>
    </div>
  );
};

export default ScrollIndicator;
