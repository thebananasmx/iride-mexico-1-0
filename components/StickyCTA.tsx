
import React, { useState, useEffect } from 'react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 p-4 md:hidden transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <a
        href="#"
        className="w-full flex items-center justify-center px-5 py-4 border border-transparent text-lg font-bold rounded-full shadow-lg text-brand-primary bg-brand-secondary hover:bg-yellow-400"
      >
        Book Your Tour Now
      </a>
    </div>
  );
};

export default StickyCTA;
