import { Clock, Truck, Wine } from 'lucide-react'

export default function USPSection() {
  const usps = [
    {
      icon: Clock,
      title: '25+ Jahre Erfahrung',
      description: 'Seit über 25 Jahren Ihr zuverlässiger Partner für kroatische Spezialitäten',
    },
    {
      icon: Truck,
      title: 'B2B-Lieferung',
      description: 'Professionelle Belieferung für Gastronomie und Einzelhandel',
    },
    {
      icon: Wine,
      title: 'Ausgewählte Weine',
      description: 'Erlesene kroatische Weine und Spezialitäten direkt importiert',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usps.map((usp, idx) => (
            <div key={idx} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <usp.icon size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{usp.title}</h3>
              <p className="text-gray-600">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
