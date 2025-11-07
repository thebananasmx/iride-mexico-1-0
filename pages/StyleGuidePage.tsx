
import React from 'react';
import Button from '../components/Button';
import Icon from '../components/Icon';
import TourCard from '../components/TourCard';
import { TestimonialCard } from '../components/Testimonials';
import { TOURS, TESTIMONIALS } from '../constants';
import { IconName } from '../types';

const StyleGuidePage: React.FC = () => {
  const colors = [
    { name: 'Primary', hex: '#232323', className: 'bg-brand-primary' },
    { name: 'Secondary', hex: '#F2A900', className: 'bg-brand-secondary' },
    { name: 'Accent', hex: '#F24A09', className: 'bg-brand-accent' },
    { name: 'Light', hex: '#F5F1E9', className: 'bg-brand-light' },
    { name: 'Dark', hex: '#232323', className: 'bg-brand-dark' },
  ];

  const iconNames: IconName[] = ['calendar', 'bike', 'mountain', 'check-circle', 'users', 'map', 'star', 'clock', 'map-pin', 'level'];

  return (
    <div className="bg-white">
      <div className="container py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold font-sans text-brand-primary">Style Guide</h1>
          <p className="mt-4 text-lg text-gray-600">A visual reference for the UI components of Ride Mexico.</p>
        </header>

        {/* Colors Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-sans text-brand-primary border-b-2 border-gray-200 pb-2 mb-8">Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {colors.map(color => (
              <div key={color.name} className="text-center">
                <div className={`w-full h-32 rounded-lg shadow-md ${color.className} ${color.name === 'Light' ? 'border border-gray-200' : ''}`}></div>
                <h3 className="mt-4 text-lg font-semibold">{color.name}</h3>
                <p className="text-gray-500 font-mono">{color.hex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-sans text-brand-primary border-b-2 border-gray-200 pb-2 mb-8">Typography</h2>
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-500 font-mono mb-1">Heading 1 (Poppins, font-sans, extrabold)</p>
              <h1 className="text-5xl font-extrabold font-sans text-brand-dark">The quick brown fox jumps over the lazy dog.</h1>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-mono mb-1">Heading 2 (Poppins, font-sans, bold)</p>
              <h2 className="text-4xl font-bold font-sans text-brand-primary">The quick brown fox jumps over the lazy dog.</h2>
            </div>
             <div>
              <p className="text-sm text-gray-500 font-mono mb-1">Heading 3 (Poppins, font-sans, bold)</p>
              <h3 className="text-2xl font-bold font-sans text-brand-primary">The quick brown fox jumps over the lazy dog.</h3>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-mono mb-1">Body Text (Lato, font-body)</p>
              <p className="text-lg text-brand-dark font-body">
                This is the body font, perfect for longer paragraphs of text. It's designed for readability and a clean, modern look. Our guided eBike tours are perfect for all skill levels, allowing you to experience the vibrant culture and history of CDMX like never before.
              </p>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-sans text-brand-primary border-b-2 border-gray-200 pb-2 mb-8">Buttons</h2>
          <div className="flex flex-wrap items-center gap-6">
            <Button href="#" variant="primary">Primary Button</Button>
            <Button href="#" variant="secondary">Secondary Button</Button>
            <Button href="#" variant="outline">Outline Button</Button>
          </div>
        </section>

        {/* Icons Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-sans text-brand-primary border-b-2 border-gray-200 pb-2 mb-8">Icons</h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6">
            {iconNames.map(name => (
              <div key={name} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 p-4 bg-brand-light rounded-lg flex items-center justify-center">
                   <Icon name={name} className="w-8 h-8 text-brand-primary" />
                </div>
                <p className="mt-2 text-xs text-gray-600 font-mono">{name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cards Section */}
        <section>
          <h2 className="text-3xl font-bold font-sans text-brand-primary border-b-2 border-gray-200 pb-2 mb-8">Cards</h2>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">Tour Card</h3>
              <TourCard tour={TOURS[0]} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">Testimonial Card</h3>
              <TestimonialCard testimonial={TESTIMONIALS[0]} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StyleGuidePage;