
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <a href="/" className="text-3xl font-bold text-white font-sans">
              IRide Mexico
            </a>
            <p className="text-gray-400 text-base">
              Mexico City's Best Scenic and Historic eBike Tours.
            </p>
            <div className="flex space-x-6">
              {/* Add social media icons here if needed */}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Tours</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#tours" className="text-base text-gray-400 hover:text-white">Reforma</a></li>
                  <li><a href="#tours" className="text-base text-gray-400 hover:text-white">Coyoacán</a></li>
                  <li><a href="#tours" className="text-base text-gray-400 hover:text-white">Centro Histórico</a></li>
                  <li><a href="#tours" className="text-base text-gray-400 hover:text-white">Polanco</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">FAQ</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Contact</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Privacy Policy</a></li>
                  <li><a href="/style-guide" className="text-base text-gray-400 hover:text-white">Style Guide</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
               <div>
                  <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact</h3>
                  <div className="mt-4 space-y-4 text-base text-gray-400">
                     <p>Phone: (55) 5555-4321</p>
                     <p>Email: contacto@iridemexico.com</p>
                     <p>Hours: 9am - 5pm Daily</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} IRide Mexico. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;