import Image from 'next/image'
import { aboutImageSrc } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[3/4] bg-stone-200 overflow-hidden">
          <Image
            src={aboutImageSrc}
            alt="Portrait of the creative director"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-rose-400 mb-6">
            About
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8 leading-tight">
            Craft over
            <br />
            convention.
          </h2>
          <div className="space-y-5 text-stone-600 leading-relaxed">
            <p>
              With over a decade working across editorial, campaign, and runway,
              The Beauty Edit is a London-based creative direction studio
              specialising in beauty storytelling that feels considered,
              intentional, and enduring.
            </p>
            <p>
              I believe that the most powerful beauty imagery begins before a
              single light is placed — in the research, the reference, the
              quiet conversation between concept and context. Whether it is a
              fragrance campaign or a magazine cover, the work begins with why.
            </p>
            <p>
              Clients include independent beauty labels, global fashion houses,
              and publications across the UK and Europe.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
