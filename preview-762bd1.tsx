const links = [
  { href: '#about', label: '自我介绍', en: 'about' },
  { href: '#copy', label: '文案排版', en: 'copy' },
  { href: '#ops', label: '平台运营', en: 'ops' },
  { href: '#design', label: '美工设计', en: 'design' },
  { href: '#soft', label: '软能力', en: 'soft' },
]

export default function Nav() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl">
      <nav className="flex items-center justify-between gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur-xl px-5 py-2.5 shadow-[0_8px_30px_-10px_rgba(120,135,160,0.35)]">
        <a href="#top" className="font-hand text-2xl text-[#2fbf9d] leading-none -rotate-2">
          mint&nbsp;cat
        </a>
        <div className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="scribble-link font-cute text-sm text-[#1c1e26] px-1 py-0.5"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="font-lp text-[11px] uppercase rounded-full bg-[#1c1e26] text-white px-4 py-2 hover:bg-[#2fbf9d] transition-colors"
        >
          contact ✦
        </a>
      </nav>
    </header>
  )
}
