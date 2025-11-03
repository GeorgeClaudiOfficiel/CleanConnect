
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  avatarUrl: string;
}
