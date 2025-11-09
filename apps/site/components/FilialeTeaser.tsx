import { MapPin, Clock, Phone } from 'lucide-react'
import Link from 'next/link'
import { SITE } from '@/lib/config'

export default function FilialeTeaser() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Besuchen Sie unsere Filiale
          </h2>
          <p className="text-lg text-gray-600">
            Erleben Sie kroatische Gastfreundschaft im Herzen Hamburgs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info Card */}
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <MapPin className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                  <p className="text-gray-700">
                    {SITE.address.street}<br />
                    {SITE.address.postalCode} {SITE.address.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Clock className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Öffnungszeiten</h3>
                  <div className="text-gray-700 space-y-1">
                    {SITE.openingHours.map((schedule, idx) => (
                      <div key={idx} className="flex justify-between gap-4">
                        <span>{schedule.day}:</span>
                        <span>{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Phone className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Kontakt</h3>
                  <p className="text-gray-700">{SITE.phone}</p>
                </div>
              </div>

              <Link
                href="/filiale"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold w-full justify-center"
              >
                Mehr Informationen
              </Link>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-gray-200 rounded-xl overflow-hidden h-[400px] relative">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
              <div className="text-center">
                <MapPin size={48} className="text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Karte wird geladen...</p>
                <a
                  href={SITE.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-red-600 hover:text-red-700 font-medium"
                >
                  In Google Maps öffnen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
