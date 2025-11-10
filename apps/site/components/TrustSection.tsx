import { Star, Users, Award } from 'lucide-react'

export default function TrustSection() {
  const testimonials = [
    {
      name: 'Restaurant Dubrovnik',
      text: 'Zuverlässiger Partner seit Jahren. Beste Qualität und pünktliche Lieferung.',
      rating: 5,
    },
    {
      name: 'Marina K.',
      text: 'Endlich authentische kroatische Produkte in Hamburg! Wie zu Hause.',
      rating: 5,
    },
    {
      name: 'Hotel Alster',
      text: 'Exzellenter Service und hervorragende Weinauswahl für unsere Gäste.',
      rating: 5,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vertrauen seit über 25 Jahren
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3">
              <Award className="text-red-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">25+</div>
            <div className="text-gray-600">Jahre Erfahrung</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3">
              <Users className="text-red-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
            <div className="text-gray-600">Zufriedene Kunden</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3">
              <Star className="text-red-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">1000+</div>
            <div className="text-gray-600">Produkte</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
