
export type TourCategory = 'Urban Sightseeing' | 'Adventure Mountain' | 'Family-Friendly';
export type IconName = 'calendar' | 'bike' | 'mountain' | 'check-circle' | 'users' | 'map' | 'star' | 'clock' | 'map-pin' | 'level';

export interface Tour {
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  category: TourCategory;
  duration: string;
  difficulty: string;
  spotsLeft?: number;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface Step {
  icon: IconName;
  title: string;
  description: string;
}

export interface Feature {
  icon: IconName;
  title: string;
  description: string;
}