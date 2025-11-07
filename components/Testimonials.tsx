import React from 'react';
import { Testimonial } from '../types';
import { TESTIMONIALS } from '../constants';
import Icon from './Icon';

export const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Icon key={i} name="star" className="text-brand-secondary w-5 h-5" />
      ))}
    </div>
    <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
    <div>
      <p className="font-bold text-brand-primary">{testimonial.author}</p>
      <p className="text-sm text-gray-500">{testimonial.location}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-brand-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white">What Our Riders Are Saying</h2>
          <p className="mt-4 text-lg text-gray-300">Real stories from our happy customers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;