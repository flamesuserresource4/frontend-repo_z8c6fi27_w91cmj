import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'So funktioniert’s', href: '#how' },
    { label: 'Preise', href: '#pricing' },
    { label: 'Kontakt', href: '#contact' },
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 border-b border-violet-100 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30" />
            <span className="font-semibold text-gray-900 text-lg">Luvira.io</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#cta" className="ml-2 inline-flex items-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white px-4 py-2 text-sm font-medium shadow-md shadow-violet-500/30 hover:shadow-lg hover:shadow-violet-500/40 transition-all">
              Jetzt kostenlos testen
            </a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-gray-700 hover:bg-violet-50"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white text-center"
              >
                Jetzt kostenlos testen
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
