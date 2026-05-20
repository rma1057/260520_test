export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  tags: string[];
  image: string;
  stats?: { label: string; value: string }[];
  details?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  videoUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  description: string;
  readTime: string;
  image: string;
  date: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  billing: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}
