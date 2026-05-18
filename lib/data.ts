export type EditorialItem = {
  id: string
  category: string
  title: string
  imageAlt: string
  imageSrc: string
  span?: 'wide' | 'tall' | 'normal'
}

export type Service = {
  title: string
  description: string
}

export const editorialItems: EditorialItem[] = [
  {
    id: '1',
    category: 'Campaign',
    title: 'Luminance — Spring Collection',
    imageAlt: 'Model wearing soft neutrals against marble backdrop',
    imageSrc: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80',
    span: 'wide',
  },
  {
    id: '2',
    category: 'Portrait',
    title: 'The Artist at Rest',
    imageAlt: 'Close portrait with dramatic side lighting',
    imageSrc: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80',
    span: 'tall',
  },
  {
    id: '3',
    category: 'Editorial',
    title: 'Botanica',
    imageAlt: 'Beauty editorial with floral arrangements',
    imageSrc: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80',
  },
  {
    id: '4',
    category: 'Campaign',
    title: 'Nocturne Fragrance',
    imageAlt: 'Fragrance campaign in candlelit studio',
    imageSrc: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=1200&q=80',
  },
  {
    id: '5',
    category: 'Runway',
    title: 'SS25 Beauty — London Fashion Week',
    imageAlt: 'Backstage runway beauty at London Fashion Week',
    imageSrc: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80',
    span: 'wide',
  },
  {
    id: '6',
    category: 'Portrait',
    title: 'Still Life',
    imageAlt: 'Minimalist portrait, natural light',
    imageSrc: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80',
  },
]

export const aboutImageSrc = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80'

export const services: Service[] = [
  {
    title: 'Editorial',
    description: 'Magazine and digital editorial beauty direction',
  },
  {
    title: 'Campaign',
    description: 'Brand campaign concepting and on-set art direction',
  },
  {
    title: 'Runway',
    description: 'Fashion week and runway show beauty direction',
  },
  {
    title: 'Consultancy',
    description: 'Creative strategy and brand identity for beauty labels',
  },
]
