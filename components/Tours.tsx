
import React, { useState } from 'react';
import { TOURS, tourCategories } from '../constants';
import { TourCategory } from '../types';
import TourCard from './TourCard';

const Tours: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TourCategory | 'All'>('All');

  const filteredTours = TOURS.filter(tour =>
    selectedCategory === 'All' || tour.category === selectedCategory
  );

  return (
    <section id="tours" className="py-16 bg-brand-light">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary text-center">Our Tours</h2>
        <div className="flex justify-center flex-wrap gap-4 my-8">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-6 py-2 font-bold rounded-full transition-colors ${selectedCategory === 'All' ? 'bg-brand-accent text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            All Tours
          </button>
          {tourCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 font-bold rounded-full transition-colors ${selectedCategory === category ? 'bg-brand-accent text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map(tour => (
            <TourCard key={tour.title} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;