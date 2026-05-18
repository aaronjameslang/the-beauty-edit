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

function LinkedInIcon() {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedInIcon },
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
            href="mailto:hello@thebeautyedit.co.uk"
            className="inline-block text-xs tracking-widest uppercase border border-stone-50 text-stone-50 px-10 py-4 hover:bg-stone-50 hover:text-stone-900 transition-colors"
          >
            hello@thebeautyedit.co.uk
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
