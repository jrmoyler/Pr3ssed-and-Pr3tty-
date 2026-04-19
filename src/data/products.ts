export type Vibe = 'Soft Pr3tty' | 'Bold Pr3tty' | 'Wild Pr3tty' | 'Shimmer Pr3tty' | 'Floral Pr3tty' | 'Statement Pr3tty' | 'Core Pr3tty';
export type Collection = 'The Pretty Vault' | 'Quick Slay';

export interface Product {
  id: string;
  name: string;
  collection: Collection;
  vibe: Vibe;
  price: number;
  description: string;
  image: string;
  typeNote?: string;
}

export const products: Product[] = [
  {
    id: 'turq-tease',
    name: 'Turq Tease',
    collection: 'Quick Slay',
    vibe: 'Wild Pr3tty',
    price: 24.99,
    description: 'Bold turquoise energy with fierce printed accents.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'class-act',
    name: 'Class Act',
    collection: 'The Pretty Vault',
    vibe: 'Bold Pr3tty',
    price: 24.99,
    description: 'A polished nude-and-black look with playful dotted detail.',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pr3tty-pressure',
    name: 'Pr3tty Pressure',
    collection: 'The Pretty Vault',
    vibe: 'Bold Pr3tty',
    price: 24.99,
    description: 'Hot pink drama with bold detail and major attitude.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'lilac-mood',
    name: 'Lilac Mood',
    collection: 'Quick Slay',
    vibe: 'Soft Pr3tty',
    price: 24.99,
    description: 'Soft matte lavender for an easy polished look.',
    image: 'https://images.unsplash.com/photo-1595868426023-e18e11a3e810?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mint-to-be',
    name: 'Mint to Be',
    collection: 'Quick Slay',
    vibe: 'Soft Pr3tty',
    price: 24.99,
    description: 'Fresh mint tones with sweet playful detail.',
    image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'blue-baby',
    name: 'Blue Baby',
    collection: 'Quick Slay',
    vibe: 'Soft Pr3tty',
    price: 24.99,
    description: 'Soft baby blue with clean-girl energy.',
    image: 'https://images.unsplash.com/photo-1516975080661-422fc2bc929c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'after-dark-blue',
    name: 'After Dark Blue',
    collection: 'The Pretty Vault',
    vibe: 'Wild Pr3tty',
    price: 24.99,
    description: 'Deep blue energy with fierce accent detail.',
    image: 'https://images.unsplash.com/photo-1595868426023-e18e11a3e810?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'danger-doll',
    name: 'Danger Doll',
    collection: 'The Pretty Vault',
    vibe: 'Wild Pr3tty',
    price: 24.99,
    description: 'A red-hot statement set made to turn heads.',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'frozen-fantasy',
    name: 'Frozen Fantasy',
    collection: 'The Pretty Vault',
    vibe: 'Shimmer Pr3tty',
    price: 24.99,
    description: 'Dreamy shimmer with icy luxe energy.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'island-baddie',
    name: 'Island Baddie',
    collection: 'Quick Slay',
    vibe: 'Floral Pr3tty',
    price: 24.99,
    description: 'Bright floral energy with vacation-girl vibes.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'champagne-glaze',
    name: 'Champagne Glaze',
    collection: 'The Pretty Vault',
    vibe: 'Shimmer Pr3tty',
    price: 24.99,
    description: 'Soft champagne shimmer with luxe everyday glam.',
    image: 'https://images.unsplash.com/photo-1516975080661-422fc2bc929c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hot-girl',
    name: 'Hot Girl',
    collection: 'Quick Slay',
    vibe: 'Bold Pr3tty',
    price: 24.99,
    description: 'Bright bold color with instant main-character energy.',
    image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'midnight-dot',
    name: 'Midnight Dot',
    collection: 'The Pretty Vault',
    vibe: 'Bold Pr3tty',
    price: 24.99,
    description: 'Graphic black-and-white detail with fashion energy.',
    image: 'https://images.unsplash.com/photo-1595868426023-e18e11a3e810?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'blue-crush',
    name: 'Blue Crush',
    collection: 'Quick Slay',
    vibe: 'Wild Pr3tty',
    price: 24.99,
    description: 'Glossy blue with cool playful detail.',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'blackout',
    name: 'Blackout',
    collection: 'Quick Slay',
    vibe: 'Core Pr3tty',
    price: 24.99,
    description: 'Sleek all-black polish with timeless edge.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'luxury-muse',
    name: 'Luxury Muse',
    collection: 'The Pretty Vault',
    vibe: 'Statement Pr3tty',
    price: 24.99,
    description: 'An inspired custom art piece with luxe statement energy.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800',
    typeNote: 'Inspired Custom Art Piece'
  }
];

export const featuredProductIds = [
  'pr3tty-pressure',
  'champagne-glaze',
  'frozen-fantasy',
  'danger-doll',
  'class-act',
  'luxury-muse'
];
