import { Tour, Testimonial, TourCategory } from './types';

export const tourCategories: TourCategory[] = ['Urban Sightseeing', 'Adventure Mountain', 'Family-Friendly'];

export const TOURS: Tour[] = [
  {
    title: 'Pyramids of Teotihuacán Sunrise Ride',
    location: 'Mexico City',
    description: "Experience the ancient city of Teotihuacán like never before. Ride through the Avenue of the Dead and see the Pyramids of the Sun and Moon glow at sunrise.",
    imageUrl: 'https://images.unsplash.com/photo-1594916298174-29837a23c896?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'Urban Sightseeing',
    duration: '6 Hours',
    difficulty: 'Easy',
    spotsLeft: 5,
  },
  {
    title: 'Cancun Jungle & Cenote Adventure',
    location: 'Cancun',
    description: "Escape the beaches and dive into the Mayan jungle. This off-road tour takes you through lush trails to a breathtaking hidden cenote where you can swim.",
    imageUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80',
    category: 'Adventure Mountain',
    duration: '4 Hours',
    difficulty: 'Moderate',
    spotsLeft: 3,
  },
  {
    title: 'Oaxaca Culinary Colors Tour',
    location: 'Oaxaca',
    description: "A feast for the senses! Cycle through Oaxaca's vibrant streets, stopping at local markets to sample traditional foods like mole, mezcal, and chapulines.",
    imageUrl: 'https://images.unsplash.com/photo-1512453979791-5ea275a58c35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'Family-Friendly',
    duration: '3 Hours',
    difficulty: 'Easy',
  },
   {
    title: 'Historic Center & Grand Palaces',
    location: 'Mexico City',
    description: 'Explore ancient ruins, grand palaces, and vibrant markets in the heart of the city, a UNESCO World Heritage site.',
    imageUrl: 'https://images.unsplash.com/photo-1614632537190-23e414677617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'Urban Sightseeing',
    duration: '4 Hours',
    difficulty: 'Easy',
    spotsLeft: 8,
  },
  {
    title: 'Art Deco & Park Ride in Condesa',
    location: 'Mexico City',
    description: 'Experience the trendy, art-deco neighborhoods of La Condesa & Roma, stopping in the famous Parque México.',
    imageUrl: 'https://images.unsplash.com/photo-1581462991851-3e813a8a356a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    category: 'Family-Friendly',
    duration: '3 Hours',
    difficulty: 'Easy',
  },
   {
    title: 'Xochimilco Floating Gardens Tour',
    location: 'Mexico City',
    description: 'A truly unique experience. Ride to the ancient canals of Xochimilco and enjoy a trip on a colorful trajinera boat.',
    imageUrl: 'https://images.unsplash.com/photo-1599781112211-1a3b59306013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
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