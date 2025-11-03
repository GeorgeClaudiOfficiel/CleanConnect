import type { Service, Testimonial } from './types';
import { LaundryIcon, HouseCleaningIcon, FumigationIcon, SofaWashIcon, CarpetCleaningIcon, MoversIcon } from '../components/icons/icons';

export const SERVICES: Service[] = [
  {
    id: 'laundry',
    title: 'Laundry (Clothes)',
    description: 'Fresh, clean, and perfectly folded. We handle your laundry with the utmost care.',
    icon: LaundryIcon,
  },
  {
    id: 'house_cleaning',
    title: 'House Cleaning',
    description: 'A sparkling clean home is just a click away. Our professionals leave no corner untouched.',
    icon: HouseCleaningIcon,
  },
  {
    id: 'fumigation',
    title: 'Fumigation Services',
    description: 'Protect your home from pests. Safe and effective fumigation for a healthy living space.',
    icon: FumigationIcon,
  },
  {
    id: 'sofa_wash',
    title: 'Sofa Wash',
    description: 'Revive your upholstery. We deep clean your sofas, removing stains and odors.',
    icon: SofaWashIcon,
  },
  {
    id: 'carpet_cleaning',
    title: 'Carpet Cleaning',
    description: 'Bring your carpets back to life. Our deep cleaning methods remove dirt and allergens.',
    icon: CarpetCleaningIcon,
  },
  {
    id: 'movers',
    title: 'Movers',
    description: 'Moving soon? Our reliable team will help you relocate smoothly and stress-free.',
    icon: MoversIcon,
  },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        name: 'Jane K.',
        title: 'Homeowner, Kilimani',
        quote: 'CleanConnect has been a lifesaver! The booking process is so simple, and the cleaners are always professional and thorough. My home has never looked better.',
        avatarUrl: 'https://picsum.photos/100/100?random=1',
    },
    {
        name: 'David O.',
        title: 'Airbnb Host',
        quote: 'As an Airbnb host, quick turnarounds and reliability are key. CleanConnect delivers every single time. My guests always compliment the cleanliness of the apartment.',
        avatarUrl: 'https://picsum.photos/100/100?random=2',
    },
    {
        name: 'Amina H.',
        title: 'Small Business Owner',
        quote: 'We use CleanConnect for our small office, and the flexibility is fantastic. It\'s affordable, and the quality of service is consistently high. Highly recommended!',
        avatarUrl: 'https://picsum.photos/100/100?random=3',
    }
];
