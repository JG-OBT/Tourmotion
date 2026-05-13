export interface Service {
  id: string;
  title: string;
  price: string;
  description: string;
  icon?: string;
  image?: string;
  fullDescription?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Repairs' | 'Maintenance' | 'Advice';
  author: string;
  date: string;
  excerpt: string;
  content: {
    heading: string;
    text: string | string[];
    isQuote?: boolean;
    isList?: boolean;
    list?: string[];
  }[];
  image: string;
  summary: string;
}

export interface Certification {
  name: string;
  url: string;
  logo: string | null;
}
