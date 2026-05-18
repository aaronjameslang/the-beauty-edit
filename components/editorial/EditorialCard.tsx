import type { EditorialItem } from '@/lib/data'
import Image from 'next/image'

type Props = {
  item: EditorialItem
}

export default function EditorialCard({ item }: Props) {
  const spanClass =
    item.span === 'wide'
      ? 'md:col-span-2'
      : item.span === 'tall'
        ? 'md:row-span-2'
        : ''

  return (
    <article className={`group relative overflow-hidden bg-stone-200 ${spanClass}`}>
      <div className="aspect-[4/5] relative overflow-hidden">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-[10px] tracking-[0.2em] uppercase text-rose-300 mb-1">
          {item.category}
        </p>
        <h3 className="font-serif text-white text-lg leading-snug drop-shadow-md">
          {item.title}
        </h3>
      </div>
    </article>
  )
}
