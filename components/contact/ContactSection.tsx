function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/thebeautyeditbymeg', icon: InstagramIcon },
  { label: 'Facebook', href: 'https://facebook.com/thebeautyeditbymeg', icon: FacebookIcon },
  { label: 'TikTok', href: 'https://tiktok.com/@thebeautyeditbymeg', icon: TikTokIcon },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-stone-900 text-stone-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-rose-400 mb-6">
            Get in Touch
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-stone-50 leading-tight mb-10">
            Let&rsquo;s make
            <br />
            something
            <br />
            <em className="not-italic text-rose-300">beautiful.</em>
          </h2>
          <a
            href="mailto:thebeautyeditbymeg@gmail.com"
            className="inline-block text-xs tracking-widest uppercase border border-stone-50 text-stone-50 px-10 py-4 hover:bg-stone-50 hover:text-stone-900 transition-colors"
          >
            thebeautyeditbymeg@gmail.com
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xs tracking-widest uppercase text-stone-500 mb-2">
            Follow
          </p>
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-stone-400 hover:text-stone-50 transition-colors"
            >
              <Icon />
              <span className="text-sm tracking-wide">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
