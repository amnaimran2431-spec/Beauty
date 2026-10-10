export interface ServiceItem {
  id: string;
  name: string;
  category: 'all' | 'hair' | 'skincare' | 'makeup' | 'nails' | 'bridal';
  description: string;
  duration: string;
  priceEstimate?: string;
  image: string;
  popular?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  role?: string;
  service: string;
  rating: number;
  quote: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bridal' | 'hair' | 'makeup' | 'skincare' | 'salon' | 'nails';
  image: string;
  description: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email?: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
