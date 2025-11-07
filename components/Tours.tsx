import React from 'react';
import { Tour } from '../types';
import { TOURS } from '../constants';

const TourCard: React.FC<{ tour: Tour }> = ({ tour }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
    <img src={tour.imageUrl} alt={`eBike tour in ${tour.location}`} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold font-sans text-brand-primary">{tour.location}</h3>
      <p className="mt-2 text-gray-600">{tour.tagline}</p>
      <a href="#" className="inline-block mt-4 text-brand-accent font-bold hover:underline">
        Explore Tour &rarr;
      </a>
    </div>
  </div>
);

const Tours: React.FC = () => {
  return (
    <section id="tours" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary">Find Your Perfect Ride in CDMX</h2>
          <p className="mt-4 text-lg text-gray-600">We offer curated eBike tours in Mexico City's most iconic neighborhoods.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURS.map((tour) => (
            <TourCard key={tour.location} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
