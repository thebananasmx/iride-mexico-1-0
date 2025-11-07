import React from 'react';
import { Tour } from '../types';

const TourCard: React.FC<{ tour: Tour }> = ({ tour }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
    <img src={tour.imageUrl} alt={`eBike tour in ${tour.location}`} className="w-full h-56 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <span className="inline-block bg-brand-secondary text-brand-primary text-xs font-semibold px-2 py-1 rounded-full uppercase mb-2 self-start">{tour.category}</span>
      <h3 className="text-2xl font-bold font-sans text-brand-primary">{tour.location}</h3>
      <p className="mt-2 text-gray-600 flex-grow">{tour.tagline}</p>
      <a href="#" className="inline-block mt-4 text-brand-accent font-bold hover:underline self-start">
        Explore Tour &rarr;
      </a>
    </div>
  </div>
);

export default TourCard;
