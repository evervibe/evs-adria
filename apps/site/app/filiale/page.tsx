import { Metadata } from 'next'
import { MapPin, Clock, Phone, Mail, Car } from 'lucide-react'
import { SITE } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Filiale - Adria GPS GmbH',
  description: 'Besuchen Sie unsere Filiale in Hamburg. Öffnungszeiten, Anfahrt und Parkmöglichkeiten.',
}

export default function FilialePage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Unsere Filiale</h1>
        <p className="text-lg text-gray-600 mb-12">
          Besuchen Sie uns in der Hammerbrookstraße und erleben Sie kroatische Gastfreundschaft
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <MapPin className="text-red-600" size={28} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Adresse</h2>
                  <p className="text-gray-700">
                    {SITE.address.street}<br />
                    {SITE.address.postalCode} {SITE.address.city}<br />
                    {SITE.address.country}
                  </p>
                  <a
                    href={SITE.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-red-600 hover:text-red-700 font-medium"
                  >
                    Route in Maps öffnen →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Clock className="text-red-600" size={28} />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Öffnungszeiten</h2>
                  <div className="space-y-2">
                    {SITE.openingHours.map((schedule, idx) => (
                      <div key={idx} className="flex justify-between text-gray-700">
                        <span className="font-medium">{schedule.day}</span>
                        <span>{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Phone className="text-red-600" size={28} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Kontakt</h2>
                  <p className="text-gray-700 space-y-1">
                    <a href={`tel:${SITE.phone}`} className="block hover:text-red-600">
                      Telefon: {SITE.phone}
                    </a>
                    <a href={`mailto:${SITE.email}`} className="block hover:text-red-600">
                      E-Mail: {SITE.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Car className="text-red-600" size={28} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Parken & Anfahrt</h2>
                  <p className="text-gray-700">
                    Parkplätze sind in der Nähe vorhanden. Mit öffentlichen Verkehrsmitteln 
                    erreichen Sie uns gut über die U-Bahn-Station Hammer Kirche.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gray-200 rounded-xl overflow-hidden h-[600px] relative">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
              <div className="text-center">
                <MapPin size={64} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Karte wird geladen...</p>
                <a
                  href={SITE.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  In Google Maps öffnen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
