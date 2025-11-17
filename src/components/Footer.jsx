import { Mail } from 'lucide-react'

export default function Footer() {
  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Preise', href: '#pricing' },
    { label: 'Über uns', href: '#about' },
    { label: 'Kontakt', href: '#contact' },
    { label: 'Blog', href: '#blog' },
  ]
  const legal = [
    { label: 'Impressum', href: '#' },
    { label: 'Datenschutz', href: '#' },
    { label: 'AGB', href: '#' },
  ]

  return (
    <footer className="border-t border-violet-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500" />
              <span className="font-semibold text-gray-900">Luvira.io</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 max-w-sm">Die einfache, professionelle Plattform für Terminbuchung und Kundenmanagement – spezialisiert auf Beauty & Wellness.</p>
            <a href="mailto:support@luvira.io" className="mt-4 inline-flex items-center gap-2 text-sm text-violet-700 hover:text-violet-900">
              <Mail className="h-4 w-4" /> support@luvira.io
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm font-semibold text-gray-900">Navigation</div>
              <ul className="mt-3 space-y-2 text-sm">
                {links.map((l) => (
                  <li key={l.label}><a href={l.href} className="text-gray-600 hover:text-gray-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Rechtliches</div>
              <ul className="mt-3 space-y-2 text-sm">
                {legal.map((l) => (
                  <li key={l.label}><a href={l.href} className="text-gray-600 hover:text-gray-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div id="contact" className="">
            <div className="text-sm font-semibold text-gray-900">Kontakt</div>
            <p className="mt-3 text-sm text-gray-600">Hast du Fragen? Wir helfen dir gerne weiter.</p>
            <form className="mt-4 grid gap-3">
              <label className="sr-only" htmlFor="email">E-Mail</label>
              <input id="email" type="email" placeholder="Deine E-Mail" className="w-full rounded-lg border border-violet-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
              <label className="sr-only" htmlFor="message">Nachricht</label>
              <textarea id="message" placeholder="Nachricht" className="w-full rounded-lg border border-violet-200 px-3 py-2 text-sm h-24 focus:outline-none focus:ring-2 focus:ring-violet-500" />
              <button type="button" className="rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white px-4 py-2 text-sm font-medium shadow-md">Senden</button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Luvira.io – Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Instagram</a>
            <a href="#" className="hover:text-gray-700">LinkedIn</a>
            <a href="#" className="hover:text-gray-700">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
