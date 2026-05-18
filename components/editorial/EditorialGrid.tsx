import { editorialItems } from '@/lib/data'
import EditorialCard from './EditorialCard'

export default function EditorialGrid() {
  return (
    <section id="work" className="py-24 px-6 bg-stone-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.25em] uppercase text-rose-400 mb-4">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-50">
            Selected Work
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          {editorialItems.map((item) => (
            <EditorialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
