// Fix: Import `ReactNode` to provide a type for React components passed as props, resolving the 'Cannot find namespace JSX' error.
import type { ReactNode } from 'react';

export interface Tour {
  location: string;
  tagline: string;
  imageUrl: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface Step {
  // Fix: Changed type from `JSX.Element` to `ReactNode` to correctly type the icon component.
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Feature {
  // Fix: Changed type from `JSX.Element` to `ReactNode` to correctly type the icon component.
  icon: ReactNode;
  title: string;
  description: string;
}
