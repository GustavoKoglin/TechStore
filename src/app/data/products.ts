export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Headphones',
    price: 299.90,
    category: 'audio',
    image: 'https://images.unsplash.com/photo-1713618651165-a3cf7f85506c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoZWFkcGhvbmVzfGVufDF8fHx8MTc3MzkxMjM4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Headphones with active noise cancellation and exceptional sound quality.',
    rating: 4.5,
    inStock: true
  },
  {
    id: '2',
    name: 'Wireless Earbuds',
    price: 199.90,
    category: 'audio',
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHN8ZW58MXx8fHwxNzczOTE2MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Wireless earbuds with charging case and crystal clear sound.',
    rating: 4.3,
    inStock: true
  },
  {
    id: '3',
    name: 'Ultra Laptop',
    price: 3499.90,
    category: 'computers',
    image: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NzM4NDU4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Powerful laptop with latest generation processor and elegant design.',
    rating: 4.8,
    inStock: true
  },
  {
    id: '4',
    name: 'Pro Smartphone',
    price: 2999.90,
    category: 'phones',
    image: 'https://images.unsplash.com/photo-1741061961703-0739f3454314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlfGVufDF8fHx8MTc3Mzk1MDU2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Smartphone with professional camera and superior performance.',
    rating: 4.7,
    inStock: true
  },
  {
    id: '5',
    name: 'Fitness Smartwatch',
    price: 899.90,
    category: 'wearables',
    image: 'https://images.unsplash.com/photo-1719744755507-a4c856c57cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwd2VhcmFibGV8ZW58MXx8fHwxNzczOTEwMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Smart watch with comprehensive health monitoring.',
    rating: 4.4,
    inStock: true
  },
  {
    id: '6',
    name: 'Bluetooth Speaker',
    price: 349.90,
    category: 'audio',
    image: 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVldG9vdGglMjBzcGVha2VyfGVufDF8fHx8MTc3MzkyNjE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Portable speaker with powerful sound and long battery life.',
    rating: 4.2,
    inStock: false
  },
  {
    id: '7',
    name: 'Pro Digital Camera',
    price: 4299.90,
    category: 'cameras',
    image: 'https://images.unsplash.com/photo-1579535984712-92fffbbaa266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzM5MjkyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Professional camera with high-resolution sensor.',
    rating: 4.9,
    inStock: true
  },
  {
    id: '8',
    name: 'Gaming Mechanical Keyboard',
    price: 449.90,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBrZXlib2FyZHxlbnwxfHx8fDE3NzM5MjYyODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'RGB mechanical keyboard with premium switches.',
    rating: 4.6,
    inStock: true
  }
];

export const categories = [
  { id: 'todos', label: 'All' },
  { id: 'audio', label: 'Audio' },
  { id: 'computers', label: 'Computers' },
  { id: 'phones', label: 'Phones' },
  { id: 'wearables', label: 'Wearables' },
  { id: 'cameras', label: 'Cameras' },
  { id: 'accessories', label: 'Accessories' }
];
