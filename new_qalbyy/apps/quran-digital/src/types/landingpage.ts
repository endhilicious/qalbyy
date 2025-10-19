// TypeScript types for landing page components
// Based on data structures from Annisa Travel and Pakem Tours references

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  features: string[];
  isPopular?: boolean;
}

export interface Package {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: {
    from: number;
    currency: string;
  };
  features: string[];
  itinerary: ItineraryDay[];
  isSpecial?: boolean;
  specialBadge?: string;
  image: string;
  category: 'umroh' | 'haji';
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  location: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  avatar?: string;
  package?: string;
  date: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  officeHours: string;
}

export interface OfficeLocation {
  id: string;
  city: string;
  address: string;
  phone: string;
  isMain?: boolean;
}

export interface Statistic {
  id: string;
  number: string;
  label: string;
  suffix?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Certification {
  id: string;
  name: string;
  description: string;
  logo: string;
  number?: string;
}

export interface HeroSectionData {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaSecondary?: string;
  backgroundImage: string;
  stats: Statistic[];
}
