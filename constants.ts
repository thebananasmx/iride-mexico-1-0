import { Tour, Testimonial, TourCategory } from './types';

export const tourCategories: TourCategory[] = ['Urban Sightseeing', 'Adventure Mountain', 'Family-Friendly'];

export const TOURS: Tour[] = [
  {
    title: 'Pyramids of Teotihuacán Sunrise Ride',
    location: 'Mexico City',
    description: "Experience the ancient city of Teotihuacán like never before. Ride through the Avenue of the Dead and see the Pyramids of the Sun and Moon glow at sunrise.",
    imageUrl: 'https://picsum.photos/seed/teotihuacan/800/600',
    category: 'Urban Sightseeing',
    duration: '6 Hours',
    difficulty: 'Easy',
    spotsLeft: 5,
  },
  {
    title: 'Cancun Jungle & Cenote Adventure',
    location: 'Cancun',
    description: "Escape the beaches and dive into the Mayan jungle. This off-road tour takes you through lush trails to a breathtaking hidden cenote where you can swim.",
    imageUrl: 'https://picsum.photos/seed/cenote/800/600',
    category: 'Adventure Mountain',
    duration: '4 Hours',
    difficulty: 'Moderate',
    spotsLeft: 3,
  },
  {
    title: 'Oaxaca Culinary Colors Tour',
    location: 'Oaxaca',
    description: "A feast for the senses! Cycle through Oaxaca's vibrant streets, stopping at local markets to sample traditional foods like mole, mezcal, and chapulines.",
    imageUrl: 'https://picsum.photos/seed/oaxaca-food/800/600',
    category: 'Family-Friendly',
    duration: '3 Hours',
    difficulty: 'Easy',
  },
   {
    title: 'Historic Center & Grand Palaces',
    location: 'Mexico City',
    description: 'Explore ancient ruins, grand palaces, and vibrant markets in the heart of the city, a UNESCO World Heritage site.',
    imageUrl: 'https://picsum.photos/seed/cdmx-centro/800/600',
    category: 'Urban Sightseeing',
    duration: '4 Hours',
    difficulty: 'Easy',
    spotsLeft: 8,
  },
  {
    title: 'Art Deco & Park Ride in Condesa',
    location: 'Mexico City',
    description: 'Experience the trendy, art-deco neighborhoods of La Condesa & Roma, stopping in the famous Parque México.',
    imageUrl: 'https://picsum.photos/seed/condesa/800/600',
    category: 'Family-Friendly',
    duration: '3 Hours',
    difficulty: 'Easy',
  },
   {
    title: 'Xochimilco Floating Gardens Tour',
    location: 'Mexico City',
    description: 'A truly unique experience. Ride to the ancient canals of Xochimilco and enjoy a trip on a colorful trajinera boat.',
    imageUrl: 'https://picsum.photos/seed/xochimilco/800/600',
    category: 'Adventure Mountain',
    duration: '5 Hours',
    difficulty: 'Moderate',
    spotsLeft: 4,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'The best way to see Mexico City! The eBikes made it so easy to cover so much ground. Our guide was amazing and showed us the best taco spots!',
    author: 'Emily S.',
    location: 'Tourist from California',
  },
  {
    quote: 'I live here and the Centro Histórico tour showed me parts of my own city I had never appreciated before. A fantastic Sunday morning activity.',
    author: 'Javier G.',
    location: 'Mexico City Resident',
  },
  {
    quote: 'Our family loved the Coyoacán tour. It was safe, fun, and so beautiful. Seeing Frida Kahlo\'s neighborhood by bike was truly special.',
    author: 'The Chen Family',
    location: 'Visitors from Canada',
  },
];