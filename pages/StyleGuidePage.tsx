
import React from 'react';
import Button from '../components/Button';
import Icon from '../components/Icon';
import TourCard from '../components/TourCard';
// Fix: Import `IconName` to correctly type the list of icons and remove the dependency on `propTypes`.
import { Tour, IconName } from '../types';

const StyleGuidePage: React.FC = () => {

  const brandColors = [
    { name: 'Primary', hex: '#0D4C5C', tailwindClass: 'bg-brand-primary' },
    { name: 'Secondary', hex: '#F2A900', tailwindClass: 'bg-brand-secondary' },
    { name: 'Accent', hex: '#F24A09', tailwindClass: 'bg-brand-accent' },
    { name: 'Light', hex: '#F5F1E9', tailwindClass: 'bg-brand-light' },
    { name: 'Dark', hex: '#232323', tailwindClass: 'bg-brand-dark' },
  ];

  // Fix: Use the imported `IconName` type for `iconNames` array, ensuring type safety and resolving mapping errors.
  const iconNames: IconName[] = ['calendar', 'bike', 'mountain', 'check-circle', 'users', 'map', 'star', 'clock', 'map-pin', 'level'];

  const sampleTour: Tour = {
    title: 'Style Guide Sample Tour',
    location: 'Virtual Location',
    description: 'This is a sample description to showcase how the tour card component renders with content.',
    imageUrl: 'https://picsum.photos/seed/styleguide/800/600',
    category: 'Family-Friendly',
    duration: '5 Hours',
    difficulty: 'Moderate',
    spotsLeft: 2,
  };

  return (
    <div className="container mx-auto px-6 py-12 font-body">
      <h1 className="text-4xl font-extrabold border-b pb-4 mb-8 text-brand-dark">Style Guide</h1>

      {/* 1. Color Palette */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-brand-primary">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {brandColors.map(color => (
            <div key={color.name} className="shadow rounded-lg">
              <div className={`h-24 rounded-t-lg ${color.tailwindClass}`}></div>
              <div className="bg-white p-4 rounded-b-lg">
                <p className="font-bold">{color.name}</p>
                <p className="text-gray-600">{color.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Typography */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-brand-primary">Typography</h2>
        <div className="space-y-4 bg-white p-6 rounded-lg shadow font-sans">
          <h1 className="text-5xl font-extrabold text-brand-dark">Heading 1 (Poppins, extrabold)</h1>
          <h2 className="text-4xl font-bold text-brand-dark">Heading 2 (Poppins, bold)</h2>
          <h3 className="text-2xl font-semibold text-brand-dark">Heading 3 (Poppins, semibold)</h3>
          <h4 className="text-xl font-semibold text-brand-dark">Heading 4 (Poppins, semibold)</h4>
          <p className="text-base font-body text-brand-dark">
            This is a body paragraph (Lato, regular). It's used for longer-form text to ensure readability. 
            It includes <a href="#" className="text-brand-accent hover:underline">links</a> that stand out.
          </p>
        </div>
      </section>

      {/* 3. Buttons */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-brand-primary">Buttons</h2>
        <div className="bg-white p-6 rounded-lg shadow space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Component Variants</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Primary CTA</Button>
              <Button variant="secondary">Secondary CTA</Button>
              <Button variant="outline">Outline CTA</Button>
            </div>
          </div>
           <div>
            <h3 className="text-xl font-semibold mb-2">Filter Buttons</h3>
            <div className="flex flex-wrap items-center gap-4">
               <button className="px-4 py-2 rounded-full font-semibold transition-colors bg-brand-accent text-white">
                Active Filter
               </button>
               <button className="px-4 py-2 rounded-full font-semibold transition-colors bg-gray-200 text-gray-700">
                Inactive Filter
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Icons */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-brand-primary">Icons</h2>
        <div className="bg-white p-6 rounded-lg shadow flex flex-wrap items-center gap-6">
          {iconNames.map(name => (
            <div key={name} className="flex flex-col items-center gap-2 text-center">
              <Icon name={name} className="w-8 h-8 text-brand-accent" />
              <span className="text-xs text-gray-600">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Components */}
      <section>
        <h2 className="text-3xl font-bold mb-4 text-brand-primary">Components</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className='lg:col-span-1 md:col-span-2'>
                <h3 className="text-xl font-semibold mb-2">Tour Card</h3>
                <TourCard tour={sampleTour} />
            </div>
        </div>
      </section>
    </div>
  );
};

// Fix: Remove the unnecessary and incorrectly placed `Icon.propTypes` block.
// Type checking is already handled by TypeScript, and this block was causing compilation errors.

export default StyleGuidePage;