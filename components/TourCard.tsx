import React from 'react';
import { Tour } from '../types';
import Icon from './Icon';

const TourCard: React.FC<{ tour: Tour }> = ({ tour }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full border border-gray-100">
    <div className="relative">
      <img src={tour.imageUrl} alt={`eBike tour of ${tour.title}`} className="w-full h-56 object-cover" />
      {tour.spotsLeft && tour.spotsLeft <= 5 && (
        <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
          Only {tour.spotsLeft} spots left!
        </div>
      )}
    </div>
    
    <div className="p-6 flex flex-col flex-grow">
      <div>
        <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full uppercase mb-3">
          {tour.category}
        </span>
        <h3 className="text-xl font-bold font-sans text-brand-dark mb-1">{tour.title}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Icon name="map-pin" className="w-4 h-4 mr-1.5" />
          <span>{tour.location}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">{tour.description}</p>
      </div>
      
      <div className="mt-auto pt-4">
         <hr className="my-4 border-gray-200" />
         <div className="flex justify-between items-center text-sm text-gray-700">
            <div className="flex items-center">
              <Icon name="clock" className="w-5 h-5 mr-2 text-brand-accent" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center">
              <Icon name="level" className="w-5 h-5 mr-2 text-brand-accent" />
              <span>{tour.difficulty}</span>
            </div>
         </div>
      </div>
    </div>
  </div>
);

export default TourCard;