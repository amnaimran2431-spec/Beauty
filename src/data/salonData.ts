import { ServiceItem, TestimonialItem, GalleryItem } from '../types';

export const SALON_INFO = {
  name: 'Rukash Beauty Salon',
  tagline: 'Refined Beauty & Bridal Elegance',
  phone: '0301 1522518',
  phoneInternational: '+923011522518',
  phoneFormatted: '0301 1522518',
  address: '98, B/1 MM Alam Rd, Block B1, Block B 1 Gulberg III, Lahore, Pakistan',
  mapsUrl: 'https://maps.app.goo.gl/RKkeNUUdmJiQhRj68',
  whatsappUrl: 'https://wa.me/923011522518?text=Hello%20Rukash%20Beauty%20Salon,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.',
  hours: 'Monday – Sunday: 11:00 AM – 8:00 PM',
  city: 'Lahore',
  area: 'Gulberg III, MM Alam Road',
};

// Generated visual assets
export const IMAGES = {
  hero: '/src/assets/images/hero_beauty_portrait_1791370357313.jpg',
  about: '/src/assets/images/about_salon_experience_1791370377242.jpg',
  bridal: '/src/assets/images/bridal_couture_beauty_1791370391028.jpg',
  skincare: '/src/assets/images/skincare_facial_glow_1791370406206.jpg',
  hair: '/src/assets/images/editorial_hair_styling_1791370420199.jpg',
  // Curated editorial images for additional services & gallery
  makeupParty: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
  manicure: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
  hairColor: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
  spaDetail: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
  hennaBridal: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'hair-styling',
    name: 'Hair Styling & Blowouts',
    category: 'hair',
    description: 'Signature blowouts, soft waves, voluminous curls, and bespoke event styling tailored to your face structure.',
    duration: '45 - 60 mins',
    priceEstimate: 'From PKR 2,500',
    image: IMAGES.hair,
    popular: true,
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup & Styling',
    category: 'bridal',
    description: 'Regal Barat & Walima bridal transformations, flawless HD airbrush foundation, luxury lashes, and traditional dupatta setting.',
    duration: '180 mins',
    priceEstimate: 'Consultation upon request',
    image: IMAGES.bridal,
    popular: true,
  },
  {
    id: 'facial-skincare',
    name: 'Facial & Skincare Treatments',
    category: 'skincare',
    description: 'Deep hydration facials, dermaplaning, brightening skin therapies, and relaxing lymphatic facial massages.',
    duration: '60 - 90 mins',
    priceEstimate: 'From PKR 4,500',
    image: IMAGES.skincare,
    popular: true,
  },
  {
    id: 'party-makeup',
    name: 'Party & Evening Glam Makeup',
    category: 'makeup',
    description: 'Sophisticated event makeup designed to highlight your natural bone structure with radiant, long-lasting finishes.',
    duration: '60 - 75 mins',
    priceEstimate: 'From PKR 6,000',
    image: IMAGES.makeupParty,
    popular: true,
  },
  {
    id: 'hair-color-treatments',
    name: 'Hair Color & Balayage',
    category: 'hair',
    description: 'Multi-dimensional balayage, root touch-ups, rich glosses, and nourishing bond-repairing color treatments.',
    duration: '120 - 180 mins',
    priceEstimate: 'From PKR 8,000',
    image: IMAGES.hairColor,
  },
  {
    id: 'hair-care-keratin',
    name: 'Hair Care & Keratin Therapy',
    category: 'hair',
    description: 'Intense moisture masks, scalp detox therapies, keratin smoothing, and revitalizing protein infusion.',
    duration: '90 - 150 mins',
    priceEstimate: 'From PKR 7,500',
    image: IMAGES.hair,
  },
  {
    id: 'manicure-pedicure',
    name: 'Deluxe Manicure & Pedicure',
    category: 'nails',
    description: 'Pampering hand and foot spa rituals, gentle exfoliation, cuticle care, nail shaping, and long-lasting gel polish.',
    duration: '60 - 75 mins',
    priceEstimate: 'From PKR 3,000',
    image: IMAGES.manicure,
  },
  {
    id: 'pre-bridal-care',
    name: 'Pre-Bridal Glow Packages',
    category: 'bridal',
    description: 'Curated 2-to-4 week skincare prep, full body polishing, herbal ubtan therapy, and hair restoration before the big day.',
    duration: 'Multi-session',
    priceEstimate: 'Custom Package',
    image: IMAGES.spaDetail,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Editorial Bridal Splendor',
    category: 'bridal',
    image: IMAGES.bridal,
    description: 'Signature royal bride with traditional jewelry and flawless warm glow.',
  },
  {
    id: 'gal-2',
    title: 'Luminous Signature Glow',
    category: 'skincare',
    image: IMAGES.hero,
    description: 'Soft editorial beauty finish with dewy skin and natural soft eye makeup.',
  },
  {
    id: 'gal-3',
    title: 'Voluminous Blowout & Curls',
    category: 'hair',
    image: IMAGES.hair,
    description: 'Sleek luxury blowout with rich movement and mirror-like shine.',
  },
  {
    id: 'gal-4',
    title: 'Gulberg Sanctuary Interior',
    category: 'salon',
    image: IMAGES.about,
    description: 'Warm ambient lighting and serene styling stations on MM Alam Road.',
  },
  {
    id: 'gal-5',
    title: 'Hydra-Infusion Facial Therapy',
    category: 'skincare',
    image: IMAGES.skincare,
    description: 'Deep hydration and skin revitalizing ritual for lasting radiance.',
  },
  {
    id: 'gal-6',
    title: 'Modern Evening Glam',
    category: 'makeup',
    image: IMAGES.makeupParty,
    description: 'Sculpted cheekbones, soft mauve lips, and camera-ready illumination.',
  },
  {
    id: 'gal-7',
    title: 'Artisanal Nail Spa Ritual',
    category: 'nails',
    image: IMAGES.manicure,
    description: 'Precision cuticle grooming and refined soft rose gel manicure.',
  },
  {
    id: 'gal-8',
    title: 'Dimensional Caramel Balayage',
    category: 'hair',
    image: IMAGES.hairColor,
    description: 'Seamless hand-painted highlights blended on natural dark hair.',
  },
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Fatima Z.',
    city: 'Gulberg, Lahore',
    service: 'Bridal Makeover & Styling',
    rating: 5,
    quote: 'The team at Rukash made my Barat day utterly stress-free. My makeup stayed intact and radiant for over 12 hours without creasing. Everyone complimented how natural yet royal the look felt!',
    date: 'Last month',
  },
  {
    id: 'test-2',
    name: 'Ayesha M.',
    city: 'DHA, Lahore',
    service: 'Signature Facial & Hair Blowout',
    rating: 5,
    quote: 'From the moment you step in, the atmosphere is quiet, welcoming, and impeccably clean. The hydrating facial took away months of tiredness, and my blowout lasted 3 days.',
    date: '3 weeks ago',
  },
  {
    id: 'test-3',
    name: 'Zainab R.',
    city: 'Model Town, Lahore',
    service: 'Balayage & Hair Treatment',
    rating: 5,
    quote: 'Finding someone who understands dark hair without causing brassiness is rare in Lahore. Rukash exceeded my expectations—my hair feels softer than before the color!',
    date: '2 months ago',
  },
  {
    id: 'test-4',
    name: 'Hira K.',
    city: 'Gulberg, Lahore',
    service: 'Party Makeup & Updo',
    rating: 5,
    quote: 'Attended a family wedding and wanted refined, modern makeup instead of heavy layers. Rukash delivered pure elegance. I will be recommending them to all my friends.',
    date: '2 weeks ago',
  },
];

export const TRUST_INDICATORS = [
  {
    id: 'trust-1',
    title: 'Premium Beauty Care',
    description: 'Personalized services with meticulous attention to detail and hygiene.',
  },
  {
    id: 'trust-2',
    title: 'Experienced Specialists',
    description: 'Skilled beauty artists focused on modern techniques and individual features.',
  },
  {
    id: 'trust-3',
    title: 'Bridal & Event Beauty',
    description: 'Complete beauty preparation tailored for your most cherished occasions.',
  },
  {
    id: 'trust-4',
    title: 'Located in Gulberg, Lahore',
    description: 'Conveniently situated on MM Alam Road with dedicated customer parking.',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Personalized Service',
    description: 'Every treatment and style is custom-tailored to your skin tone, hair texture, and personal comfort.',
  },
  {
    title: 'Professional Beauty Care',
    description: 'Our artists use certified international products, sterile tools, and modern styling techniques.',
  },
  {
    title: 'Relaxing Environment',
    description: 'A serene, peaceful haven crafted away from the city hustle to let you unwind and rejuvenate.',
  },
  {
    title: 'Complete Beauty Solutions',
    description: 'Comprehensive hair, skincare, bridal, makeup, and nail therapies all under one roof on MM Alam Road.',
  },
];
