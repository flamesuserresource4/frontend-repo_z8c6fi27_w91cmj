import { CalendarDays, Users2, Sparkles, Smartphone, Globe2, BadgeEuro } from 'lucide-react'

const features = [
  {
    icon: CalendarDays,
    title: 'Online-Buchung 24/7',
    desc: 'Deine Kunden buchen bequem online über deine persönliche Subdomain.',
  },
  { icon: Users2, title: 'Kundenverwaltung', desc: 'Kundendaten, Termine und Historie zentral organisiert.' },
  { icon: Sparkles, title: 'Vordefinierte Services', desc: 'Über 50 Beauty-Services – sofort einsatzbereit.' },
  { icon: Smartphone, title: 'Mobile-First', desc: 'Perfekt für Smartphones – überall buchen, jederzeit.' },
  { icon: Globe2, title: 'Eigene Booking-Page', desc: 'Professionelle Subdomain (z. B. dein-salon.luvira.io).' },
  { icon: BadgeEuro, title: 'Transparente Preise', desc: 'Fair & klar – ohne versteckte Kosten.' },
]

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-br from-violet-700 to-fuchsia-700 bg-clip-text text-transparent">
            Alles was dein Salon braucht
          </h2>
          <p className="mt-3 text-gray-600">Einfach, professionell und auf Beauty & Wellness optimiert.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-3xl border border-violet-100/70 bg-white p-6 transition-all hover:shadow-[0_30px_80px_-20px_rgba(124,58,237,0.25)] overflow-hidden"
            >
              <div aria-hidden className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br from-violet-200 to-fuchsia-200 blur-2xl opacity-40 group-hover:opacity-70 transition" />
              <div className="h-12 w-12 rounded-xl bg-violet-600/10 text-violet-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
