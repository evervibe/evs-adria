'use client'

import { Phone, Navigation } from 'lucide-react'
import { SITE } from '@/lib/config'
import WhatsAppButton from './WhatsAppButton'

export default function Hero() {
  const handleRoute = () => {
    window.open(SITE.mapLink, '_blank')
  }

  return (
    <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Kroatische Spezialitäten
            <span className="block text-red-600 mt-2">im Herzen Hamburgs</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {SITE.tagline}. Ihr Partner für Balkan-Feinkost, ausgewählte Weine und Delikatessen.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-semibold shadow-lg w-full sm:w-auto justify-center"
            >
              <Phone size={20} />
              Jetzt anrufen
            </a>
            
            <WhatsAppButton className="w-full sm:w-auto justify-center" />
            
            <button
              onClick={handleRoute}
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg w-full sm:w-auto justify-center"
            >
              <Navigation size={20} />
              Route starten
            </button>
          </div>

          {/* Quick Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
              <div>
                <p className="font-semibold">{SITE.address.street}</p>
                <p>{SITE.address.postalCode} {SITE.address.city}</p>
              </div>
              <div>
                <p className="font-semibold">Öffnungszeiten</p>
                <p>Mo–Fr: 09:00–18:00</p>
              </div>
              <div>
                <p className="font-semibold">Kontakt</p>
                <p>{SITE.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
