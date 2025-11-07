import { Tour, Testimonial } from './types';

export const TOURS: Tour[] = [
  {
    location: 'Reforma & Chapultepec',
    tagline: 'Ride down the grand avenue and explore the city\'s largest park.',
    imageUrl: 'https://picsum.photos/seed/reforma/800/600',
  },
  {
    location: 'Coyoacán',
    tagline: 'Discover the colorful, bohemian heart of Mexico City.',
    imageUrl: 'https://picsum.photos/seed/coyoacan/800/600',
  },
  {
    location: 'Centro Histórico',
    tagline: 'Explore ancient ruins, grand palaces, and vibrant markets.',
    imageUrl: 'https://picsum.photos/seed/zocalo/800/600',
  },
  {
    location: 'Polanco',
    tagline: 'Cruise through upscale boutiques and world-class museums.',
    imageUrl: 'https://picsum.photos/seed/polanco/800/600',
  },
  {
    location: 'La Condesa & Roma',
    tagline: 'Experience the trendy, art-deco neighborhoods of CDMX.',
    imageUrl: 'https://picsum.photos/seed/condesa/800/600',
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
