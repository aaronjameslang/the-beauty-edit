import { services } from '@/lib/data'

export default function Services() {
  return (
    <section className="py-24 px-6 bg-stone-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.25em] uppercase text-rose-400 mb-4">
            Services
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
            What I do
          </h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-300">
          {services.map((service) => (
            <li key={service.title} className="bg-stone-100 p-10">
              <h3 className="font-serif text-2xl text-stone-900 mb-3">
                {service.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
