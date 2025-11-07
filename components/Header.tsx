import React, { useState, useEffect } from 'react';
import Button from './Button';
import { handleNavigate } from '../utils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);


  const navLinks = [
    { name: 'Tours', href: '/#tours' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Why Us', href: '/#why-us' },
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled && !isMenuOpen ? 'shadow-md' : ''} ${isMenuOpen ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="container">
          <div className="flex items-center justify-between h-20">
            <a href="/" onClick={(e) => handleNavigate(e, '/')} className={`relative z-[51] text-2xl font-bold font-sans transition-colors duration-300 ${isMenuOpen ? 'text-white' : 'text-brand-primary'}`}>
              Ride Mexico
            </a>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-brand-dark hover:text-brand-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center">
              <Button href="/#tours" variant="primary" className="ml-8 !py-2 !px-6 !text-base">
                Book a Tour
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`relative z-[51] focus:outline-none transition-colors duration-300 ${isMenuOpen ? 'text-white' : 'text-brand-dark'}`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Off-canvas Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-brand-primary/95 backdrop-blur-sm transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-brand-secondary transition-colors text-3xl font-bold font-sans"
              >
                {link.name}
              </a>
            ))}
            <Button
              href="/#tours"
              variant="primary"
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 !text-xl"
            >
              Book a Tour
            </Button>
          </nav>
      </div>
    </>
  );
};

export default Header;