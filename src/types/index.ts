export type Language = 'en' | 'de';

export interface ServiceItem {
  id: string;
  icon: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  ctaText: Record<Language, string>;
  tag?: Record<Language, string>;
  features: Record<Language, string[]>;
}

export interface Vehicle {
  id: string;
  name: string;
  classType: Record<Language, string>;
  category: 'business' | 'first' | 'van';
  passengers: number;
  luggage: number;
  imageJpg: string;
  imageWebp: string;
  description: Record<Language, string>;
  amenities: Record<Language, string[]>;
  basePrice: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  role: Record<Language, string>;
  quote: Record<Language, string>;
  rating: number;
  route: string;
  date: string;
}

export interface OperatingHub {
  id: string;
  name: string;
  canton: string;
  statusText: Record<Language, string>;
  lat: number;
  lng: number;
  destinations: Record<Language, string[]>;
  is24_7: boolean;
}

export interface RoutePrice {
  route: string;
  taxiPrice: string;
  vanPrice: string;
  region: 'see-march' | 'knonaueramt' | 'zug-innerschweiz' | 'business';
}

export interface BookingFormData {
  pickup: string;
  destination: string;
  date: string;
  time: string;
  serviceType: string;
  vehicleType: string;
  passengers: number;
  fullName: string;
  phone: string;
  email: string;
  message: string;
}
