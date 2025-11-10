import { Metadata } from 'next'
import { Truck, Clock, Euro, FileText, Phone } from 'lucide-react'
import { SITE } from '@/lib/config'

export const metadata: Metadata = {
  title: 'B2B Lieferung - Adria GPS GmbH',
  description: 'Professionelle B2B-Lieferung für Gastronomie und Einzelhandel. Faire Konditionen und zuverlässiger Service.',
}

export default function B2BLieferungPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">B2B-Lieferung</h1>
          <p className="text-lg text-gray-600">
            Beliefern Sie Ihr Restaurant, Hotel oder Geschäft mit authentischen kroatischen Produkten. 
            Profitieren Sie von unserer langjährigen Erfahrung und zuverlässigen Lieferung.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-red-50 rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
              <Truck className="text-white" size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Zuverlässig</h3>
            <p className="text-gray-600 text-sm">Pünktliche Lieferung</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <Clock className="text-white" size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Flexibel</h3>
            <p className="text-gray-600 text-sm">Nach Ihren Wünschen</p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
              <Euro className="text-white" size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Fair</h3>
            <p className="text-gray-600 text-sm">Attraktive Preise</p>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4">
              <FileText className="text-white" size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Einfach</h3>
            <p className="text-gray-600 text-sm">Unkomplizierte Abwicklung</p>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Liefergebiet</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Hamburg und Umgebung</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Flexible Lieferzeiten nach Absprache</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Regelmäßige Belieferung möglich</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Konditionen</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Mindestbestellwert nach Vereinbarung</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Attraktive Staffelpreise</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Flexible Zahlungsmöglichkeiten</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Interessiert?</h2>
          <p className="text-lg mb-8 text-red-50 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein persönliches Angebot. Wir beraten Sie gerne zu unserem 
            Sortiment und finden die passende Lösung für Ihr Unternehmen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <Phone size={20} />
              Jetzt anrufen
            </a>
            <a
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-red-800 text-white px-8 py-4 rounded-lg hover:bg-red-900 transition-colors font-semibold"
            >
              Kontaktformular
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
