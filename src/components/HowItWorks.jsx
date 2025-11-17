const steps = [
  {
    step: '1',
    title: 'Account erstellen',
    desc: 'Kostenlos registrieren und deinen Salon-Namen wählen',
  },
  {
    step: '2',
    title: 'Services auswählen',
    desc: 'Aus vordefinierten Services wählen oder eigene hinzufügen',
  },
  {
    step: '3',
    title: 'Link teilen & loslegen',
    desc: 'Teile deine Booking-URL mit Kunden und empfange Buchungen',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-gradient-to-b from-white to-violet-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">In 3 Schritten zu deiner Buchungsplattform</h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map(({ step, title, desc }) => (
            <div key={step} className="relative rounded-2xl bg-white border border-violet-100 p-6 shadow-sm">
              <div className="absolute -top-3 left-6 h-8 w-8 rounded-full bg-violet-600 text-white flex items-center justify-center font-semibold shadow-md">
                {step}
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
