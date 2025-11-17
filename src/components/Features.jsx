import { CalendarDays, Users2, Sparkles, Smartphone, Globe2, BadgeEuro } from 'lucide-react'

const features = [
  {
    icon: CalendarDays,
    title: 'Online-Buchung 24/7',
    desc: 'Deine Kunden buchen bequem online über deine persönliche Subdomain',
  },
  { icon: Users2, title: 'Kundenverwaltung', desc: 'Verwalte Kundendaten, Termine und Historie zentral an einem Ort' },
  { icon: Sparkles, title: 'Vordefinierte Services', desc: 'Über 50 vordefinierte Beauty-Services - sofort einsatzbereit' },
  { icon: Smartphone, title: 'Mobile-First', desc: 'Optimiert für Smartphones - deine Kunden buchen von unterwegs' },
  { icon: Globe2, title: 'Eigene Booking-Page', desc: 'Jeder Salon erhält seine eigene professionelle Subdomain (z.B. dein-salon.luvira.io)' },
  { icon: BadgeEuro, title: 'Transparente Preise', desc: 'Faire Preise ohne versteckte Kosten - perfekt für kleine Businesses' },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Alles was dein Salon braucht</h2>
          <p className="mt-3 text-gray-600">Einfach, professionell und auf Beauty & Wellness optimiert.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-violet-100 bg-gradient-to-br from-white to-violet-50/20 p-6 transition-all hover:shadow-lg">
              <div className="h-12 w-12 rounded-xl bg-violet-600/10 text-violet-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
