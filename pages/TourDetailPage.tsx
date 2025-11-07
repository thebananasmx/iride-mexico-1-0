import React from 'react';
import { TOURS } from '../constants';
import Icon from '../components/Icon';
import Button from '../components/Button';
import { slugify } from '../utils';

const TourDetailPage: React.FC = () => {
    const path = window.location.pathname;
    const slug = path.substring(path.lastIndexOf('/') + 1);
    const tour = TOURS.find(t => slugify(t.title) === slug);

    if (!tour) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h1 className="text-4xl font-bold font-sans text-brand-primary">Tour Not Found</h1>
                <p className="mt-4 text-lg text-gray-600">Sorry, we couldn't find the tour you're looking for.</p>
                <div className="mt-8">
                    <Button href="/" variant="primary">Back to Homepage</Button>
                </div>
            </div>
        );
    }
    
    const includedItems = [
        'Professional bilingual guide',
        'High-performance eBike',
        'Safety helmet',
        'Bottled water',
        'Local snacks',
        'All entrance fees',
    ];

    return (
        <div className="bg-white">
            <header className="py-12 bg-brand-light border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        {tour.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold font-sans text-brand-primary">{tour.title}</h1>
                    <div className="flex items-center text-lg text-gray-600 mt-2">
                      <Icon name="map-pin" className="w-5 h-5 mr-2 text-brand-accent" />
                      <span>{tour.location}</span>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                    {/* Left side - Gallery & Description */}
                    <div className="lg:col-span-2">
                        <div className="mb-8">
                            <img src={tour.imageUrl} alt={tour.title} className="w-full h-auto object-cover rounded-2xl shadow-lg mb-4" />
                            <div className="grid grid-cols-3 gap-4">
                                <img src={`${tour.imageUrl}?grayscale`} alt={`${tour.title} view 1`} className="w-full h-32 object-cover rounded-lg shadow-md" />
                                <img src={`${tour.imageUrl}?blur=1`} alt={`${tour.title} view 2`} className="w-full h-32 object-cover rounded-lg shadow-md" />
                                <img src={`${tour.imageUrl}?grayscale&blur=1`} alt={`${tour.title} view 3`} className="w-full h-32 object-cover rounded-lg shadow-md" />
                            </div>
                        </div>

                        <div className="mt-12">
                           <h2 className="text-3xl font-bold font-sans text-brand-primary border-b-2 border-gray-200 pb-2 mb-4">Tour Description</h2>
                           <p className="text-gray-700 leading-relaxed text-lg">{tour.description}</p>
                        </div>
                    </div>

                    {/* Right side - Booking & Info */}
                    <div className="lg:col-span-1 mt-12 lg:mt-0">
                        <div className="sticky top-28 bg-brand-light p-8 rounded-2xl shadow-lg border border-gray-200">
                            <h3 className="text-2xl font-bold font-sans text-brand-primary mb-6">Tour Details</h3>
                            <div className="space-y-4 text-gray-700">
                                <div className="flex items-start">
                                    <Icon name="clock" className="w-6 h-6 mr-3 text-brand-accent flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold">Duration</p>
                                        <p>{tour.duration}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Icon name="level" className="w-6 h-6 mr-3 text-brand-accent flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold">Difficulty</p>
                                        <p>{tour.difficulty}</p>
                                    </div>
                                </div>
                                {tour.spotsLeft && (
                                     <div className="flex items-start">
                                        <Icon name="users" className="w-6 h-6 mr-3 text-brand-accent flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-bold">Spots Left</p>
                                            <p>{tour.spotsLeft}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            <hr className="my-6 border-gray-300"/>

                            <div>
                               <h4 className="text-lg font-bold font-sans text-brand-primary mb-3">What's Included</h4>
                               <ul className="space-y-2">
                                  {includedItems.map(item => (
                                     <li key={item} className="flex items-start">
                                        <Icon name="check-circle" className="w-5 h-5 mr-2 mt-1 text-green-600 flex-shrink-0" />
                                        <span className="text-gray-600">{item}</span>
                                     </li>
                                  ))}
                               </ul>
                            </div>
                            
                            <div className="mt-8">
                                <Button href="#" variant="primary" className="w-full text-center">Book This Tour</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourDetailPage;
