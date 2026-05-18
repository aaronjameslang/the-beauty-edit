const footerLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-stone-900 border-t border-stone-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-stone-600 tracking-wide">
          &copy; {new Date().getFullYear()} The Beauty Edit. All rights reserved.
        </p>
        <ul className="flex gap-6">
          {footerLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-[10px] tracking-widest uppercase text-stone-600 hover:text-stone-400 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
