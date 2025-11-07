
import React, { useState, useEffect } from 'react';

const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (e.metaKey || e.ctrlKey) return;
  e.preventDefault();
  window.history.pushState({}, '', href);
  const navEvent = new Event('navigate');
  window.dispatchEvent(navEvent);
};

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


  const navLinks = [
    { name: 'Tours', href: '/#tours' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Why Us', href: '/#why-us' },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" onClick={(e) => handleNavigate(e, '/')} className="text-2xl font-bold text-brand-primary font-sans">
            IRide Mexico
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
            <a
              href="/#tours"
              className="ml-8 bg-brand-accent text-white font-bold py-2 px-6 rounded-full hover:bg-orange-600 transition-transform duration-300 transform hover:scale-105"
            >
              Book a Tour
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-dark focus:outline-none"
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
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm pb-4 w-full shadow-lg">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-brand-dark hover:text-brand-accent transition-colors text-lg"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#tours"
              className="mt-4 bg-brand-accent text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors"
            >
              Book a Tour
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
