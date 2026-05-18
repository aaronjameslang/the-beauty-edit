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
    imageSrc: '/images/editorial-1.jpg',
    span: 'wide',
  },
  {
    id: '2',
    category: 'Portrait',
    title: 'The Artist at Rest',
    imageAlt: 'Close portrait with dramatic side lighting',
    imageSrc: '/images/editorial-2.jpg',
    span: 'tall',
  },
  {
    id: '3',
    category: 'Editorial',
    title: 'Botanica',
    imageAlt: 'Beauty editorial with floral arrangements',
    imageSrc: '/images/editorial-3.jpg',
  },
  {
    id: '4',
    category: 'Campaign',
    title: 'Nocturne Fragrance',
    imageAlt: 'Fragrance campaign in candlelit studio',
    imageSrc: '/images/editorial-4.jpg',
  },
  {
    id: '5',
    category: 'Runway',
    title: 'SS25 Beauty — London Fashion Week',
    imageAlt: 'Backstage runway beauty at London Fashion Week',
    imageSrc: '/images/editorial-5.jpg',
    span: 'wide',
  },
  {
    id: '6',
    category: 'Portrait',
    title: 'Still Life',
    imageAlt: 'Minimalist portrait, natural light',
    imageSrc: '/images/editorial-6.jpg',
  },
]

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
