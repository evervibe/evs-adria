import { Metadata } from 'next'
import { Phone, Mail, MapPin } from 'lucide-react'
import { SITE } from '@/lib/config'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Kontakt - Adria GPS GmbH',
  description: 'Kontaktieren Sie uns per Telefon, WhatsApp oder E-Mail. Wir freuen uns auf Ihre Anfrage.',
}

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Kontakt</h1>
        <p className="text-lg text-gray-600 mb-12">
          Haben Sie Fragen oder möchten Sie uns kontaktieren? Wir sind für Sie da!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href={`tel:${SITE.phone}`}
            className="bg-red-50 rounded-xl p-6 hover:bg-red-100 transition-colors group"
          >
            <div className="flex items-start gap-4">
              <div className="bg-red-600 p-3 rounded-lg">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                  Telefon
                </h2>
                <p className="text-gray-700">{SITE.phone}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Mo–Fr: 09:00–18:00 Uhr
                </p>
              </div>
            </div>
          </a>

          <WhatsAppButton variant="card" />

          <a
            href={`mailto:${SITE.email}`}
            className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors group"
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  E-Mail
                </h2>
                <p className="text-gray-700">{SITE.email}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Wir antworten innerhalb von 24 Stunden
                </p>
              </div>
            </div>
          </a>

          <a
            href={SITE.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
          >
            <div className="flex items-start gap-4">
              <div className="bg-gray-600 p-3 rounded-lg">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
                  Besuchen Sie uns
                </h2>
                <p className="text-gray-700">
                  {SITE.address.street}<br />
                  {SITE.address.postalCode} {SITE.address.city}
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Contact Form Placeholder */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontaktformular</h2>
          <p className="text-gray-600 mb-6">
            Für schnellere Antworten nutzen Sie bitte direkt Telefon, WhatsApp oder E-Mail.
          </p>
          <div className="space-y-4">
            <p className="text-gray-700">
              <strong>Telefon:</strong> <a href={`tel:${SITE.phone}`} className="text-red-600 hover:text-red-700">{SITE.phone}</a>
            </p>
            <p className="text-gray-700">
              <strong>E-Mail:</strong> <a href={`mailto:${SITE.email}`} className="text-red-600 hover:text-red-700">{SITE.email}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
